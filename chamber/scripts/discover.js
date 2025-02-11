import { places } from '../data/places.mjs';

console.log("Loaded places:", places);

document.addEventListener("DOMContentLoaded", () => {
    const showHere = document.querySelector("#allplaces");

    function displayItems(placesToShow) {
        const fragment = document.createDocumentFragment(); 

        placesToShow.forEach(x => {
            const thecard = document.createElement('div');

            
            const thephoto = document.createElement('img');
            thephoto.src = `images/${x.photo_link}`;
            thephoto.alt = x.name;
            thephoto.loading = "lazy"; 
            thecard.appendChild(thephoto);

            
            const thetitle = document.createElement('h2');
            thetitle.innerText = x.name;
            thecard.appendChild(thetitle);

            
            const theaddress = document.createElement('address');
            theaddress.innerText = x.address;
            thecard.appendChild(theaddress);

            
            const thedesc = document.createElement('p');
            thedesc.innerText = x.description;
            thecard.appendChild(thedesc);

            
            const thecost = document.createElement('div');
            thecost.classList.add("cost");
            thecost.innerText = `COST: ${x.cost}`;
            thecard.appendChild(thecost);

            
            const thelearn = document.createElement('button');
            thelearn.innerText = "Learn More";
            thecard.appendChild(thelearn);

            fragment.appendChild(thecard);
        });

        showHere.appendChild(fragment);
    }

    
    displayItems(places.slice(0, 8));

  
    showHere.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const card = event.target.closest("div");
            const placeName = card.querySelector("h2").innerText;
            const selectedPlace = places.find(p => p.name === placeName);
            showStuff(selectedPlace);
        }
    });

  
    const mytitle = document.querySelector("#mytitle");
    const myinfo = document.querySelector("#myinfo");
    const mydialog = document.querySelector("#mydialog");

    function showStuff(x) {
        if (!x) return;
        mytitle.innerText = x.name;
        myinfo.innerText = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
        mydialog.showModal();
    }
});
