// get dom operation
const inputDOM = document.querySelector("#task");
const ulDOM = document.querySelector("#list");
var ul = document.querySelector("ul");

ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

const close = document.querySelectorAll("#btn");
   for(let i =0; i<close.length;i++)
   {
     close[i].addEventListener("click",function(){
      close[i].parentElement.remove();
     });
   }

const newElement = () => 
{
   if(inputDOM.value != "")
   {
     
     const li = document.createElement('li');
     li.innerHTML=`<span class="text">${inputDOM.value}</span>
     <button type="button"  id="btn" style="height: 100%; width:3rem;" class="close" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>`
     ulDOM.appendChild(li);
     document.querySelector(".success").classList.remove("hide");
     document.querySelector(".success").classList.add("show");
     setTimeout(function(){
      document.querySelector(".success").classList.remove("show");
      document.querySelector(".success").classList.add("hide");
     },2000)
   }
   else
   {
     document.querySelector(".error").classList.remove("hide");
     document.querySelector(".error").classList.add("show");
     setTimeout(function(){
      document.querySelector(".error").classList.remove("show");
      document.querySelector(".error").classList.add("hide");
     },2000)
   }
   const close = document.querySelectorAll("#btn");
   for(let i =0; i<close.length;i++)
   {
     close[i].addEventListener("click",function(){
      close[i].parentElement.remove();
     });
   }
}


