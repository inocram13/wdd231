async function createSpotlight() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const spotlightContainer = document.getElementById('spot');
        const filteredMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');
        const selectedMembers = filteredMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        selectedMembers.forEach(member => {
            const card = `
                <div class="spotlight-card">
                    <h3>${member.name}</h3>
                    <img src="images/${member.image}" alt="${member.name}" width="100" height="100">
                    <p>${member.phone}</p>
                    <p>${member.address}</p>
                    <a href="${member.website}" target="_blank">Link</a>
                    <p>Membership Level: ${member.level}</p>
                </div>
            `;
            spotlightContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching spotlight data:", error);
    }
}

// Initialize spotlight cards
createSpotlight();
