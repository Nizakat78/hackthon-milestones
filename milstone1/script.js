// const button = document.getElementById("Skill-Hide-Show") as  HTMLButtonElement
// const triggle= document.getElementById("skill") as HTMLElement
// button.addEventListener("click", function(){
//     if(triggle.style.display === "none"){
//         triggle.style.display = "block";
//     }else{
//         triggle.style.display="none"
//     }
// })
var button1 = document.getElementById("Skill-Hide-Show");
var skill = document.getElementById("skill");
button1.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
