!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o="";vkBridge.send("VKWebAppInit");var l=a("sky");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}var s=a("keys");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}vkBridge.send("VKWebAppGetUserInfo").then(e=>{console.log(e.id),console.log(e.first_name),console.log(e.last_name),console.log(e),n=e.id,e.id,o=e.photo_100,console.log(o),fetch("https://skyauto.me/cllbck/"+l+"?api=1&uid="+s+"&sid_man="+n).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.status;(console.log("Статус:",t),t>0)&&(document.getElementById("focusis").style.display="none",r())})).catch((function(e){console.log(e)})),console.log(code_hash)}).catch(e=>{});const c=document.getElementById("darkMode_H_T");function r(){j.innerHTML="",te()}var d;c.addEventListener("change",r);const u=new URL(window.location.href).searchParams.get("key"),m=$("#apiKey");function g(e){localStorage.setItem("apiKey",e),d=e,console.log(d)}u?(m.val(u),g(u)):function(){const e=localStorage.getItem("apiKey");e&&(m.val(e),d=e,console.log(d))}(),m.on("input",()=>{g(m.val())}),m.attr("type","password");var p="",y=document.getElementById("avatarUrl");localStorage.getItem("avatarUrl")&&(y.value=localStorage.getItem("avatarUrl"),p=y.value),y.addEventListener("input",(function(){localStorage.setItem("avatarUrl",y.value),p=y.value}));var v="###";var f,I=localStorage.getItem("savedInput");I&&(document.getElementById("frazSend").value=I),document.getElementById("frazSend").addEventListener("input",(function(){var e;e=document.getElementById("frazSend").value,localStorage.setItem("savedInput",e),document.getElementById("frazSendOut").textContent=this.value,v=this.value,console.log(v)})),window.addEventListener("load",(function(){var e=localStorage.getItem("savedInput");e?(document.getElementById("frazSend").value=e,document.getElementById("frazSendOut").textContent=e,v=e):(document.getElementById("frazSend").value=v,document.getElementById("frazSendOut").textContent=v)}));const E=document.querySelector("#languageSelect"),h=()=>{localStorage.setItem("language",E.value),f=E.value,console.log(f)};(()=>{const e=localStorage.getItem("language");e&&(E.value=e,f=e,console.log(f))})(),h(),E.addEventListener("change",()=>{h()});const S=document.querySelector("#formControlTemp"),k=document.querySelector("#rangeTemp"),B=document.querySelector("#formControlTop_P"),x=document.querySelector("#rangeTop_P"),b=()=>{localStorage.setItem("rangeValue",S.value),localStorage.setItem("rangeValue2",B.value)};(()=>{const e=localStorage.getItem("rangeValue"),t=localStorage.getItem("rangeValue2");e&&(S.value=e,k.textContent=e),t&&(B.value=t,x.textContent=t)})(),S.addEventListener("input",()=>{k.textContent=S.value,b()}),B.addEventListener("input",()=>{x.textContent=B.value,b()});const C=document.querySelector("#maxTokensInput"),_=document.querySelector("#maxTokensValue"),L=localStorage.getItem("maxTokens");L?(C.value=L,_.textContent=L):_.textContent=C.value,C.addEventListener("input",()=>{_.textContent=C.value,localStorage.setItem("maxTokens",C.value)});const T=document.querySelector("#stopWordInput"),F=document.querySelector("#stopWordValue"),w=localStorage.getItem("stopWord");if(w)T.value=w,F.textContent=w;else{const e=T.value;F.textContent=e}T.addEventListener("input",()=>{const e=T.value;F.textContent=e,localStorage.setItem("stopWord",e)});document.getElementById("dend_nam").addEventListener("click",e=>{e.preventDefault(),window.open("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/","_blank")||window.location.replace("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/")});const A=document.querySelector("#fontSelect"),P=localStorage.getItem("selectedFont");P&&(A.value=P,document.body.style.fontFamily=P),A.addEventListener("change",(function(){const e=A.value;document.body.style.fontFamily=e,localStorage.setItem("selectedFont",e)}));const O=document.getElementById("modelSelect");O.addEventListener("change",(function(){const e=O.value;localStorage.setItem("selectedModel",e)})),window.addEventListener("load",(function(){const e=localStorage.getItem("selectedModel");e&&(O.value=e)}));const N=document.getElementById("messageSys"),M=localStorage.getItem("instruction_sys");N.value=M||"Выполнять только инструкции - user",N.addEventListener("input",e=>{const t=e.target.value.trim();localStorage.setItem("instruction_sys",t)});var q=document.getElementById("loaders");const j=document.getElementById("chat"),z=document.getElementById("messageInput"),H=document.getElementById("sendButton"),V=document.getElementById("outProm"),U=document.getElementById("basePageCount");document.createElement("div");let K=[];const W=document.querySelector("#maxLemInput"),D=document.querySelector("#maxLemValue"),J=localStorage.getItem("maxLem");function R(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const s=document.createElement("div");s.className="message-card";const c=document.createElement("img");c.className="avatar",c.src=n?p:o,c.alt=n?"Assistant Avatar":"User Avatar",s.appendChild(c);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),s.appendChild(r),a.appendChild(s),j.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,'<span class="bold">$1</span>').replace(/(?:\r\n|\r|\n)/g,"<br>");d.innerHTML=t,d.querySelectorAll(".bold").forEach(e=>{e.style.fontWeight="bold"})}else d.innerHTML=e;Z(),z.value=""}function G(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const s=document.createElement("div");s.className="message-card";const c=document.createElement("img");c.className="avatar",c.src=n?p:o,c.alt=n?"Assistant Avatar":"User Avatar",s.appendChild(c);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),s.appendChild(r),a.appendChild(s),j.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/(?:\r\n|\r|\n)/g,"\n");d.textContent=t}else d.textContent=e;Z()}J?(W.value=J,D.textContent=J):D.textContent=W.value,W.addEventListener("input",()=>{D.textContent=W.value,localStorage.setItem("maxLem",W.value)});function Z(){j.scrollTop=j.scrollHeight}const Q=document.getElementById("totalTok");let X=localStorage.getItem("totalTokens");X=parseInt(X)||0,Q.textContent=X.toString();async function Y(){const e=parseFloat(S.value),t=parseFloat(B.value),n=F.textContent,o=parseInt(C.value),l=document.getElementById("messageInput"),a=document.getElementById("maxLemInput"),s=document.getElementById("chat");let r=JSON.parse(localStorage.getItem("basePage"))||[];const i=l.value.trim(),u=2*parseInt(a.value);if(l.value="",l.style.height="auto",""===i)return;r.push({role:"user",content:i});let m=[];console.log("Step1:",m),0===u||0===r.length?(m=[{role:"user",content:i}],console.log("Step2:",m)):u>0&&u<=r.length?(m=r.slice(-u),console.log("Step3:",m)):u>r.length&&(console.log("Step4:",m),m=r),console.log("Step5:",m);const g=document.getElementById("messageSys").value.trim(),p=[...m];p.splice(p.length-1,0,{role:"system",content:g}),console.log("Step6:",p),c.checked?G(i,"user",!1):R(i,"user",!1),q.style.display="block";const y=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({model:"gpt-3.5-turbo-16k",messages:p,temperature:e,top_p:t,stop:n,max_tokens:o})}),v=await y.json();console.log("Отправленное сообщение:",p),console.log("Ответ сервера:",v);const f=v.choices[0].message.content;r.push({role:"assistant",content:f}),localStorage.setItem("basePage",JSON.stringify(r)),c.checked?G(f,"assistant",!0):R(f,"assistant",!0);const I=v.usage.prompt_tokens,E=v.usage.completion_tokens,h=v.usage.total_tokens,k=document.getElementById("outPromB"),x=document.getElementById("outComB"),b=document.getElementById("outTotB");k.textContent=I.toString(),x.textContent=E.toString(),b.textContent=h.toString();let _=localStorage.getItem("totalTokens");_=parseInt(_)||0;const L=_+h;localStorage.setItem("totalTokens",L.toString()),Q.textContent=L.toString(),s.scrollTop=s.scrollHeight,q.style.display="none",ee()}function ee(){const e=JSON.parse(localStorage.getItem("basePage"))||[];U.textContent=e.length.toString()}function te(){const e=JSON.parse(localStorage.getItem("basePage"))||[];if(e.length>0){for(const t of e)c.checked?G(t.content,t.role,"assistant"===t.role,!0):R(t.content,t.role,"assistant"===t.role,!0);crollToBottom()}else{const t="\n \n\nЗдравствуйте, чем могу быть полезен?\n\n\n  \n\n";c.checked?G(t,"received",!0,!0):R(t,"received",!0,!0),e.push({role:"assistant",content:t}),localStorage.setItem("basePage",JSON.stringify(e))}}var ne;document.getElementById("totTokBut").addEventListener("click",(function(){localStorage.setItem("totalTokens","0"),Q.textContent="0"})),H.addEventListener("click",e=>{e.preventDefault(),Y()}),z.addEventListener("keydown",e=>{"Enter"===e.key&&(e.shiftKey||(z.value+="\n",e.preventDefault()))}),z.addEventListener("input",(function(){z.style.height="auto",z.style.height=z.scrollHeight+"px"})),V.addEventListener("click",()=>{localStorage.removeItem("basePage"),K=[],ee(),j.innerHTML="",te()}),ee();var oe=document.getElementById("messageInput"),le=(document.getElementById("stopButton"),document.getElementById("submitRec")),ae=(le=document.getElementById("submitRec"),document.getElementById("recordingIndicator")),se=!1;le.addEventListener("click",(function(){se?(ne&&(ne.stop(),ne=null),le.textContent="🎤",ae.style.display="none",ae.classList.remove("blink"),se=!1):(!function(){(ne=new webkitSpeechRecognition).continuous=!0,ne.interimResults=!0,ne.lang=f;var e=document.getElementById("scrollHeightPanel").scrollHeight;console.log("Высота прокрутки:",e),ne.onstart=function(){ae.style.display="inline-block"},ne.onresult=function(e){var t=e.results[e.resultIndex];if(t.isFinal){var n=t[0].transcript;oe.value+=n+" ",new RegExp(v,"i").test(n)&&(console.log("Найдена фраза: ",n),Y())}else console.log("Промежуточный результат: ",t[0].transcript)},ne.onerror=function(e){console.log("Ошибка распознавания: ",e.error)},ne.onend=function(){le.textContent="🎤",ae.style.display="none",ae.classList.remove("blink"),se=!1},ne.start()}(),le.textContent="❌",ae.style.display="inline-block",ae.classList.add("blink"),se=!0)})),document.getElementById("openModal_sd").addEventListener("click",(function(){document.getElementById("myModal_sd").style.display="block"}));var ce=document.getElementById("myModal_sd"),re=document.getElementsByClassName("close_sd")[0];window.onclick=function(e){e.target!=ce&&e.target!=re||(ce.style.display="none")},document.getElementById("privacyLink_sd").addEventListener("click",(function(){document.getElementById("privacyModal_sd").style.display="block"})),document.getElementById("dataProcessingLink_sd").addEventListener("click",(function(){document.getElementById("dataProcessingModal_sd").style.display="block"})),document.getElementById("openAiLink_sd").addEventListener("click",(function(){document.getElementById("openAiModal_sd").style.display="block"}));var de=document.getElementById("privacyModal_sd"),ie=document.getElementById("dataProcessingModal_sd"),ue=document.getElementById("openAiModal_sd"),me=document.getElementById("closePrivacy_sd"),ge=document.getElementById("closeDataProcessing_sd"),pe=document.getElementById("closeOpenAi_sd");window.onclick=function(e){e.target!=de&&e.target!=me||(de.style.display="none"),e.target!=ie&&e.target!=ge||(ie.style.display="none"),e.target!=ue&&e.target!=pe||(ue.style.display="none")},document.getElementById("myForm_sd").addEventListener("submit",(function(e){var t=document.getElementById("privacyCheckbox_sd").checked,n=document.getElementById("dataProcessingCheckbox_sd").checked,o=document.getElementById("openAiCheckbox_sd").checked;t&&n&&o||(e.preventDefault(),alert("Пожалуйста, ознакомьтесь со всеми политиками перед отправкой формы."))})),document.querySelectorAll(".close_sd").forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal_sd").style.display="none"}))}));var ye=document.getElementById("butSet"),ve=0,fe=0;ye.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("name_sd").value,n=document.getElementById("email_sd").value,o=document.getElementById("phone_sd").value,l=document.querySelector('input[name="product_sd"]:checked');l&&l.value;/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(t)?console.log("Имя соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Имени!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),ve=1,console.log("Имя не соответствует требованиям")),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(n)?console.log("Email соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Email!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),fe=1,console.log("Email не соответствует требованиям")),!function(e){return/^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e)}(o)?(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Телефон",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,console.log("Телефон не соответствует требованиям")):console.log("Телефон соответствует");var a=document.getElementById("privacyCheckbox_sd"),s=document.getElementById("dataProcessingCheckbox_sd"),c=document.getElementById("openAiCheckbox_sd"),r=a.checked,d=s.checked,i=c.checked;if(console.log("Состояние privacyCheckbox:",r),console.log("Состояние dataProcessingCheckbox:",d),console.log("Состояние openAiCheckbox:",i),!r||!d||!i)return Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, ознакомтесь с \n политиками сотрудничиства",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,void console.log("Политика не соответствует требованиям");1===ve?console.log("Ошибка в имени"):1===fe?console.log("Ошибка в email"):console.log("OK")})),$.get("https://ipinfo.io",(function(e){console.log(e)}),"jsonp")}]);
