import { places } from '../data/places.mjs';

console.log("Loaded places:", places);

document.addEventListener("DOMContentLoaded", () => {
    const showHere = document.querySelector("#allplaces");

    function displayItems(placesToShow) {
        const fragment = document.createDocumentFragment(); // Batch updates

        placesToShow.forEach(x => {
            const thecard = document.createElement('div');

            // ✅ Lazy Loaded Image (Improves LCP)
            const thephoto = document.createElement('img');
            thephoto.src = `images/${x.photo_link}`;
            thephoto.alt = x.name;
            thephoto.loading = "lazy"; 
            thecard.appendChild(thephoto);

            // ✅ Title
            const thetitle = document.createElement('h2');
            thetitle.innerText = x.name;
            thecard.appendChild(thetitle);

            // ✅ Address
            const theaddress = document.createElement('address');
            theaddress.innerText = x.address;
            thecard.appendChild(theaddress);

            // ✅ Description
            const thedesc = document.createElement('p');
            thedesc.innerText = x.description;
            thecard.appendChild(thedesc);

            // ✅ Cost
            const thecost = document.createElement('div');
            thecost.classList.add("cost");
            thecost.innerText = `COST: ${x.cost}`;
            thecard.appendChild(thecost);

            // ✅ Button (No Inline Event Listeners)
            const thelearn = document.createElement('button');
            thelearn.innerText = "Learn More";
            thecard.appendChild(thelearn);

            fragment.appendChild(thecard);
        });

        showHere.appendChild(fragment); // Append everything in one go
    }

    // ✅ Load only a few places initially (Lazy Load)
    displayItems(places.slice(0, 8));

    // ✅ Event Delegation for "Learn More" Buttons
    showHere.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const card = event.target.closest("div");
            const placeName = card.querySelector("h2").innerText;
            const selectedPlace = places.find(p => p.name === placeName);
            showStuff(selectedPlace);
        }
    });

    // ✅ Fix undefined variables
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
