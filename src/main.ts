import './style.css'
import { dump } from './dump.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form>
      <input id="name" type="text">
      <div style="display: flex">
        <fieldset>
          <label for="Ios">Ios</label>
          <input id="Ios" type="radio" name="declaredPlatform" value="IOs">
          <label for="Android">Android</label>
          <input id="Android" type="radio" name="declaredPlatform" value="Android">
        </fieldset>
        <fieldset>
          <label for="emulator">Emulator</label>
          <input id="emulator" type="checkbox" name="emulator">
        </fieldset>
      </div>
      <div>
        <button id="permissions" type="button">Get Permissions</button>
        <button type="submit">Submit data</button>
      </div>
    </form>
    <div id="dump"></div>
  </div>
`

dump(document.querySelector<HTMLDivElement>('#dump')!)
