const membersContainer = document.querySelector('#members');
        const toggleGrid = document.querySelector('.btnGrid');
        const toggleList = document.querySelector('.btnList');
        let currentMembers = [];

        async function fetchMembers() {
            const response = await fetch('data/members.json');
            const members = await response.json();
            currentMembers = members; // Save members globally for layout switching
            displayMembers(members, 'grid');
        }

        function displayMembers(members, layout) {
            membersContainer.innerHTML = '';
            membersContainer.className = layout;

            members.forEach(member => {
                const section = document.createElement('section');
                section.className = 'member-card'; // Add card class for styling
                section.innerHTML = `
                    <div class="card">
                        <img src="images/${member.image}" alt="${member.name}" class="card-image" loading="lazy">
                        <div class="card-content">
                            <h2 class="card-title">${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">Website</a>
                            <p>Level: ${member.level}</p>
                        </div>
                    </div>
                `;
                membersContainer.appendChild(section);
            });
        }

        toggleGrid.addEventListener('click', () => displayMembers(currentMembers, 'grid'));
        toggleList.addEventListener('click', () => displayMembers(currentMembers, 'list'));

        fetchMembers();