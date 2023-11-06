import { DeviceData } from "./types";

export const render = (element: HTMLDivElement, data: DeviceData) => {
  element.innerHTML =
    `
      <div class="card">
        <p><b>Browser:</b> ${data.browser}</p>
        <p><b>OS:</b> ${data.os}</p>
        <p><b>Platform:</b> ${data.platform}</p>
        <p><b>Number of cameras:</b> ${data.numberOfCams}</p>
        <p><b>Number of microphones:</b> ${data.numberOfMics}</p>
        <p><b>Number of speakers:</b> ${data.numberOfSpeakers}</p>
        <p><b>Camera names:</b> 
          <ul>
            ${data.cameras.map(cam => `<li>${cam}</li>`).join('')}
          </ul>
        </p>
        <p><b>Microphone names:</b> 
          <ul>
            ${data.microphones.map(mic => `<li>${mic}</li>`).join('')}
          </ul>
        </p>
        <p><b>Speaker names:</b> 
          <ul>
            ${data.speakers.map(speaker => `<li>${speaker}</li>`).join('')}
          </ul>
        </p>
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
            <li>Battery level: ${data.battery.level}</li>
            <li>Battery charging: ${data.battery.charging === 'unsupported' ? data.battery.charging : data.battery.charging ? 'Yes' : 'No'} </li>
            <li>Battery charging time: ${data.battery.chargingTime}</li>
            <li>Battery discharging time: ${data.battery.dischargingTime}</li>
          </ul>
        </p>
        <p><b>Other devices:</b> 
          <ul>
            ${data.otherDevices.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </p>
      </div>
    `
}