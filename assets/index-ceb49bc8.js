(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const M={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},v={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},l={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},h={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},p={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class s{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(e.push(0),e[0]===10)switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(e.push(0),!(e[0]===1&&e[1]<5)){if(e[0]===1&&e[1]<6)return"Cupcake";if(e[0]===1&&e[1]>=6)return"Donut";if(e[0]===2&&e[1]<2)return"Eclair";if(e[0]===2&&e[1]===2)return"Froyo";if(e[0]===2&&e[1]>2)return"Gingerbread";if(e[0]===3)return"Honeycomb";if(e[0]===4&&e[1]<1)return"Ice Cream Sandwich";if(e[0]===4&&e[1]<4)return"Jelly Bean";if(e[0]===4&&e[1]>=4)return"KitKat";if(e[0]===5)return"Lollipop";if(e[0]===6)return"Marshmallow";if(e[0]===7)return"Nougat";if(e[0]===8)return"Oreo";if(e[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const n=s.getVersionPrecision(t),a=s.getVersionPrecision(e);let o=Math.max(n,a),m=0;const u=s.map([t,e],c=>{const g=o-s.getVersionPrecision(c),b=c+new Array(g+1).join(".0");return s.map(b.split("."),f=>new Array(20-f.length).join("0")+f).reverse()});for(i&&(m=o-Math.min(n,a)),o-=1;o>=m;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===m)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}}static map(t,e){const i=[];let n;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(n=0;n<t.length;n+=1)i.push(e(t[n]));return i}static find(t,e){let i,n;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,n=t.length;i<n;i+=1){const a=t[i];if(e(a,i))return a}}static assign(t,...e){const i=t;let n,a;if(Object.assign)return Object.assign(t,...e);for(n=0,a=e.length;n<a;n+=1){const o=e[n];typeof o=="object"&&o!==null&&Object.keys(o).forEach(u=>{i[u]=o[u]})}return t}static getBrowserAlias(t){return M[t]}static getBrowserTypeByAlias(t){return v[t]||""}}const d=/version\/(\d+(\.?_?\d+)+)/i,y=[{test:[/googlebot/i],describe(r){const t={name:"Googlebot"},e=s.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/opera/i],describe(r){const t={name:"Opera"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/opr\/|opios/i],describe(r){const t={name:"Opera"},e=s.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/SamsungBrowser/i],describe(r){const t={name:"Samsung Internet for Android"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/Whale/i],describe(r){const t={name:"NAVER Whale Browser"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/MZBrowser/i],describe(r){const t={name:"MZ Browser"},e=s.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/focus/i],describe(r){const t={name:"Focus"},e=s.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/swing/i],describe(r){const t={name:"Swing"},e=s.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/coast/i],describe(r){const t={name:"Opera Coast"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(r){const t={name:"Opera Touch"},e=s.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/yabrowser/i],describe(r){const t={name:"Yandex Browser"},e=s.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/ucbrowser/i],describe(r){const t={name:"UC Browser"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/Maxthon|mxios/i],describe(r){const t={name:"Maxthon"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/epiphany/i],describe(r){const t={name:"Epiphany"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/puffin/i],describe(r){const t={name:"Puffin"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/sleipnir/i],describe(r){const t={name:"Sleipnir"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/k-meleon/i],describe(r){const t={name:"K-Meleon"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/micromessenger/i],describe(r){const t={name:"WeChat"},e=s.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/qqbrowser/i],describe(r){const t={name:/qqbrowserlite/i.test(r)?"QQ Browser Lite":"QQ Browser"},e=s.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/msie|trident/i],describe(r){const t={name:"Internet Explorer"},e=s.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/\sedg\//i],describe(r){const t={name:"Microsoft Edge"},e=s.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/edg([ea]|ios)/i],describe(r){const t={name:"Microsoft Edge"},e=s.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/vivaldi/i],describe(r){const t={name:"Vivaldi"},e=s.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/seamonkey/i],describe(r){const t={name:"SeaMonkey"},e=s.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/sailfish/i],describe(r){const t={name:"Sailfish"},e=s.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,r);return e&&(t.version=e),t}},{test:[/silk/i],describe(r){const t={name:"Amazon Silk"},e=s.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/phantom/i],describe(r){const t={name:"PhantomJS"},e=s.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/slimerjs/i],describe(r){const t={name:"SlimerJS"},e=s.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const t={name:"BlackBerry"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/(web|hpw)[o0]s/i],describe(r){const t={name:"WebOS Browser"},e=s.getFirstMatch(d,r)||s.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/bada/i],describe(r){const t={name:"Bada"},e=s.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/tizen/i],describe(r){const t={name:"Tizen"},e=s.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/qupzilla/i],describe(r){const t={name:"QupZilla"},e=s.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/firefox|iceweasel|fxios/i],describe(r){const t={name:"Firefox"},e=s.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/electron/i],describe(r){const t={name:"Electron"},e=s.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/MiuiBrowser/i],describe(r){const t={name:"Miui"},e=s.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/chromium/i],describe(r){const t={name:"Chromium"},e=s.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/chrome|crios|crmo/i],describe(r){const t={name:"Chrome"},e=s.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/GSA/i],describe(r){const t={name:"Google Search"},e=s.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test(r){const t=!r.test(/like android/i),e=r.test(/android/i);return t&&e},describe(r){const t={name:"Android Browser"},e=s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/playstation 4/i],describe(r){const t={name:"PlayStation 4"},e=s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/safari|applewebkit/i],describe(r){const t={name:"Safari"},e=s.getFirstMatch(d,r);return e&&(t.version=e),t}},{test:[/.*/i],describe(r){const t=/^(.*)\/(.*) /,e=/^(.*)\/(.*)[ \t]\((.*)/,n=r.search("\\(")!==-1?e:t;return{name:s.getFirstMatch(n,r),version:s.getSecondMatch(n,r)}}}],S=[{test:[/Roku\/DVP/],describe(r){const t=s.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,r);return{name:h.Roku,version:t}}},{test:[/windows phone/i],describe(r){const t=s.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,r);return{name:h.WindowsPhone,version:t}}},{test:[/windows /i],describe(r){const t=s.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,r),e=s.getWindowsVersionName(t);return{name:h.Windows,version:t,versionName:e}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(r){const t={name:h.iOS},e=s.getSecondMatch(/(Version\/)(\d[\d.]+)/,r);return e&&(t.version=e),t}},{test:[/macintosh/i],describe(r){const t=s.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,r).replace(/[_\s]/g,"."),e=s.getMacOSVersionName(t),i={name:h.MacOS,version:t};return e&&(i.versionName=e),i}},{test:[/(ipod|iphone|ipad)/i],describe(r){const t=s.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,r).replace(/[_\s]/g,".");return{name:h.iOS,version:t}}},{test(r){const t=!r.test(/like android/i),e=r.test(/android/i);return t&&e},describe(r){const t=s.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,r),e=s.getAndroidVersionName(t),i={name:h.Android,version:t};return e&&(i.versionName=e),i}},{test:[/(web|hpw)[o0]s/i],describe(r){const t=s.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,r),e={name:h.WebOS};return t&&t.length&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const t=s.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,r)||s.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,r)||s.getFirstMatch(/\bbb(\d+)/i,r);return{name:h.BlackBerry,version:t}}},{test:[/bada/i],describe(r){const t=s.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,r);return{name:h.Bada,version:t}}},{test:[/tizen/i],describe(r){const t=s.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,r);return{name:h.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:h.Linux}}},{test:[/CrOS/],describe(){return{name:h.ChromeOS}}},{test:[/PlayStation 4/],describe(r){const t=s.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,r);return{name:h.PlayStation4,version:t}}}],B=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(r){const t=s.getFirstMatch(/(can-l01)/i,r)&&"Nova",e={type:l.mobile,vendor:"Huawei"};return t&&(e.model=t),e}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:l.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:l.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:l.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:l.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:l.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:l.tablet}}},{test(r){const t=r.test(/ipod|iphone/i),e=r.test(/like (ipod|iphone)/i);return t&&!e},describe(r){const t=s.getFirstMatch(/(ipod|iphone)/i,r);return{type:l.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:l.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:l.mobile}}},{test(r){return r.getBrowserName(!0)==="blackberry"},describe(){return{type:l.mobile,vendor:"BlackBerry"}}},{test(r){return r.getBrowserName(!0)==="bada"},describe(){return{type:l.mobile}}},{test(r){return r.getBrowserName()==="windows phone"},describe(){return{type:l.mobile,vendor:"Microsoft"}}},{test(r){const t=Number(String(r.getOSVersion()).split(".")[0]);return r.getOSName(!0)==="android"&&t>=3},describe(){return{type:l.tablet}}},{test(r){return r.getOSName(!0)==="android"},describe(){return{type:l.mobile}}},{test(r){return r.getOSName(!0)==="macos"},describe(){return{type:l.desktop,vendor:"Apple"}}},{test(r){return r.getOSName(!0)==="windows"},describe(){return{type:l.desktop}}},{test(r){return r.getOSName(!0)==="linux"},describe(){return{type:l.desktop}}},{test(r){return r.getOSName(!0)==="playstation 4"},describe(){return{type:l.tv}}},{test(r){return r.getOSName(!0)==="roku"},describe(){return{type:l.tv}}}],F=[{test(r){return r.getBrowserName(!0)==="microsoft edge"},describe(r){if(/\sedg\//i.test(r))return{name:p.Blink};const e=s.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,r);return{name:p.EdgeHTML,version:e}}},{test:[/trident/i],describe(r){const t={name:p.Trident},e=s.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test(r){return r.test(/presto/i)},describe(r){const t={name:p.Presto},e=s.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test(r){const t=r.test(/gecko/i),e=r.test(/like gecko/i);return t&&!e},describe(r){const t={name:p.Gecko},e=s.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:p.Blink}}},{test:[/(apple)?webkit/i],describe(r){const t={name:p.WebKit},e=s.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,r);return e&&(t.version=e),t}}];class w{constructor(t,e=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},e!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=s.find(y,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=s.find(S,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=s.find(B,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=s.find(F,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return s.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const n={};let a=0;if(Object.keys(t).forEach(m=>{const u=t[m];typeof u=="string"?(n[m]=u,a+=1):typeof u=="object"&&(e[m]=u,i+=1)}),i>0){const m=Object.keys(e),u=s.find(m,g=>this.isOS(g));if(u){const g=this.satisfies(e[u]);if(g!==void 0)return g}const c=s.find(m,g=>this.isPlatform(g));if(c){const g=this.satisfies(e[c]);if(g!==void 0)return g}}if(a>0){const m=Object.keys(n),u=s.find(m,c=>this.isBrowser(c,!0));if(u!==void 0)return this.compareVersion(n[u])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let n=t.toLowerCase();const a=s.getBrowserTypeByAlias(n);return e&&a&&(n=a.toLowerCase()),n===i}compareVersion(t){let e=[0],i=t,n=!1;const a=this.getBrowserVersion();if(typeof a=="string")return t[0]===">"||t[0]==="<"?(i=t.substr(1),t[1]==="="?(n=!0,i=t.substr(2)):e=[],t[0]===">"?e.push(1):e.push(-1)):t[0]==="="?i=t.substr(1):t[0]==="~"&&(n=!0,i=t.substr(1)),e.indexOf(s.compareVersions(a,i,n))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(e=>this.is(e))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class O{static getParser(t,e=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new w(t,e)}static parse(t){return new w(t).getResult()}static get BROWSER_MAP(){return v}static get ENGINE_MAP(){return p}static get OS_MAP(){return h}static get PLATFORMS_MAP(){return l}}function P(r){var u;const t=O.getParser(window.navigator.userAgent),e={browser:t.getBrowserName()+" "+t.getBrowserVersion(),os:t.getOSName()+" "+t.getOSVersion(),platform:t.getPlatformType(),numberOfCams:0,cameras:[],maxTouchPoints:"",vendorWebGL:"",rendererWebGL:"",vendorWebGLUnmasked:"",rendererWebGLUnmasked:"",openGLVersion:"",gyroscopeData:"",devicePixelRatio:window.devicePixelRatio||1,battery:{level:0,charging:!1,chargingTime:0,dischargingTime:0}},i=()=>{r.innerHTML=`
      <div>
        <p><b>Browser:</b> ${e.browser}</p>
        <p><b>OS:</b> ${e.os}</p>
        <p><b>Platform:</b> ${e.platform}</p>
        <p><b>Number of cameras:</b> ${e.numberOfCams}</p>
        <p><b>Camera names:</b> ${e.cameras}</p>
        <p><b>Max touch points:</b> ${e.maxTouchPoints}</p>
        <p><b>Vendor webGL:</b> ${e.vendorWebGL}</p>
        <p><b>Renderer webGL:</b> ${e.rendererWebGL}</p>
        <p><b>UNMASKED_VENDOR_WEBGL:</b> ${e.vendorWebGLUnmasked}</p>
        <p><b>UNMASKED_RENDERER_WEBGL:</b> ${e.rendererWebGLUnmasked}</p>
        <p><b>Shading Language Version:</b> ${e.openGLVersion}</p>
        <p><b>Gyroscope data:</b> ${e.gyroscopeData}</p>
        <p><b>Device Pixel ratio:</b> ${e.devicePixelRatio}</p>
        <p><b>Battery status:</b>
          <ul>
            <li>Battery level: ${e.battery.level==="unsupported"?e.battery.level:e.battery.level*100+"%"}</li>
            <li>Battery charging: ${e.battery.charging==="unsupported"?e.battery.charging:e.battery.charging?"Yes":"No"} </li>
            <li>Battery charging time: ${e.battery.chargingTime==="unsupported"?e.battery.chargingTime:e.battery.chargingTime+"seconds"}</li>
            <li>Battery discharging time: ${e.battery.dischargingTime==="unsupported"?e.battery.dischargingTime:e.battery.dischargingTime+"seconds"}</li>
          </ul>
        </p>
      </div>
    `};(u=navigator==null?void 0:navigator.mediaDevices)!=null&&u.enumerateDevices&&navigator.mediaDevices.enumerateDevices().then(c=>{const g=c.filter(b=>b.kind==="videoinput");e.numberOfCams=g.length,g.forEach(b=>e.cameras.push(b.label)),i()}).catch(c=>{console.error("Error accessing media devices.",c)});const n="maxTouchPoints"in navigator?navigator.maxTouchPoints:"Not Supported";e.maxTouchPoints=n.toString()||"Not Supported";const a=document.createElement("canvas");a.style.display="none";const o=a.getContext("webgl")||a.getContext("experimental-webgl"),m=o==null?void 0:o.getExtension("WEBGL_debug_renderer_info");if(!o||!m){console.error("Unable to initialize WebGL. Browser may not support it."),e.vendorWebGL="unsupported",e.rendererWebGL="unsupported",e.vendorWebGLUnmasked="unsupported",e.rendererWebGLUnmasked="unsupported",e.openGLVersion="unsupported";return}if(e.vendorWebGL=o.getParameter(o.VENDOR),e.rendererWebGL=o.getParameter(o.RENDERER),e.vendorWebGLUnmasked=o.getParameter(m.UNMASKED_VENDOR_WEBGL),e.rendererWebGLUnmasked=o.getParameter(m.UNMASKED_RENDERER_WEBGL),e.openGLVersion=o.getParameter(o.SHADING_LANGUAGE_VERSION),"DeviceOrientationEvent"in window&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(c=>{c==="granted"?e.gyroscopeData="permission granted":e.gyroscopeData="permission denied",i()}).catch(console.error):e.gyroscopeData="unsupported","AmbientLightSensor"in window)try{const c=new AmbientLightSensor;c.addEventListener("reading",()=>{console.log("Current light level:",c.illuminance)}),c.start()}catch(c){console.error("The Ambient Light Sensor is not supported:",c)}else console.log("The Ambient Light Sensor is not supported by this browser.");"getBattery"in navigator?navigator.getBattery().then(c=>{const g=()=>{e.battery.level=c.level,e.battery.charging=c.charging,e.battery.chargingTime=c.chargingTime,e.battery.dischargingTime=c.dischargingTime};g(),c.addEventListener("chargingchange",g),c.addEventListener("levelchange",g),c.addEventListener("chargingtimechange",g),c.addEventListener("dischargingtimechange",g),i()}):(e.battery.level="unsupported",e.battery.charging="unsupported",e.battery.chargingTime="unsupported",e.battery.dischargingTime="unsupported"),i()}document.querySelector("#app").innerHTML=`
  <div>
    <div class="card">
      <button id="dump" type="button"></button>
    </div>
  </div>
`;P(document.querySelector("#dump"));