(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){return{fahrenheit:n.temp_f,celsius:n.temp_c,wind:n.wind_mph,humidity:n.humidity}}let n,o,c;function r(){console.log(n),o=new t(n),console.log(o)}e.d({},{DX:()=>c,a_:()=>r,St:()=>n}),document.getElementById("check").addEventListener("click",(async function(e){e.preventDefault(),c=document.getElementById("formlocation").value,fetch(`https://api.weatherapi.com/v1/current.json?key=6ad84aae75f24b31a40222612231108&q=${c}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){n=e.current}))})),document.getElementById("bla").addEventListener("click",r)})();