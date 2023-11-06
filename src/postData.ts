import { DeviceData } from "./types";

async function sendData(e: MouseEvent, data: DeviceData) {
  e.preventDefault()
  await alert('Sending data')

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwdp212dEIlF2mIerupzzNxvVHWOwM_3pqX-pJgPsyNgXQudDHT8KTZJapJ9_e-xxr7/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Data sent successfully', result);
  } catch (error) {
    console.log(error);
  }

  await alert('data sent')
}

export { sendData };
