const spotlight = document.querySelector('#spotlight');
const path = './data/solesociety.json';

async function getSneakers() {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        // Display all available sneakers in the dataset
        displayItems(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

const displayItems = (items) => {
    for (let i = 0; i < 3 && i < items.length; i++) {
        const randomIndex = Math.floor(Math.random() * items.length);
        let selectedItem = items[randomIndex];
        items.splice(randomIndex, 1);
        showOnPage(selectedItem);
    }
};

function showOnPage(item) {
    const container = document.createElement('div');
    container.classList.add('sneaker-item');

    // Name
    const name = document.createElement('h2');
    name.textContent = item.name;
    container.appendChild(name);

    // Image
    const image = document.createElement('img');
    image.src = `images/${item.image}`; // Adjust if the path differs
    image.alt = item.name;
    image.loading = "lazy";
    container.appendChild(image);

    // Description
    if (item.description) {
        const description = document.createElement('p');
        description.textContent = item.description;
        container.appendChild(description);
    }

    // Website Link
    const link = document.createElement('a');
    link.href = item.website;
    link.textContent = "Visit Store";
    link.target = "_blank";
    container.appendChild(link);

    // Append to the page
    spotlight.appendChild(container);
}

getSneakers();
