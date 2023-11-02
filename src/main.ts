import './style.css'
import { dump } from './dump.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form>
      <input type="text">
      <button id="permissions" type="button">GetPermissions</button>
    </form>
    <div id="dump"></div>
  </div>
`

dump(document.querySelector<HTMLDivElement>('#dump')!)
