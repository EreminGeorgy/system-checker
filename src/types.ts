export interface DeviceData {
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