import Bowser from "bowser";
import { render } from "./render";

import { DeviceData } from "./types";
import { sendData } from "./postData";

export function dump(element: HTMLDivElement) {

  const browser = Bowser.getParser(window.navigator.userAgent);

  const data: DeviceData = {
    deviceName: '',
    browser: browser.getBrowserName() + ' ' + browser.getBrowserVersion(),
    os: browser.getOSName() + ' ' + browser.getOSVersion() + ' ' + navigator.platform,
    platform: browser.getPlatformType(),
    numberOfCams: 0,
    numberOfMics: 0,
    numberOfSpeakers: 0,
    cameras: [],
    microphones: [],
    speakers: [],
    maxTouchPoints: '',
    vendorWebGL: '',
    rendererWebGL: '',
    vendorWebGLUnmasked: '',
    rendererWebGLUnmasked: '',
    openGLVersion: '',
    gyroscopeData: '',
    devicePixelRatio: window.devicePixelRatio || 1,
    battery: {
      level: '0%' || 'unsupported',
      charging: false as boolean || 'unsupported',
      chargingTime: '0' || 'unsupported',
      dischargingTime: '0' || 'unsupported',
    },
    torch: '',
    deviceMemory: navigator?.deviceMemory || 'unsupported',
    coresNumber: navigator.hardwareConcurrency || 'unsupported',
    otherDevices: []
  }

  //Obtaining device/emulator name

  document.querySelector<HTMLInputElement>('#name')?.addEventListener('change', function (event: Event) {
    data.deviceName = (event.target as HTMLInputElement)?.value;
  })

  // Obtaining max touch points

  const maxTouchPoints = 'maxTouchPoints' in navigator ? navigator.maxTouchPoints : 'Not Supported'
  data.maxTouchPoints = maxTouchPoints.toString() || 'Not Supported'

  // Obtaining render engine info

  const canvas = document.createElement('canvas')
  canvas.style.display = 'none'
  const gl =
    canvas.getContext('webgl') ||
    (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)
  const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info')
  if (!gl || !debugInfo) {
    console.error('Unable to initialize WebGL. Browser may not support it.')
    data.vendorWebGL = 'unsupported'
    data.rendererWebGL = 'unsupported'
    data.vendorWebGLUnmasked = 'unsupported'
    data.rendererWebGLUnmasked = 'unsupported'
    data.openGLVersion = 'unsupported'
    return
  }

  data.vendorWebGL = gl.getParameter(gl.VENDOR)
  data.rendererWebGL = gl.getParameter(gl.RENDERER)
  data.vendorWebGLUnmasked = gl.getParameter(debugInfo['UNMASKED_VENDOR_WEBGL'])
  data.rendererWebGLUnmasked = gl.getParameter(debugInfo['UNMASKED_RENDERER_WEBGL'])
  data.openGLVersion = gl.getParameter(gl.SHADING_LANGUAGE_VERSION)

  render(element, data)

  document.querySelector('#permissions')?.addEventListener('click', async function () {

    // Obtaining gyroscope data

    if ('DeviceOrientationEvent' in window) {
      // @ts-ignore
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          // @ts-ignore
          const permissionState = await DeviceOrientationEvent.requestPermission();
          if (permissionState === 'granted') {
            data.gyroscopeData = 'permission granted';
          } else {
            data.gyroscopeData = 'permission denied';
          }
        } catch (error) {
          console.error(error);
          data.gyroscopeData = 'error requesting permission';
        }
      } else {
        data.gyroscopeData = 'unsupported';
      }
    } else {
      data.gyroscopeData = 'unsupported';
    }

    // Obtaining media info

    if (navigator?.mediaDevices) {

      navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: true,
      })
        .then(stream => {
          // Grab the track that corresponds to the camera
          const track = stream.getVideoTracks()[0];

          // Check if this track supports switching the flashlight on
          const capabilities = track.getCapabilities && track.getCapabilities();

          // @ts-ignore
          if (capabilities && capabilities.torch) {
            // Apply the torch constraint using type assertion to bypass TypeScript type checking
            (track as any).applyConstraints({
              advanced: [{ torch: true }]
            })
              .then(() => {
                data.torch = 'Torch turned on!'
              })
              // @ts-ignore
              .catch(error => {
                data.torch = `Error applying torch constraints: ${error}`
              });
          } else { data.torch = 'no torch enabled' }

          // Now, enumerate devices
          return navigator.mediaDevices.enumerateDevices();
        })
        .then(devices => {
          const cameraDevices = devices.filter(device => device.kind === 'videoinput')
          data.numberOfCams = cameraDevices.length
          cameraDevices.forEach(device => data.cameras.push(device.label))

          const microphones = devices.filter(device => device.kind === 'audioinput').filter(device => device.deviceId !== 'default')
          data.numberOfMics = microphones.length
          microphones.forEach(device => data.microphones.push(device.label))

          const speakers = devices.filter(device => device.kind === 'audiooutput').filter(device => device.deviceId !== 'default')
          data.numberOfSpeakers = speakers.length
          speakers.forEach(device => data.speakers.push(device.label))

          const otherDevices = devices.filter(device =>
            device.kind !== 'audiooutput' &&
            device.kind !== 'audioinput' &&
            device.kind !== 'videoinput'
          );

          otherDevices.forEach(device => data.otherDevices.push(device.label))

          render(element, data)
        })
        .catch(error => {
          console.error('Error accessing media devices.', error)
        })
    }

    // Battery status

    if ('getBattery' in navigator) {
      // @ts-ignore
      navigator.getBattery().then(battery => {
        const updateBatteryInfo = () => {
          data.battery.level = `${battery.level * 100}%`
          data.battery.charging = battery.charging
          data.battery.chargingTime = `${battery.chargingTime} seconds`
          data.battery.dischargingTime = `${battery.dischargingTime} seconds`
        }

        updateBatteryInfo();

        battery.addEventListener('chargingchange', updateBatteryInfo);
        battery.addEventListener('levelchange', updateBatteryInfo);
        render(element, data)
      });
    } else {
      data.battery.level = 'unsupported'
      data.battery.charging = 'unsupported'
      data.battery.chargingTime = 'unsupported'
      data.battery.dischargingTime = 'unsupported'
    }

    render(element, data)
  })

  document.querySelector<HTMLButtonElement>('button[type="submit"]')?.addEventListener('click', (e) => sendData(e, data))
}
