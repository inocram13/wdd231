const visitFeedback = document.querySelector('#timeBetween');
let visitTime = localStorage.getItem("firstvisit")

if(visitTime == null) {
    visitFeedback.textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem("firstvisit", Date.now());
} else {
    let difference = (Date.now()-visitTime)/86400000
    if(difference<1) {
        visitFeedback.innerHTML = `Back so soon! Awesome!`
    } else{
        visitFeedback.innerHTML = `You last visited ${Math.floor(difference)} days ago`
    }
}