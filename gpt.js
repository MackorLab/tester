!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var o,n,l,a;vkBridge.send("VKWebAppInit");var r=s("sky");function s(e){var t=String(document.location.href).split("?");if(t[1]){var o=t[1].split("&");for(i=0;i<o.length;i++){var n=o[i].split("=");if(n[0]==e&&n[1])return n[1]}}return""}var c=s("keys");function s(e){var t=String(document.location.href).split("?");if(t[1]){var o=t[1].split("&");for(i=0;i<o.length;i++){var n=o[i].split("=");if(n[0]==e&&n[1])return n[1]}}return""}vkBridge.send("VKWebAppGetUserInfo").then(e=>{console.log(e.id),console.log(e.first_name),console.log(e.last_name),console.log(e),n=e.id,e.id,a=e.photo_100,l=location.hash,console.log(location.hash),$.get("https://skyauto.me/cllbck/"+r+"?api=1",{sid:c,sid_man:n,vk_photo1:a,vk_page_val:get_page_val,vk_resurse_val:get_resurs_val,vk_hash:l},(function(e){})),console.log(code_hash)}).catch(e=>{});fetch("https://skyauto.me/cllbck/217669590/1836811/eFNSdFZQWXNhQm5mZ2tweGNYUzRlQT0?api=1&uid=535939344").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.status;(console.log("Статус:",t),0===t)&&(document.getElementById("focusis").style.display="block")})).catch((function(e){console.log(e)}));document.querySelector("#darkModeToggle").addEventListener("change",(function(e){e.target.checked?(document.body.classList.add("dark-mode"),document.nav.classList.remove("bg-skyblue")):document.body.classList.remove("dark-mode")})),document.querySelector("#submit2").onclick=function(){document.getElementById("chatbox").innerHTML="",document.getElementById("userInput").value=""};const d=new URL(window.location.href).searchParams.get("key"),u=$("#apiKey");function m(e){localStorage.setItem("apiKey",e)}d?(u.val(d),m(d)):function(){const e=localStorage.getItem("apiKey");e&&u.val(e)}(),u.on("input",()=>{m(u.val())}),u.attr("type","password");const g=$("#chatbox"),p=$("#userInput"),y=$("#sendButton");let v=[];var f;y.on("click",()=>{const e=p.val();if(e){v.push({role:"user",content:e});let t='<pre><div class="message right-side">'+window.markdownit().render(e)+"</div></pre>";g.append(t),g.animate({scrollTop:2e7},"slow"),p.val(""),y.val("📤"),y.prop("disabled",!0),function(e){const t=$("#apiKey").val(),n=parseFloat(E.value),l=parseFloat(S.value),a=x.textContent,r=parseInt(C.value);var s={url:"https://api.openai.com/v1/chat/completions",method:"POST",timeout:0,headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},data:JSON.stringify({model:"gpt-3.5-turbo",messages:v,conversation_id:e,temperature:n,top_p:l,stop:a,max_tokens:r})};$.ajax(s).done((function(e){const t=e.choices[0].message;v.push({role:t.role,content:t.content});const n=window.markdownit().render(t.content),l=CryptoJS.MD5(n),a='<pre><div class="message left-side" id="'+l+'">'+n+'</div><i class="far fa-clipboard ml-1 btn btn-outline-dark" id="'+l+'-copy"></i></pre>';g.append(a);var r=document.getElementById(l+"-copy"),s=document.getElementById(l);r.addEventListener("click",(function(){var e=document.createElement("textarea");e.value=s.textContent,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);var t=document.getElementById("copy-popup");t.style.display="block",setTimeout((function(){t.style.display="none"}),1e3)})),g.animate({scrollTop:2e7},"slow"),y.val("Отправить"),y.prop("disabled",!1);const c=t.content;o=c.split(" ").length;var d=localStorage.getItem("baziSlov");console.log(d);var i=d-o;console.log(o),localStorage.setItem("baziSlov",i),console.log(i),Toastify({text:`Слоов в ответе: ${o} \n Осталось слов:${i}`,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"center",width:"400px",height:"200px",backgroundColor:"linear-gradient(to right, #00b09b, #96c93d)"}).showToast();const u=document.querySelector("#fontSelect").value;document.querySelectorAll(".message").forEach((function(e){e.style.fontFamily=u}));const m="stop"===e.choices[0].finish_reason;if("system"===e.choices[0].message.role){const t=e.choices[0].message.content.code,o=e.choices[0].message.content.message;400===t?(console.log("Error 400: Bad Request"),console.log("Error Message:",o)):401===t?(console.log("Error 401: Unauthorized"),console.log("Error Message:",o)):403===t?(console.log("Error 403: Forbidden"),console.log("Error Message:",o)):404===t?(console.log("Error 404: Not Found"),console.log("Error Message:",o)):429===t?(console.log("Error 429: Too Many Requests"),console.log("Error Message:",o)):500===t?(console.log("Error 500: Internal Server Error"),console.log("Error Message:",o)):(console.log("Unknown Error Code:",t),console.log("Error Message:",o))}m&&console.log("Stop command used")})).fail((function(e,t,o){y.val("Error");let n='<pre><div class="message left-side  text-danger" >'+("Error: "+e.responseJSON.error.message)+"</div></pre>";g.append(n),g.animate({scrollTop:2e7},"slow")}))}();const n=document.querySelector("#fontSelect").value;document.querySelectorAll(".message").forEach((function(e){e.style.fontFamily=n}))}}),setInterval((function(){}),1e3),p.on("keydown",e=>{if(13!==e.keyCode||e.ctrlKey||e.shiftKey){if(13===e.keyCode&&(e.ctrlKey||e.shiftKey)){e.preventDefault();const t=p.prop("selectionStart"),o=p.val();p.val(o.slice(0,t)+"\n"+o.slice(t)),p.prop("selectionStart",t+1),p.prop("selectionEnd",t+1)}}else e.preventDefault(),y.click()});const h=document.querySelector("#languageSelect");(()=>{const e=localStorage.getItem("language");e&&(h.value=e)})(),h.addEventListener("change",()=>{localStorage.setItem("language",h.value),f=h.value,console.log(f)});const E=document.querySelector("#formControlTemp"),b=document.querySelector("#rangeTemp"),S=document.querySelector("#formControlTop_P"),I=document.querySelector("#rangeTop_P"),k=()=>{localStorage.setItem("rangeValue",E.value),localStorage.setItem("rangeValue2",S.value)};(()=>{const e=localStorage.getItem("rangeValue"),t=localStorage.getItem("rangeValue2");e&&(E.value=e,b.textContent=e),t&&(S.value=t,I.textContent=t)})(),E.addEventListener("input",()=>{b.textContent=E.value,k()}),S.addEventListener("input",()=>{I.textContent=S.value,k()});const _=document.querySelector("#stopWordInput"),x=document.querySelector("#stopWordValue"),B=localStorage.getItem("stopWord");if(B)_.value=B,x.textContent=B;else{const e=_.value;x.textContent=e}_.addEventListener("input",()=>{const e=_.value;x.textContent=e,localStorage.setItem("stopWord",e)});const C=document.querySelector("#maxTokensInput"),w=document.querySelector("#maxTokensValue"),L=localStorage.getItem("maxTokens");L?(C.value=L,w.textContent=L):w.textContent=C.value,C.addEventListener("input",()=>{w.textContent=C.value,localStorage.setItem("maxTokens",C.value)}),document.getElementById("openModal_sd").addEventListener("click",(function(){document.getElementById("myModal_sd").style.display="block"}));var M=document.getElementById("myModal_sd"),T=document.getElementsByClassName("close_sd")[0];window.onclick=function(e){e.target!=M&&e.target!=T||(M.style.display="none")},document.getElementById("privacyLink_sd").addEventListener("click",(function(){document.getElementById("privacyModal_sd").style.display="block"})),document.getElementById("dataProcessingLink_sd").addEventListener("click",(function(){document.getElementById("dataProcessingModal_sd").style.display="block"})),document.getElementById("openAiLink_sd").addEventListener("click",(function(){document.getElementById("openAiModal_sd").style.display="block"}));var q=document.getElementById("privacyModal_sd"),A=document.getElementById("dataProcessingModal_sd"),P=document.getElementById("openAiModal_sd"),F=document.getElementById("closePrivacy_sd"),O=document.getElementById("closeDataProcessing_sd"),K=document.getElementById("closeOpenAi_sd");window.onclick=function(e){e.target!=q&&e.target!=F||(q.style.display="none"),e.target!=A&&e.target!=O||(A.style.display="none"),e.target!=P&&e.target!=K||(P.style.display="none")},document.getElementById("myForm_sd").addEventListener("submit",(function(e){var t=document.getElementById("privacyCheckbox_sd").checked,o=document.getElementById("dataProcessingCheckbox_sd").checked,n=document.getElementById("openAiCheckbox_sd").checked;t&&o&&n||(e.preventDefault(),alert("Пожалуйста, ознакомьтесь со всеми политиками перед отправкой формы."))})),document.querySelectorAll(".close_sd").forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal_sd").style.display="none"}))})),document.getElementById("butSet").addEventListener("click",(function(){var e=document.getElementById("name_sd").value,t=document.getElementById("email_sd").value,o=document.getElementById("phone_sd").value;alert("Имя: "+e+"\nEmail: "+t+"\nТелефон: "+o)}));const j=document.querySelector("#fontSelect"),V=localStorage.getItem("selectedFont");V&&(j.value=V,document.body.style.fontFamily=V),j.addEventListener("change",(function(){const e=j.value;document.body.style.fontFamily=e,localStorage.setItem("selectedFont",e)}));const D=document.getElementById("myButton0");D.addEventListener("click",(function(){const e=document.getElementById("myButton0");"on"===e.getAttribute("data-state")?(e.setAttribute("data-state","off"),e.textContent="Включить сохранение сессии беседы",e.classList.remove("button-on"),e.classList.add("button-off"),localStorage.setItem("buttonState","off"),location.href=location.href):(e.setAttribute("data-state","on"),e.textContent="Отключить сохранение сессии беседы",e.classList.remove("button-off"),e.classList.add("button-on"),localStorage.setItem("buttonState","on"),location.href=location.href)})),document.addEventListener("DOMContentLoaded",()=>{"on"===localStorage.getItem("buttonState")?(D.setAttribute("data-state","on"),D.textContent="Включить сохранение сессии беседы",D.classList.add("button-on"),function(){const e=function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var o="";for(let n=0;n<e;n++){const e=Math.floor(Math.random()*t.length);o+=t.charAt(e)}return o}(30);localStorage.setItem("staturt_out",e),e,Toastify({text:"Новая сессия беседы создана успешно!",duration:3e3,close:!0,gravity:"top",pposition:"center",backgroundColor:"linear-gradient(to right, #001f3f, #0074D9)",stopOnFocus:!0}).showToast()}()):(D.setAttribute("data-state","off"),D.textContent="Отключить сохранение сессии беседы",D.classList.add("button-off"),Toastify({text:"Сессия беседы продолжается!",duration:3e3,close:!0,gravity:"top",position:"center",backgroundColor:"linear-gradient(to right, #026902, #00a8a8)",stopOnFocus:!0}).showToast())});var W;document.getElementById("submit4").addEventListener("click",(function(){localStorage.setItem("tokkis",1e6),function(){let e,t=0;Swal.fire({title:"Увеличиваем до 1 Миллиона",html:"Слова: <b>0</b>",timer:3e3,timerProgressBar:!1,didOpen:()=>{Swal.showLoading();const o=Swal.getHtmlContainer().querySelector("b");e=setInterval(()=>{t+=1e4,o.textContent=t,t>=1e6&&(clearInterval(e),Swal.close())},30)},willClose:()=>{clearInterval(e)},footer:"VK-ChatGPT-3.5-turbo"}).then(e=>{e.dismiss===Swal.DismissReason.timer&&console.log("Таймер завершил работу")}),localStorage.setItem("baziSlov",1e6)}()}));var N=document.getElementById("userInput");var R=document.getElementById("submit3");R.addEventListener("click",(function(){W?(W&&(W.stop(),W=null),R.textContent="🎤"):((W=new webkitSpeechRecognition).continuous=!0,W.interimResults=!0,W.lang=f,W.onstart=function(){recordingIndicator.style.display="inline-block"},W.onresult=function(e){var t=e.results[e.resultIndex];if(t.isFinal){var o=t[0].transcript;N.value+=o+" "}else console.log("Промежуточный результат: ",t[0].transcript)},W.onerror=function(e){console.log("Ошибка распознавания: ",e.error)},W.onend=function(){recordingIndicator.style.display="none"},W.start(),R.textContent="❌")}))}]);
