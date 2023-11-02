import Bowser from "bowser";
import { render } from "./render";

import { DeviceData } from "./types";

export function dump(element: HTMLDivElement) {

  const browser = Bowser.getParser(window.navigator.userAgent);

  const data: DeviceData = {
    browser: browser.getBrowserName() + ' ' + browser.getBrowserVersion(),
    os: browser.getOSName() + ' ' + browser.getOSVersion(),
    platform: browser.getPlatformType(),
    numberOfCams: 0,
    cameras: [],
    maxTouchPoints: '',
    vendorWebGL: '',
    rendererWebGL: '',
    vendorWebGLUnmasked: '',
    rendererWebGLUnmasked: '',
    openGLVersion: '',
    gyroscopeData: '',
    devicePixelRatio: window.devicePixelRatio || 1,
    battery: {
      level: 0 as number | 'unsupported',
      charging: false as boolean | 'unsupported',
      chargingTime: 0 as number | 'unsupported',
      dischargingTime: 0 as number | 'unsupported',
    }
  }

  // Obtaining camera info

  if (navigator?.mediaDevices) {

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        if (navigator.mediaDevices.enumerateDevices) {
          navigator.mediaDevices
            .enumerateDevices()
            .then(devices => {
              const cameraDevices = devices.filter(device => device.kind === 'videoinput')
              data.numberOfCams = cameraDevices.length
              cameraDevices.forEach(device => data.cameras.push(device.label))
              render(element, data)
            })
            .catch(error => {
              console.error('Error accessing media devices.', error)
            })
        }
        // Do something here if needed, since permissions have been granted
      })
      .catch(error => {
        console.error('Error accessing the camera', error);
      });
  }

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

  // Light sensor detection ????

  if ('AmbientLightSensor' in window) {
    try {
      // @ts-ignore
      const sensor = new AmbientLightSensor();
      sensor.addEventListener('reading', () => {
        console.log('Current light level:', sensor.illuminance);
      });
      sensor.start();
    } catch (err) {
      console.error('The Ambient Light Sensor is not supported:', err);
    }
  } else {
    console.log('The Ambient Light Sensor is not supported by this browser.');
  }

  // Battery status

  if ('getBattery' in navigator) {
    // @ts-ignore
    navigator.getBattery().then(battery => {
      const updateBatteryInfo = () => {
        data.battery.level = battery.level
        data.battery.charging = battery.charging
        data.battery.chargingTime = battery.chargingTime
        data.battery.dischargingTime = battery.dischargingTime
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
    render(element, data)
  });
}
