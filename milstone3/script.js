var form = document.getElementById("Resume-Form");
var cvDisplay = document.getElementById("Resume-Display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect values
    var name = document.getElementById("Name").value;
    var Address = document.getElementById("Address").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var Education = document.getElementById("Education").value;
    var Experience = document.getElementById("Experience").value;
    var Skill = document.getElementById("Skill").value;
    // Generate resume dynamically
    var resumeDisplay = "\n    <h2><b> Dynamic Resume </b> <h2>\n    <h3>Personal Information</h3>\n    <p><b> Name:</b>".concat(name, "</p>\n    <p><b> Address:</b>").concat(Address, "</p>\n    <p><b> Phone:</b>").concat(Phone, "</p>\n    <p><b> Email:</b>").concat(Email, "</p>\n    <h3>Education</h3>\n    <p><b> Education:</b>").concat(Education, "</p>\n    <h3>Experience</h3>\n    <p><b> Experience:</b>").concat(Experience, "</p>\n    <h3>Skill</h3>\n    <p><b> Skill:</b>").concat(Skill, "</p>");
    // Display resume
    if (cvDisplay) {
        cvDisplay.innerHTML = resumeDisplay;
    }
    else {
        console.error('The resume display element is missing');
    }
});
