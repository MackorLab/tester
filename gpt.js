!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o="https://sun4-20.userapi.com/s/v1/ig2/3lYfWDkwWRgJcL7IxG-_dLgDj4AjYWEI6Uu3VOe2SAfnvjW3bCaMurDY3F9koJedu2lJwfQjdEayrPFhTJ7R1zzE.jpg?size=100x100&quality=95&crop=95,0,379,379&ava=1";vkBridge.send("VKWebAppInit");var l=a("sky");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}var c=a("keys");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}vkBridge.send("VKWebAppGetUserInfo").then(e=>{console.log(e.id),console.log(e.first_name),console.log(e.last_name),console.log(e),n=e.id,e.id,o=e.photo_100,console.log(o),r(),fetch("https://skyauto.me/cllbck/"+l+"?api=1&uid="+c+"&sid_man="+n).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.status;(console.log("Статус:",t),0===t)&&(document.getElementById("focusis").style.display="none")})).catch((function(e){console.log(e)})),console.log(code_hash)}).catch(e=>{});const s=document.getElementById("darkMode_H_T");function r(){T.innerHTML="",K()}var d;s.addEventListener("change",r);const u=new URL(window.location.href).searchParams.get("key"),m=$("#apiKey");function g(e){localStorage.setItem("apiKey",e),d=e,console.log(d)}u?(m.val(u),g(u)):function(){const e=localStorage.getItem("apiKey");e&&(m.val(e),d=e,console.log(d))}(),m.on("input",()=>{g(m.val())}),m.attr("type","password");var p="###";var y,v=localStorage.getItem("savedInput");v&&(document.getElementById("frazSend").value=v),document.getElementById("frazSend").addEventListener("input",(function(){var e;e=document.getElementById("frazSend").value,localStorage.setItem("savedInput",e),document.getElementById("frazSendOut").textContent=this.value,p=this.value,console.log(p)})),window.addEventListener("load",(function(){var e=localStorage.getItem("savedInput");e?(document.getElementById("frazSend").value=e,document.getElementById("frazSendOut").textContent=e,p=e):(document.getElementById("frazSend").value=p,document.getElementById("frazSendOut").textContent=p)}));const f=document.querySelector("#languageSelect"),E=()=>{localStorage.setItem("language",f.value),y=f.value,console.log(y)};(()=>{const e=localStorage.getItem("language");e&&(f.value=e,y=e,console.log(y))})(),E(),f.addEventListener("change",()=>{E()});const h=document.querySelector("#formControlTemp"),I=document.querySelector("#rangeTemp"),S=document.querySelector("#formControlTop_P"),k=document.querySelector("#rangeTop_P"),B=()=>{localStorage.setItem("rangeValue",h.value),localStorage.setItem("rangeValue2",S.value)};(()=>{const e=localStorage.getItem("rangeValue"),t=localStorage.getItem("rangeValue2");e&&(h.value=e,I.textContent=e),t&&(S.value=t,k.textContent=t)})(),h.addEventListener("input",()=>{I.textContent=h.value,B()}),S.addEventListener("input",()=>{k.textContent=S.value,B()});const b=document.querySelector("#stopWordInput"),x=document.querySelector("#stopWordValue"),C=localStorage.getItem("stopWord");if(C)b.value=C,x.textContent=C;else{const e=b.value;x.textContent=e}b.addEventListener("input",()=>{const e=b.value;x.textContent=e,localStorage.setItem("stopWord",e)});const _=document.querySelector("#fontSelect"),L=localStorage.getItem("selectedFont");L&&(_.value=L,document.body.style.fontFamily=L),_.addEventListener("change",(function(){const e=_.value;document.body.style.fontFamily=e,localStorage.setItem("selectedFont",e)}));const P=document.getElementById("modelSelect");P.addEventListener("change",(function(){const e=P.value;localStorage.setItem("selectedModel",e)})),window.addEventListener("load",(function(){const e=localStorage.getItem("selectedModel");e&&(P.value=e)}));var A=document.getElementById("loaders");const T=document.getElementById("chat"),F=document.getElementById("messageInput"),w=document.getElementById("sendButton"),O=document.getElementById("outProm"),M=document.getElementById("basePageCount");document.createElement("div");let N=[];const j=document.querySelector("#maxLemInput"),q=document.querySelector("#maxLemValue"),z=localStorage.getItem("maxLem");z?(j.value=z,q.textContent=z):q.textContent=j.value,j.addEventListener("input",()=>{q.textContent=j.value,localStorage.setItem("maxLem",j.value)});function J(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const c=document.createElement("div");c.className="message-card";const s=document.createElement("img");s.className="avatar",s.src=n?"https://i.ibb.co/QJgmw60/GPT.gif":o,s.alt=n?"Assistant Avatar":"User Avatar",c.appendChild(s);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),c.appendChild(r),a.appendChild(c),T.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,'<span class="bold">$1</span>').replace(/(?:\r\n|\r|\n)/g,"<br>");l?d.innerHTML=t:(d.innerHTML=t,d.querySelectorAll(".bold").forEach(e=>{e.style.fontWeight="bold"}))}else d.innerHTML=e;V(),F.value=""}function H(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const c=document.createElement("div");c.className="message-card";const s=document.createElement("img");s.className="avatar",s.src=n?"https://i.ibb.co/QJgmw60/GPT.gif":o,s.alt=n?"Assistant Avatar":"User Avatar",c.appendChild(s);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),c.appendChild(r),a.appendChild(c),T.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/(?:\r\n|\r|\n)/g,"\n");d.textContent=t}else d.textContent=e;V()}var W;function V(){T.scrollTop=T.scrollHeight}async function D(){const e=document.getElementById("messageInput"),t=document.getElementById("maxLemInput"),n=document.getElementById("chat"),o=JSON.parse(localStorage.getItem("basePage"))||[],l=e.value.trim();let a=[];const c=2*parseInt(t.value);if(e.value="",e.style.height="auto",""===l)return;o.push({role:"user",content:l}),0===c||0===o.length?a=[{role:"user",content:l}]:c>0&&c<=o.length?a=o.slice(-c):c>o.length&&(a=o),s.checked?H(l,"user",!1):J(l,"user",!1),A.style.display="block";const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({model:"gpt-3.5-turbo-16k-0613",messages:a,temperature:0,max_tokens:2e3})}),i=await r.json();console.log("Отправленное сообщение:",a),console.log("Ответ сервера:",i);const u=i.choices[0].message.content;o.push({role:"assistant",content:u}),localStorage.setItem("basePage",JSON.stringify(o)),s.checked?H(u,"assistant",!0):J(u,"assistant",!0);const m=i.usage.prompt_tokens,g=i.usage.completion_tokens,p=i.usage.total_tokens,y=document.getElementById("outPromB"),v=document.getElementById("outComB"),f=document.getElementById("outTotB");y.textContent=m.toString(),v.textContent=g.toString(),f.textContent=p.toString(),n.scrollTop=n.scrollHeight,A.style.display="none",R()}function R(){const e=JSON.parse(localStorage.getItem("basePage"))||[];M.textContent=e.length.toString()}function K(){const e=JSON.parse(localStorage.getItem("basePage"))||[];if(e.length>0){for(const t of e)s.checked?H(t.content,t.role,"assistant"===t.role,!0):J(t.content,t.role,"assistant"===t.role,!0);crollToBottom()}else{const t="Здравствуйте, чем могу быть полезен?";s.checked?H(t,"received",!0,!0):J(t,"received",!0,!0),e.push({role:"assistant",content:t}),localStorage.setItem("basePage",JSON.stringify(e))}}w.addEventListener("click",e=>{e.preventDefault(),D()}),F.addEventListener("keydown",e=>{"Enter"===e.key&&(e.shiftKey||(F.value+="\n",e.preventDefault()))}),F.addEventListener("input",(function(){F.style.height="auto",F.style.height=F.scrollHeight+"px"})),O.addEventListener("click",()=>{localStorage.removeItem("basePage"),N=[],R(),T.innerHTML="",K()}),R();var U=document.getElementById("messageInput"),G=(document.getElementById("stopButton"),document.getElementById("submitRec")),Q=(G=document.getElementById("submitRec"),document.getElementById("recordingIndicator")),Y=!1;G.addEventListener("click",(function(){Y?(W&&(W.stop(),W=null),G.textContent="🎤",Q.style.display="none",Q.classList.remove("blink"),Y=!1):(!function(){(W=new webkitSpeechRecognition).continuous=!0,W.interimResults=!0,W.lang=y;var e=document.getElementById("scrollHeightPanel").scrollHeight;console.log("Высота прокрутки:",e),W.onstart=function(){Q.style.display="inline-block"},W.onresult=function(e){var t=e.results[e.resultIndex];if(t.isFinal){var n=t[0].transcript;U.value+=n+" ",new RegExp(p,"i").test(n)&&(console.log("Найдена фраза: ",n),D())}else console.log("Промежуточный результат: ",t[0].transcript)},W.onerror=function(e){console.log("Ошибка распознавания: ",e.error)},W.onend=function(){G.textContent="🎤",Q.style.display="none",Q.classList.remove("blink"),Y=!1},W.start()}(),G.textContent="❌",Q.style.display="inline-block",Q.classList.add("blink"),Y=!0)})),document.getElementById("openModal_sd").addEventListener("click",(function(){document.getElementById("myModal_sd").style.display="block"}));var Z=document.getElementById("myModal_sd"),X=document.getElementsByClassName("close_sd")[0];window.onclick=function(e){e.target!=Z&&e.target!=X||(Z.style.display="none")},document.getElementById("privacyLink_sd").addEventListener("click",(function(){document.getElementById("privacyModal_sd").style.display="block"})),document.getElementById("dataProcessingLink_sd").addEventListener("click",(function(){document.getElementById("dataProcessingModal_sd").style.display="block"})),document.getElementById("openAiLink_sd").addEventListener("click",(function(){document.getElementById("openAiModal_sd").style.display="block"}));var ee=document.getElementById("privacyModal_sd"),te=document.getElementById("dataProcessingModal_sd"),ne=document.getElementById("openAiModal_sd"),oe=document.getElementById("closePrivacy_sd"),le=document.getElementById("closeDataProcessing_sd"),ae=document.getElementById("closeOpenAi_sd");window.onclick=function(e){e.target!=ee&&e.target!=oe||(ee.style.display="none"),e.target!=te&&e.target!=le||(te.style.display="none"),e.target!=ne&&e.target!=ae||(ne.style.display="none")},document.getElementById("myForm_sd").addEventListener("submit",(function(e){var t=document.getElementById("privacyCheckbox_sd").checked,n=document.getElementById("dataProcessingCheckbox_sd").checked,o=document.getElementById("openAiCheckbox_sd").checked;t&&n&&o||(e.preventDefault(),alert("Пожалуйста, ознакомьтесь со всеми политиками перед отправкой формы."))})),document.querySelectorAll(".close_sd").forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal_sd").style.display="none"}))}));var ce=document.getElementById("butSet"),se=0,re=0;ce.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("name_sd").value,n=document.getElementById("email_sd").value,o=document.getElementById("phone_sd").value,l=document.querySelector('input[name="product_sd"]:checked');l&&l.value;/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(t)?console.log("Имя соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Имени!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),se=1,console.log("Имя не соответствует требованиям")),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(n)?console.log("Email соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Email!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),re=1,console.log("Email не соответствует требованиям")),!function(e){return/^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e)}(o)?(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Телефон",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,console.log("Телефон не соответствует требованиям")):console.log("Телефон соответствует");var a=document.getElementById("privacyCheckbox_sd"),c=document.getElementById("dataProcessingCheckbox_sd"),s=document.getElementById("openAiCheckbox_sd"),r=a.checked,d=c.checked,i=s.checked;if(console.log("Состояние privacyCheckbox:",r),console.log("Состояние dataProcessingCheckbox:",d),console.log("Состояние openAiCheckbox:",i),!r||!d||!i)return Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, ознакомтесь с \n политиками сотрудничиства",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,void console.log("Политика не соответствует требованиям");1===se?console.log("Ошибка в имени"):1===re?console.log("Ошибка в email"):console.log("OK")}))}]);
