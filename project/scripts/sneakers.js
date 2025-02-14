document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelector('#sneakers'); // Ensure it exists
    const path = './data/solesociety.json';

    // Function to display sneakers
    const displaySneakers = (allSneakers) => {
        cards.innerHTML = ""; // Clear any previous content

        allSneakers.forEach((sneaker) => {
            const myName = document.createElement("h2");
            myName.textContent = sneaker.name;

            const myDescription = document.createElement("p");
            myDescription.textContent = sneaker.description || "No description available.";

            const myURL = document.createElement("p");
            myURL.innerHTML = `<a href="${sneaker.website}" target="_blank">Website</a>`;

            const myLogo = document.createElement("img");
            myLogo.src = `./images/${sneaker.image || "placeholder.jpg"}`; // Fallback image
            myLogo.setAttribute("loading", "lazy");
            myLogo.setAttribute("width", "300");
            myLogo.setAttribute("height", "200");
            myLogo.setAttribute("alt", sneaker.name);

            const myPrice = document.createElement("p");
            myPrice.textContent = `Price: ${sneaker.price || "Not Available"}`;

            const mySection = document.createElement("section");
            mySection.appendChild(myLogo);
            mySection.appendChild(myName);
            mySection.appendChild(myDescription);
            mySection.appendChild(myURL);
            mySection.appendChild(myPrice);

            cards.appendChild(mySection);
        });
    };

    // Function to fetch data
    async function getSneakers() {
        try {
            const response = await fetch(path);
            const data = await response.json();
            displaySneakers(data); // JSON is an array, no need for `data.sneakers`
        } catch (error) {
            console.error('Error fetching sneakers:', error);
        }
    }

    getSneakers();

    // Grid/List view toggle
    const setGrid = document.querySelector('#btnGrid');
    const setList = document.querySelector('#btnList');

    setGrid.addEventListener('click', () => {
        setGrid.classList.add("active");
        setList.classList.remove("active");
        cards.className = 'grid';
    });

    setList.addEventListener('click', () => {
        setList.classList.add("active");
        setGrid.classList.remove("active");
        cards.className = 'list';
    });
});
