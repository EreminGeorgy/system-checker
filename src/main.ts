import './style.css'
import { dump } from './dump.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form>
      <input id="name" type="text">
      <button id="permissions" type="button">Get Permissions</button>
      <button type="submit">Submit data</button>
    </form>
    <div id="dump"></div>
  </div>
`

dump(document.querySelector<HTMLDivElement>('#dump')!)
