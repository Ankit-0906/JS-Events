let modebtn=document.querySelector('#mode');
let body=document.querySelector("body");
let mode="light";
modebtn.addEventListener("click", ()=>{
    if(mode=="light"){
        mode="dark"
        document.querySelector("body").style.backgroundColor="black";
        //body.classList.add("dark")
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="aliceblue";
        //body.classList.add("light");

    }
    console.log(mode);
   
})