!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o="";vkBridge.send("VKWebAppInit");var l=a("sky");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}var s=a("keys");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}vkBridge.send("VKWebAppGetUserInfo").then(e=>{console.log(e.id),console.log(e.first_name),console.log(e.last_name),console.log(e),n=e.id,e.id,o=e.photo_100,console.log(o),fetch("https://skyauto.me/cllbck/"+l+"?api=1&uid="+s+"&sid_man="+n).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.status;(console.log("Статус:",t),t>0)&&(document.getElementById("focusis").style.display="none",r())})).catch((function(e){console.log(e)})),console.log(code_hash)}).catch(e=>{});const c=document.getElementById("darkMode_H_T");function r(){M.innerHTML="",Y()}var d;c.addEventListener("change",r);const u=new URL(window.location.href).searchParams.get("key"),m=$("#apiKey");function g(e){localStorage.setItem("apiKey",e),d=e,console.log(d)}u?(m.val(u),g(u)):function(){const e=localStorage.getItem("apiKey");e&&(m.val(e),d=e,console.log(d))}(),m.on("input",()=>{g(m.val())}),m.attr("type","password");var p="###";var y,v=localStorage.getItem("savedInput");v&&(document.getElementById("frazSend").value=v),document.getElementById("frazSend").addEventListener("input",(function(){var e;e=document.getElementById("frazSend").value,localStorage.setItem("savedInput",e),document.getElementById("frazSendOut").textContent=this.value,p=this.value,console.log(p)})),window.addEventListener("load",(function(){var e=localStorage.getItem("savedInput");e?(document.getElementById("frazSend").value=e,document.getElementById("frazSendOut").textContent=e,p=e):(document.getElementById("frazSend").value=p,document.getElementById("frazSendOut").textContent=p)}));const f=document.querySelector("#languageSelect"),I=()=>{localStorage.setItem("language",f.value),y=f.value,console.log(y)};(()=>{const e=localStorage.getItem("language");e&&(f.value=e,y=e,console.log(y))})(),I(),f.addEventListener("change",()=>{I()});const E=document.querySelector("#formControlTemp"),h=document.querySelector("#rangeTemp"),S=document.querySelector("#formControlTop_P"),k=document.querySelector("#rangeTop_P"),B=()=>{localStorage.setItem("rangeValue",E.value),localStorage.setItem("rangeValue2",S.value)};(()=>{const e=localStorage.getItem("rangeValue"),t=localStorage.getItem("rangeValue2");e&&(E.value=e,h.textContent=e),t&&(S.value=t,k.textContent=t)})(),E.addEventListener("input",()=>{h.textContent=E.value,B()}),S.addEventListener("input",()=>{k.textContent=S.value,B()});const b=document.querySelector("#maxTokensInput"),x=document.querySelector("#maxTokensValue"),C=localStorage.getItem("maxTokens");C?(b.value=C,x.textContent=C):x.textContent=b.value,b.addEventListener("input",()=>{x.textContent=b.value,localStorage.setItem("maxTokens",b.value)});const _=document.querySelector("#stopWordInput"),L=document.querySelector("#stopWordValue"),T=localStorage.getItem("stopWord");if(T)_.value=T,L.textContent=T;else{const e=_.value;L.textContent=e}_.addEventListener("input",()=>{const e=_.value;L.textContent=e,localStorage.setItem("stopWord",e)});document.getElementById("dend_nam").addEventListener("click",e=>{e.preventDefault(),window.open("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/","_blank")||window.location.replace("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/")});const w=document.querySelector("#fontSelect"),P=localStorage.getItem("selectedFont");P&&(w.value=P,document.body.style.fontFamily=P),w.addEventListener("change",(function(){const e=w.value;document.body.style.fontFamily=e,localStorage.setItem("selectedFont",e)}));const F=document.getElementById("modelSelect");F.addEventListener("change",(function(){const e=F.value;localStorage.setItem("selectedModel",e)})),window.addEventListener("load",(function(){const e=localStorage.getItem("selectedModel");e&&(F.value=e)}));const A=document.getElementById("messageSys"),O=localStorage.getItem("instruction_sys");A.value=O||"Выполнять только инструкции - user",A.addEventListener("input",e=>{const t=e.target.value.trim();localStorage.setItem("instruction_sys",t)});var N=document.getElementById("loaders");const M=document.getElementById("chat"),q=document.getElementById("messageInput"),j=document.getElementById("sendButton"),z=document.getElementById("outProm"),H=document.getElementById("basePageCount");document.createElement("div");let V=[];const J=document.querySelector("#maxLemInput"),K=document.querySelector("#maxLemValue"),W=localStorage.getItem("maxLem");W?(J.value=W,K.textContent=W):K.textContent=J.value,J.addEventListener("input",()=>{K.textContent=J.value,localStorage.setItem("maxLem",J.value)});function D(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const s=document.createElement("div");s.className="message-card";const c=document.createElement("img");c.className="avatar",c.src=n?"https://i.ibb.co/QJgmw60/GPT.gif":o,c.alt=n?"Assistant Avatar":"User Avatar",s.appendChild(c);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),s.appendChild(r),a.appendChild(s),M.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,'<span class="bold">$1</span>').replace(/(?:\r\n|\r|\n)/g,"<br>");d.innerHTML=t,d.querySelectorAll(".bold").forEach(e=>{e.style.fontWeight="bold"})}else d.innerHTML=e;U(),q.value=""}function R(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const s=document.createElement("div");s.className="message-card";const c=document.createElement("img");c.className="avatar",c.src=n?"https://i.ibb.co/QJgmw60/GPT.gif":o,c.alt=n?"Assistant Avatar":"User Avatar",s.appendChild(c);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),s.appendChild(r),a.appendChild(s),M.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/(?:\r\n|\r|\n)/g,"\n");d.textContent=t}else d.textContent=e;U()}function U(){M.scrollTop=M.scrollHeight}const G=document.getElementById("totalTok");let Q=localStorage.getItem("totalTokens");Q=parseInt(Q)||0,G.textContent=Q.toString();async function Z(){const e=parseFloat(E.value),t=parseFloat(S.value),n=L.textContent,o=parseInt(b.value),l=document.getElementById("messageInput"),a=document.getElementById("maxLemInput"),s=document.getElementById("chat"),r=JSON.parse(localStorage.getItem("basePage"))||[],i=l.value.trim();let u=[];const m=2*parseInt(a.value);if(l.value="",l.style.height="auto",""===i)return;r.push({role:"user",content:i}),0===m||0===r.length?u=[{role:"user",content:i}]:m>0&&m<=r.length?u=r.slice(-m):m>r.length&&(u=r);const g=document.getElementById("messageSys").value.trim();u.splice(u.length-1,0,{role:"system",content:g}),c.checked?R(i,"user",!1):D(i,"user",!1),N.style.display="block";const p=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({model:"gpt-3.5-turbo-16k",messages:u,temperature:e,top_p:t,stop:n,max_tokens:o})}),y=await p.json();console.log("Отправленное сообщение:",u),console.log("Ответ сервера:",y);const v=y.choices[0].message.content;r.push({role:"assistant",content:v}),localStorage.setItem("basePage",JSON.stringify(r)),c.checked?R(v,"assistant",!0):D(v,"assistant",!0);const f=y.usage.prompt_tokens,I=y.usage.completion_tokens,h=y.usage.total_tokens,k=document.getElementById("outPromB"),B=document.getElementById("outComB"),x=document.getElementById("outTotB");k.textContent=f.toString(),B.textContent=I.toString(),x.textContent=h.toString();let C=localStorage.getItem("totalTokens");C=parseInt(C)||0;const _=C+h;localStorage.setItem("totalTokens",_.toString()),G.textContent=_.toString(),s.scrollTop=s.scrollHeight,N.style.display="none",X()}function X(){const e=JSON.parse(localStorage.getItem("basePage"))||[];H.textContent=e.length.toString()}function Y(){const e=JSON.parse(localStorage.getItem("basePage"))||[];if(e.length>0){for(const t of e)c.checked?R(t.content,t.role,"assistant"===t.role,!0):D(t.content,t.role,"assistant"===t.role,!0);crollToBottom()}else{const t="\n \n\nЗдравствуйте, чем могу быть полезен?\n\n\n  \n\n";c.checked?R(t,"received",!0,!0):D(t,"received",!0,!0),e.push({role:"assistant",content:t}),localStorage.setItem("basePage",JSON.stringify(e))}}var ee;document.getElementById("totTokBut").addEventListener("click",(function(){localStorage.setItem("totalTokens","0"),G.textContent="0"})),j.addEventListener("click",e=>{e.preventDefault(),Z()}),q.addEventListener("keydown",e=>{"Enter"===e.key&&(e.shiftKey||(q.value+="\n",e.preventDefault()))}),q.addEventListener("input",(function(){q.style.height="auto",q.style.height=q.scrollHeight+"px"})),z.addEventListener("click",()=>{localStorage.removeItem("basePage"),V=[],X(),M.innerHTML="",Y()}),X();var te=document.getElementById("messageInput"),ne=(document.getElementById("stopButton"),document.getElementById("submitRec")),oe=(ne=document.getElementById("submitRec"),document.getElementById("recordingIndicator")),le=!1;ne.addEventListener("click",(function(){le?(ee&&(ee.stop(),ee=null),ne.textContent="🎤",oe.style.display="none",oe.classList.remove("blink"),le=!1):(!function(){(ee=new webkitSpeechRecognition).continuous=!0,ee.interimResults=!0,ee.lang=y;var e=document.getElementById("scrollHeightPanel").scrollHeight;console.log("Высота прокрутки:",e),ee.onstart=function(){oe.style.display="inline-block"},ee.onresult=function(e){var t=e.results[e.resultIndex];if(t.isFinal){var n=t[0].transcript;te.value+=n+" ",new RegExp(p,"i").test(n)&&(console.log("Найдена фраза: ",n),Z())}else console.log("Промежуточный результат: ",t[0].transcript)},ee.onerror=function(e){console.log("Ошибка распознавания: ",e.error)},ee.onend=function(){ne.textContent="🎤",oe.style.display="none",oe.classList.remove("blink"),le=!1},ee.start()}(),ne.textContent="❌",oe.style.display="inline-block",oe.classList.add("blink"),le=!0)})),document.getElementById("openModal_sd").addEventListener("click",(function(){document.getElementById("myModal_sd").style.display="block"}));var ae=document.getElementById("myModal_sd"),se=document.getElementsByClassName("close_sd")[0];window.onclick=function(e){e.target!=ae&&e.target!=se||(ae.style.display="none")},document.getElementById("privacyLink_sd").addEventListener("click",(function(){document.getElementById("privacyModal_sd").style.display="block"})),document.getElementById("dataProcessingLink_sd").addEventListener("click",(function(){document.getElementById("dataProcessingModal_sd").style.display="block"})),document.getElementById("openAiLink_sd").addEventListener("click",(function(){document.getElementById("openAiModal_sd").style.display="block"}));var ce=document.getElementById("privacyModal_sd"),re=document.getElementById("dataProcessingModal_sd"),de=document.getElementById("openAiModal_sd"),ie=document.getElementById("closePrivacy_sd"),ue=document.getElementById("closeDataProcessing_sd"),me=document.getElementById("closeOpenAi_sd");window.onclick=function(e){e.target!=ce&&e.target!=ie||(ce.style.display="none"),e.target!=re&&e.target!=ue||(re.style.display="none"),e.target!=de&&e.target!=me||(de.style.display="none")},document.getElementById("myForm_sd").addEventListener("submit",(function(e){var t=document.getElementById("privacyCheckbox_sd").checked,n=document.getElementById("dataProcessingCheckbox_sd").checked,o=document.getElementById("openAiCheckbox_sd").checked;t&&n&&o||(e.preventDefault(),alert("Пожалуйста, ознакомьтесь со всеми политиками перед отправкой формы."))})),document.querySelectorAll(".close_sd").forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal_sd").style.display="none"}))}));var ge=document.getElementById("butSet"),pe=0,ye=0;ge.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("name_sd").value,n=document.getElementById("email_sd").value,o=document.getElementById("phone_sd").value,l=document.querySelector('input[name="product_sd"]:checked');l&&l.value;/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(t)?console.log("Имя соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Имени!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),pe=1,console.log("Имя не соответствует требованиям")),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(n)?console.log("Email соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Email!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),ye=1,console.log("Email не соответствует требованиям")),!function(e){return/^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e)}(o)?(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Телефон",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,console.log("Телефон не соответствует требованиям")):console.log("Телефон соответствует");var a=document.getElementById("privacyCheckbox_sd"),s=document.getElementById("dataProcessingCheckbox_sd"),c=document.getElementById("openAiCheckbox_sd"),r=a.checked,d=s.checked,i=c.checked;if(console.log("Состояние privacyCheckbox:",r),console.log("Состояние dataProcessingCheckbox:",d),console.log("Состояние openAiCheckbox:",i),!r||!d||!i)return Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, ознакомтесь с \n политиками сотрудничиства",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,void console.log("Политика не соответствует требованиям");1===pe?console.log("Ошибка в имени"):1===ye?console.log("Ошибка в email"):console.log("OK")})),$.get("https://ipinfo.io",(function(e){console.log(e)}),"jsonp")}]);
