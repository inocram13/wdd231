const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

// Reusable function for opening modals
function openModal(title, details) {
    mltitle.innerHTML = title;
    mldetails.innerHTML = details;
    mlModal.showModal();
}

// Membership data
const memberships = [
    { id: 'btn1', title: "Non Profit Membership", cost: "Libre", benefits: [
        "Ikaw ay di magbabayad, may merienda ka pa.",
        "Makakasakay ka sa toro sa fiesta."
    ]},
    { id: 'btn2', title: "Bronze Membership", cost: "$10 annual", benefits: [
        "May discount ka pag Senior Citizen ka na",
        "Lalagyan ng tatak ni Mayor",
        "Makakasakay ka sa toro sa fiesta"
    ]},
    { id: 'btn3', title: "Silver Membership", cost: "$20 annual", benefits: [
        "Libre ang merienda mo, busog ka pa",
        "May discount ka pag Senior Citizen ka na",
        "Lalagyan ng tatak ni Mayor",
        "Makakasakay ka sa toro sa fiesta"
    ]},
    { id: 'btn4', title: "Gold Membership", cost: "$30 annual", benefits: [
        "Bida ka sa Home Page",
        "Kasama ka sa lahat ng ganap",
        "Libre ang merienda mo, busog ka pa",
        "May discount ka pag Senior Citizen ka na",
        "Lalagyan ng tatak ni Mayor",
        "Makakasakay ka sa toro sa fiesta"
    ]}
];

// Attach event listeners dynamically
memberships.forEach(membership => {
    document.querySelector(`#${membership.id}`).addEventListener('click', () => {
        openModal(membership.title, `
            <p>Benefits include:</p>
            <ul>${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>
            <p>COST: ${membership.cost}</p>
        `);
    });
});

// Set hidden date properly
document.querySelector('#today').value = new Date().toISOString().split('T')[0];

window.addEventListener("pagehide", () => {
    socket.close(); // Close WebSocket before navigating away
});