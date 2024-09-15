// const button = document.getElementById("Skill-Hide-Show") as  HTMLButtonElement
// const triggle= document.getElementById("skill") as HTMLElement

// button.addEventListener("click", function(){
//     if(triggle.style.display === "none"){
//         triggle.style.display = "block";
//     }else{
//         triggle.style.display="none"
//     }

// })


const button1=document.getElementById("Skill-Hide-Show") as HTMLButtonElement
const  skill =document.getElementById("skill")as HTMLElement

button1.addEventListener("click",()=>{
if(skill.style.display==="none"){
    skill.style.display="block"
}else{
    skill.style.display="none"
}
})