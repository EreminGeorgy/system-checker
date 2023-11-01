import Bowser from "bowser";

interface DeviceData {
  os: string
  vendorWebGL: string
  battery: {
    level: number | "unsupported"
    chargingTime: number | "unsupported"
    charging: boolean | "unsupported"
    dischargingTime: number | "unsupported"
  };
  platform: string
  maxTouchPoints: string
  devicePixelRatio: number
  cameras: string[];
  rendererWebGLUnmasked: string
  browser: string
  rendererWebGL: string
  vendorWebGLUnmasked: string
  openGLVersion: string
  gyroscopeData: string
  numberOfCams: number
}

export function dump(element: HTMLButtonElement) {

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

  const setData = () => {
    element.innerHTML = `
      <div>
        <p><b>Browser:</b> ${data.browser}</p>
        <p><b>OS:</b> ${data.os}</p>
        <p><b>Platform:</b> ${data.platform}</p>
        <p><b>Number of cameras:</b> ${data.numberOfCams}</p>
        <p><b>Camera names:</b> ${data.cameras}</p>
        <p><b>Max touch points:</b> ${data.maxTouchPoints}</p>
        <p><b>Vendor webGL:</b> ${data.vendorWebGL}</p>
        <p><b>Renderer webGL:</b> ${data.rendererWebGL}</p>
        <p><b>UNMASKED_VENDOR_WEBGL:</b> ${data.vendorWebGLUnmasked}</p>
        <p><b>UNMASKED_RENDERER_WEBGL:</b> ${data.rendererWebGLUnmasked}</p>
        <p><b>Shading Language Version:</b> ${data.openGLVersion}</p>
        <p><b>Gyroscope data:</b> ${data.gyroscopeData}</p>
        <p><b>Device Pixel ratio:</b> ${data.devicePixelRatio}</p>
        <p><b>Battery status:</b>
          <ul>
            <li>Battery level: ${data.battery.level === 'unsupported' ? data.battery.level : data.battery.level * 100 + '%'}</li>
            <li>Battery charging: ${data.battery.charging === 'unsupported' ? data.battery.charging : data.battery.charging ? 'Yes' : 'No'} </li>
            <li>Battery charging time: ${data.battery.chargingTime === 'unsupported' ? data.battery.chargingTime : data.battery.chargingTime + 'seconds'}</li>
            <li>Battery discharging time: ${data.battery.dischargingTime === 'unsupported' ? data.battery.dischargingTime : data.battery.dischargingTime + 'seconds'}</li>
          </ul>
        </p>
      </div>
    `
  }

  // Obtaining camera info
  console.log(navigator?.mediaDevices?.enumerateDevices);
  if (navigator?.mediaDevices?.enumerateDevices) {
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        console.log(devices);
        const cameraDevices = devices.filter(device => device.kind === 'videoinput')
        data.numberOfCams = cameraDevices.length
        cameraDevices.forEach(device => data.cameras.push(device.label))
        setData()
      })
      .catch(error => {
        console.error('Error accessing media devices.', error)
      })
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

  // Obtaining gyroscope data


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
      battery.addEventListener('chargingtimechange', updateBatteryInfo);
      battery.addEventListener('dischargingtimechange', updateBatteryInfo);
      setData()
    });
  } else {
    data.battery.level = 'unsupported'
    data.battery.charging = 'unsupported'
    data.battery.chargingTime = 'unsupported'
    data.battery.dischargingTime = 'unsupported'
  }

  setData()


  document.getElementById('dump')?.addEventListener('click', async function () {
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
    setData()
  });
}
