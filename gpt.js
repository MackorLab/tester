!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.querySelector("#darkModeToggle").addEventListener("change",(function(e){e.target.checked?(document.body.classList.add("dark-mode"),document.nav.classList.remove("bg-skyblue")):document.body.classList.remove("dark-mode")})),document.querySelector("#submit2").onclick=function(){document.getElementById("chatbox").innerHTML=""};const n=new URL(window.location.href).searchParams.get("key");n&&($("#apiKey").val(n),$("#apiKey").hide());const o=$("#chatbox"),r=$("#userInput"),l=$("#sendButton");let c=[];l.on("click",()=>{const e=r.val();if(e){c.push({role:"user",content:e});let t='<pre><div class="message right-side">'+window.markdownit().render(e)+"</div></pre>";o.append(t),o.animate({scrollTop:2e7},"slow"),r.val(""),l.val("📤"),l.prop("disabled",!0),function(e){var t={url:"https://api.openai.com/v1/chat/completions",method:"POST",timeout:0,headers:{Authorization:"Bearer "+$("#apiKey").val(),"Content-Type":"application/json"},data:JSON.stringify({model:"gpt-3.5-turbo",messages:c,conversation_id:e})};$.ajax(t).done((function(e){const t=e.choices[0].message;c.push({role:t.role,content:t.content});const n=window.markdownit().render(t.content),r=CryptoJS.MD5(n),a='<pre><div class="message left-side" id="'+r+'">'+n+'</div><i class="far fa-clipboard ml-1 btn btn-outline-dark" id="'+r+'-copy"></i></pre>';o.append(a);var u=document.getElementById(r+"-copy"),d=document.getElementById(r);u.addEventListener("click",(function(){var e=document.createElement("textarea");e.value=d.textContent,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);var t=document.getElementById("copy-popup");t.style.display="block",setTimeout((function(){t.style.display="none"}),1e3)})),o.animate({scrollTop:2e7},"slow"),l.val("Отправить"),l.prop("disabled",!1);t.content.split(" ").length;const i=document.querySelector("#fontSelect").value;document.querySelectorAll(".message").forEach((function(e){e.style.fontFamily=i}))})).fail((function(e,t,n){l.val("Error");let r='<pre><div class="message left-side  text-danger" >'+("Error: "+e.responseJSON.error.message)+"</div></pre>";o.append(r),o.animate({scrollTop:2e7},"slow")}))}();const n=document.querySelector("#fontSelect").value;document.querySelectorAll(".message").forEach((function(e){e.style.fontFamily=n}))}}),setInterval((function(){}),1e3),r.on("keydown",e=>{if(13!==e.keyCode||e.ctrlKey||e.shiftKey){if(13===e.keyCode&&(e.ctrlKey||e.shiftKey)){e.preventDefault();const t=r.prop("selectionStart"),n=r.val();r.val(n.slice(0,t)+"\n"+n.slice(t)),r.prop("selectionStart",t+1),r.prop("selectionEnd",t+1)}}else e.preventDefault(),l.click()});const a=document.querySelector("#formControlTemp"),u=document.querySelector("#rangeTemp"),d=a.value;u.textContent=d,a.addEventListener("input",()=>{u.textContent=a.value});const i=document.querySelector("#formControlTop_P"),s=document.querySelector("#rangeTop_P"),p=i.value;s.textContent=p,i.addEventListener("input",()=>{s.textContent=i.value});const m=document.querySelector("#formControlFr"),y=document.querySelector("#rangeFr"),f=m.value;y.textContent=f,m.addEventListener("input",()=>{y.textContent=m.value});const v=document.querySelector("#formControlSl"),g=document.querySelector("#rangeSl"),S=v.value;g.textContent=S,v.addEventListener("input",()=>{g.textContent=v.value});const b=document.querySelector("#maxTokensInput"),h=document.querySelector("#maxTokensValue");b.addEventListener("input",()=>{h.textContent=b.value}),document.querySelector("#submit").onclick=function(){const e=a.value,t=i.value,n=m.value,o=v.value,r=b.value;console.log(r),alert("Значение ползунка - Temp: "+e+" Значение ползунка - Top_P: "+t+" Значение ползунка - Fr: "+n+" Значение ползунка Sl: "+o+" Значение ползунка MAX: "+r)};const x=document.querySelector("#fontSelect");x.addEventListener("change",(function(){const e=x.value;document.body.style.fontFamily=e}))}]);
