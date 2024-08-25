document.querySelector('.cvdownload').addEventListener('click', cvhandler)

function cvhandler() {
    alert('Cv is not updated, will add later')
}
function handlervalidation() {
    // window.location.href = "https://form-validation-demo-intraniz.netlify.app/"
    window.open("https://form-validation-demo-intraniz.netlify.app/", '_blank')
}

function handlerCalculator() {
    window.open("https://online-calculator-demo-intrainz.netlify.app/", '_blank')
}

function handlerShop() {
    window.open("https://rishikesh-babu.github.io/Bootstrap-Module-Assignment/", '_blank')
}

function validation() {
    event.preventDefault();
    setTimeout(() => {
        alert("Thanks, Will contact you")
    },500);
    document.querySelector('.resultvalidation').innerHTML = 'Your message has been send successfully'
}

