function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

function descargarCV(){
    const link = document.createElement("a");
    link.href = "assets/cv-espindola.pdf";
    link.download = "curriculum-espindola.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
}

function updateExperience(startYear){
    const today = new Date();
    let years = today.getFullYear() - startYear;

    // Updated every October
    const october = new Date(today.getFullYear(), 9, 1);
    if (today < october) {
        years -= 1;
    }
    
    document.getElementById('experience').textContent = `+${years}`;
}

updateExperience(2021)