export interface DeviceData {
  deviceName: string
  declaredPlatform: string
  isEmulator: boolean
  os: string
  vendorWebGL: string
  battery: {
    level: string
    chargingTime: string
    charging: boolean | 'unsupported'
    dischargingTime: string
  };
  platform: string
  maxTouchPoints: string
  devicePixelRatio: number
  cameras: string[]
  microphones: string[]
  speakers: string[]
  rendererWebGLUnmasked: string
  browser: string
  rendererWebGL: string
  vendorWebGLUnmasked: string
  openGLVersion: string
  gyroscopeData: string
  numberOfCams: number
  numberOfMics: number
  numberOfSpeakers: number
  torch: string
  deviceMemory: number | string
  coresNumber: number | string
  otherDevices: string[]
}