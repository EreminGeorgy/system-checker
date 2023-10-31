import './style.css'
import { dump } from './dump.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="dump" type="button"></button>
    </div>
  </div>
`

dump(document.querySelector<HTMLButtonElement>('#dump')!)
