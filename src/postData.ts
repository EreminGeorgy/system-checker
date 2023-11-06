import { DeviceData } from "./types";

async function sendData(e: MouseEvent, data: DeviceData) {
  e.preventDefault()
  await alert('Sending data')

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz2-kw7kkBkuQ_gE_I33UzbS272tDCN4nkK0XtrhgelM2r_iVT_xzF1yaVtA4vJbgBm/exec', {
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
