!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o="";vkBridge.send("VKWebAppInit");var l=a("sky");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}var c=a("keys");function a(e){var t=String(document.location.href).split("?");if(t[1]){var n=t[1].split("&");for(i=0;i<n.length;i++){var o=n[i].split("=");if(o[0]==e&&o[1])return o[1]}}return""}vkBridge.send("VKWebAppGetUserInfo").then(e=>{console.log(e.id),console.log(e.first_name),console.log(e.last_name),console.log(e),n=e.id,e.id,o=e.photo_100,console.log(o),fetch("https://skyauto.me/cllbck/"+l+"?api=1&uid="+c+"&sid_man="+n).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.status;(console.log("Статус:",t),t>0)&&(document.getElementById("focusis").style.display="none",r())})).catch((function(e){console.log(e)})),console.log(code_hash)}).catch(e=>{});const s=document.getElementById("darkMode_H_T");function r(){j.innerHTML="",oe()}var d;s.addEventListener("change",r);const u=new URL(window.location.href).searchParams.get("key"),m=$("#apiKey");function g(e){localStorage.setItem("apiKey",e),d=e,console.log(d)}u?(m.val(u),g(u)):function(){const e=localStorage.getItem("apiKey");e&&(m.val(e),d=e,console.log(d))}(),m.on("input",()=>{g(m.val())}),m.attr("type","password");var p="https://i.ibb.co/QJgmw60/GPT.gif",y=document.getElementById("avatarUrl");localStorage.getItem("avatarUrl")&&(y.value=localStorage.getItem("avatarUrl"),p=y.value),y.addEventListener("input",(function(){localStorage.setItem("avatarUrl",y.value),p=y.value}));var v="###";var f,I=localStorage.getItem("savedInput");I&&(document.getElementById("frazSend").value=I),document.getElementById("frazSend").addEventListener("input",(function(){var e;e=document.getElementById("frazSend").value,localStorage.setItem("savedInput",e),document.getElementById("frazSendOut").textContent=this.value,v=this.value,console.log(v)})),window.addEventListener("load",(function(){var e=localStorage.getItem("savedInput");e?(document.getElementById("frazSend").value=e,document.getElementById("frazSendOut").textContent=e,v=e):(document.getElementById("frazSend").value=v,document.getElementById("frazSendOut").textContent=v)}));const E=document.querySelector("#languageSelect"),h=()=>{localStorage.setItem("language",E.value),f=E.value,console.log(f)};(()=>{const e=localStorage.getItem("language");e&&(E.value=e,f=e,console.log(f))})(),h(),E.addEventListener("change",()=>{h()});const S=document.querySelector("#formControlTemp"),k=document.querySelector("#rangeTemp"),B=document.querySelector("#formControlTop_P"),x=document.querySelector("#rangeTop_P"),b=()=>{localStorage.setItem("rangeValue",S.value),localStorage.setItem("rangeValue2",B.value)};(()=>{const e=localStorage.getItem("rangeValue"),t=localStorage.getItem("rangeValue2");e&&(S.value=e,k.textContent=e),t&&(B.value=t,x.textContent=t)})(),S.addEventListener("input",()=>{k.textContent=S.value,b()}),B.addEventListener("input",()=>{x.textContent=B.value,b()});const C=document.querySelector("#maxTokensInput"),_=document.querySelector("#maxTokensValue"),L=localStorage.getItem("maxTokens");L?(C.value=L,_.textContent=L):_.textContent=C.value,C.addEventListener("input",()=>{_.textContent=C.value,localStorage.setItem("maxTokens",C.value)});const w=document.querySelector("#stopWordInput"),T=document.querySelector("#stopWordValue"),F=localStorage.getItem("stopWord");if(F)w.value=F,T.textContent=F;else{const e=w.value;T.textContent=e}w.addEventListener("input",()=>{const e=w.value;T.textContent=e,localStorage.setItem("stopWord",e)});document.getElementById("dend_nam").addEventListener("click",e=>{e.preventDefault(),window.open("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/","_blank")||window.location.replace("https://finevpn.org/vpn-dlya-chatgpt-besplatnyj/")});const P=document.querySelector("#fontSelect"),A=localStorage.getItem("selectedFont");A&&(P.value=A,document.body.style.fontFamily=A),P.addEventListener("change",(function(){const e=P.value;document.body.style.fontFamily=e,localStorage.setItem("selectedFont",e)}));const O=document.getElementById("modelSelect");O.addEventListener("change",(function(){const e=O.value;localStorage.setItem("selectedModel",e)})),window.addEventListener("load",(function(){const e=localStorage.getItem("selectedModel");e&&(O.value=e)}));const M=document.getElementById("messageSys"),N=localStorage.getItem("instruction_sys");M.value=N||"Выполнять только инструкции - user",M.addEventListener("input",e=>{const t=e.target.value.trim();localStorage.setItem("instruction_sys",t)});var q=document.getElementById("loaders");const j=document.getElementById("chat"),H=document.getElementById("messageInput"),U=document.getElementById("sendButton"),V=document.getElementById("outProm"),z=document.getElementById("basePageCount");document.createElement("div");let R=[];const J=document.querySelector("#maxLemInput"),K=document.querySelector("#maxLemValue"),W=localStorage.getItem("maxLem");function D(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const c=document.createElement("div");c.className="message-card";const s=document.createElement("img");s.className="avatar",s.src=n?p:o,s.alt=n?"Assistant Avatar":"User Avatar",c.appendChild(s);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),c.appendChild(r),a.appendChild(c),j.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,'<span class="bold">$1</span>').replace(/(?:\r\n|\r|\n)/g,"<br>");d.innerHTML=t,d.querySelectorAll(".bold").forEach(e=>{e.style.fontWeight="bold"})}else d.innerHTML=e;Q(),H.value=""}function G(e,t,n,l=!1){const a=document.createElement("div");a.className="message "+t;const c=document.createElement("div");c.className="message-card";const s=document.createElement("img");s.className="avatar",s.src=n?p:o,s.alt=n?"Assistant Avatar":"User Avatar",c.appendChild(s);const r=document.createElement("div");r.className="message-content";const d=document.createElement("p");if(d.className="message-text",r.appendChild(d),c.appendChild(r),a.appendChild(c),j.appendChild(a),n){const t=e.replace(/\\n/g,"\n").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/(?:\r\n|\r|\n)/g,"\n");d.textContent=t}else d.textContent=e;Q()}W?(J.value=W,K.textContent=W):K.textContent=J.value,J.addEventListener("input",()=>{K.textContent=J.value,localStorage.setItem("maxLem",J.value)});function Q(){j.scrollTop=j.scrollHeight}const Z=document.getElementById("totalTok");let X=localStorage.getItem("totalTokens");X=parseInt(X)||0,Z.textContent=X.toString();document.getElementById("totTokBut").addEventListener("click",(function(){localStorage.setItem("totalTokens","0"),Z.textContent="0"}));var Y,ee="К сожалению воспроизвести можно только ответ сервера";async function te(){const e=parseFloat(S.value),t=parseFloat(B.value),n=T.textContent,o=parseInt(C.value),l=document.getElementById("messageInput"),a=document.getElementById("maxLemInput"),c=document.getElementById("chat");let r=JSON.parse(localStorage.getItem("basePage"))||[];const i=l.value.trim(),u=2*parseInt(a.value);if(l.value="",l.style.height="auto",""===i)return;r.push({role:"user",content:i});let m=[];console.log("Step1:",m),0===u||0===r.length?(m=[{role:"user",content:i}],console.log("Step2:",m)):u>0&&u<=r.length?(m=r.slice(-u),console.log("Step3:",m)):u>r.length&&(console.log("Step4:",m),m=r),console.log("Step5:",m);const g=document.getElementById("messageSys").value.trim(),p=[...m];p.splice(p.length-1,0,{role:"system",content:g}),console.log("Step6:",p),s.checked?G(i,"user",!1):D(i,"user",!1),q.style.display="block";const y=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({model:"gpt-3.5-turbo-16k",messages:p,temperature:e,top_p:t,stop:n,max_tokens:o})}),v=await y.json();console.log("Отправленное сообщение:",p),console.log("Ответ сервера:",v);const f=v.choices[0].message.content;ee=f,r.push({role:"assistant",content:f}),localStorage.setItem("basePage",JSON.stringify(r)),s.checked?G(f,"assistant",!0):D(f,"assistant",!0);const I=v.usage.prompt_tokens,E=v.usage.completion_tokens,h=v.usage.total_tokens,k=document.getElementById("outPromB"),x=document.getElementById("outComB"),b=document.getElementById("outTotB");k.textContent=I.toString(),x.textContent=E.toString(),b.textContent=h.toString();let _=localStorage.getItem("totalTokens");_=parseInt(_)||0;const L=_+h;localStorage.setItem("totalTokens",L.toString()),Z.textContent=L.toString(),c.scrollTop=c.scrollHeight,q.style.display="none",ne()}function ne(){const e=JSON.parse(localStorage.getItem("basePage"))||[];z.textContent=e.length.toString()}function oe(){const e=JSON.parse(localStorage.getItem("basePage"))||[];if(e.length>0){for(const t of e)s.checked?G(t.content,t.role,"assistant"===t.role,!0):D(t.content,t.role,"assistant"===t.role,!0);crollToBottom()}else{const t="\n \n\nЗдравствуйте, чем могу быть полезен?\n\n\n  \n\n";s.checked?G(t,"received",!0,!0):D(t,"received",!0,!0),e.push({role:"assistant",content:t}),localStorage.setItem("basePage",JSON.stringify(e))}}U.addEventListener("click",e=>{e.preventDefault(),te()}),H.addEventListener("keydown",e=>{"Enter"===e.key&&(e.shiftKey||(H.value+="\n",e.preventDefault()))}),H.addEventListener("input",(function(){H.style.height="auto",H.style.height=H.scrollHeight+"px"})),V.addEventListener("click",()=>{localStorage.removeItem("basePage"),R=[],ne(),j.innerHTML="",oe()}),ne();var le=document.getElementById("messageInput"),ae=(document.getElementById("stopButton"),document.getElementById("submitRec")),ce=(ae=document.getElementById("submitRec"),document.getElementById("recordingIndicator")),se=!1;ae.addEventListener("click",(function(){se?(Y&&(Y.stop(),Y=null),ae.textContent="🎤",ce.style.display="none",ce.classList.remove("blink"),se=!1):(!function(){(Y=new webkitSpeechRecognition).continuous=!0,Y.interimResults=!0,Y.lang=f;var e=document.getElementById("scrollHeightPanel").scrollHeight;console.log("Высота прокрутки:",e),Y.onstart=function(){ce.style.display="inline-block"},Y.onresult=function(e){var t=e.results[e.resultIndex];if(t.isFinal){var n=t[0].transcript;le.value+=n+" ",new RegExp(v,"i").test(n)&&(console.log("Найдена фраза: ",n),te())}else console.log("Промежуточный результат: ",t[0].transcript)},Y.onerror=function(e){console.log("Ошибка распознавания: ",e.error)},Y.onend=function(){ae.textContent="🎤",ce.style.display="none",ce.classList.remove("blink"),se=!1},Y.start()}(),ae.textContent="❌",ce.style.display="inline-block",ce.classList.add("blink"),se=!0)})),document.getElementById("openModal_sd").addEventListener("click",(function(){document.getElementById("myModal_sd").style.display="block"}));var re=document.getElementById("myModal_sd"),de=document.getElementsByClassName("close_sd")[0];window.onclick=function(e){e.target!=re&&e.target!=de||(re.style.display="none")},document.getElementById("privacyLink_sd").addEventListener("click",(function(){document.getElementById("privacyModal_sd").style.display="block"})),document.getElementById("dataProcessingLink_sd").addEventListener("click",(function(){document.getElementById("dataProcessingModal_sd").style.display="block"})),document.getElementById("openAiLink_sd").addEventListener("click",(function(){document.getElementById("openAiModal_sd").style.display="block"}));var ie=document.getElementById("privacyModal_sd"),ue=document.getElementById("dataProcessingModal_sd"),me=document.getElementById("openAiModal_sd"),ge=document.getElementById("closePrivacy_sd"),pe=document.getElementById("closeDataProcessing_sd"),ye=document.getElementById("closeOpenAi_sd");window.onclick=function(e){e.target!=ie&&e.target!=ge||(ie.style.display="none"),e.target!=ue&&e.target!=pe||(ue.style.display="none"),e.target!=me&&e.target!=ye||(me.style.display="none")},document.getElementById("myForm_sd").addEventListener("submit",(function(e){var t=document.getElementById("privacyCheckbox_sd").checked,n=document.getElementById("dataProcessingCheckbox_sd").checked,o=document.getElementById("openAiCheckbox_sd").checked;t&&n&&o||(e.preventDefault(),alert("Пожалуйста, ознакомьтесь со всеми политиками перед отправкой формы."))})),document.querySelectorAll(".close_sd").forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal_sd").style.display="none"}))}));var ve=document.getElementById("butSet"),fe=0,Ie=0;ve.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("name_sd").value,n=document.getElementById("email_sd").value,o=document.getElementById("phone_sd").value,l=document.querySelector('input[name="product_sd"]:checked');l&&l.value;/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(t)?console.log("Имя соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Имени!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),fe=1,console.log("Имя не соответствует требованиям")),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(n)?console.log("Email соответствует"):(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Email!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),Ie=1,console.log("Email не соответствует требованиям")),!function(e){return/^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e)}(o)?(Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, проверьте правильность заполнения \n Телефон",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,console.log("Телефон не соответствует требованиям")):console.log("Телефон соответствует");var a=document.getElementById("privacyCheckbox_sd"),c=document.getElementById("dataProcessingCheckbox_sd"),s=document.getElementById("openAiCheckbox_sd"),r=a.checked,d=c.checked,i=s.checked;if(console.log("Состояние privacyCheckbox:",r),console.log("Состояние dataProcessingCheckbox:",d),console.log("Состояние openAiCheckbox:",i),!r||!d||!i)return Toastify({text:"ОШИБКА ВВОДА ДАННЫХ \n Пожалуйста, ознакомтесь с \n политиками сотрудничиства",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #FF0000, #FFA500)",stopOnFocus:!0,className:"error-toast",textAlign:"center"}).showToast(),1,void console.log("Политика не соответствует требованиям");1===fe?console.log("Ошибка в имени"):1===Ie?console.log("Ошибка в email"):console.log("OK")})),$.get("https://ipinfo.io",(function(e){console.log(e)}),"jsonp");const Ee=document.getElementById("voice"),he=document.getElementById("pitch"),Se=document.getElementById("rate"),ke=document.getElementById("volume"),Be=document.getElementById("pitchOut"),xe=document.getElementById("rateOut"),be=document.getElementById("volumeOut"),Ce=document.getElementById("speak");function _e(){Be.textContent=he.value,xe.textContent=Se.value,be.textContent=ke.value}function Le(){Ee.innerHTML="",window.speechSynthesis.getVoices().forEach(e=>{const t=document.createElement("option");t.value=e.voiceURI,t.text=e.name,Ee.add(t)})}he.addEventListener("input",_e),Se.addEventListener("input",_e),ke.addEventListener("input",_e),Ce.addEventListener("click",(function(){window.speechSynthesis.cancel();const e=ee.split(".");let t=0;!function n(){if(t<e.length){const o=e[t].trim();if(o){const e=new SpeechSynthesisUtterance(o);e.voice=window.speechSynthesis.getVoices().find(e=>e.voiceURI===Ee.value),e.pitch=parseFloat(he.value),e.rate=parseFloat(Se.value),e.volume=parseFloat(ke.value),e.onend=()=>{t++,n()},window.speechSynthesis.speak(e)}else t++,n()}}()})),Le(),window.speechSynthesis.onvoiceschanged=Le}]);
