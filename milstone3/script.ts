const form = document.getElementById("Resume-Form") as HTMLFormElement;
const cvDisplay = document.getElementById("Resume-Display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collect values
    const name = (document.getElementById("Name") as HTMLInputElement).value;
    const Address = (document.getElementById("Address") as HTMLInputElement).value;
    const Phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const Email = (document.getElementById("Email") as HTMLInputElement).value;
    const Education = (document.getElementById("Education") as HTMLTextAreaElement).value;
    const Experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;
    const Skill = (document.getElementById("Skill") as HTMLTextAreaElement).value;

    // Generate resume dynamically
    const resumeDisplay = `
    <h2><b> Dynamic Resume </b> <h2>
    <h3>Personal Information</h3>
    <p><b> Name:</b>${name}</p>
    <p><b> Address:</b>${Address}</p>
    <p><b> Phone:</b>${Phone}</p>
    <p><b> Email:</b>${Email}</p>
    <h3>Education</h3>
    <p><b> Education:</b>${Education}</p>
    <h3>Experience</h3>
    <p><b> Experience:</b>${Experience}</p>
    <h3>Skill</h3>
    <p><b> Skill:</b>${Skill}</p>`;

    // Display resume
    if (cvDisplay) {
        cvDisplay.innerHTML = resumeDisplay;
    } else {
        console.error('The resume display element is missing');
    }
});