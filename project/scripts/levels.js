const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

// Modal 1 - not for profit
const ml1Btn = document.querySelector('#ml1Btn');
ml1Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Non Profit Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>You'll get some update on our recent videos and reviews</li>
    <li>You got limited access on the page</li>
    </ul>
    <p>COST: Free</p>
    `
    mlModal.showModal();
});

// Modal 2 - not for profit
const ml2Btn = document.querySelector('#ml2Btn');
ml2Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Bronze Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Voucher on your first purchase</li>
    <li>You'll get some update on our recent videos and reviews</li>
    <li>You got an access on the page</li>
    </ul>
    <p>COST: $10 annual</p>
    `
    mlModal.showModal();
});

// Modal 3 - not for profit
const ml3Btn = document.querySelector('#ml3Btn');
ml3Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Silver Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Free 3 days of NBA League Pass</li>
    <li>Voucher on your first purchase</li>
    <li>You'll get some update on our recent videos and reviews</li>
    <li>You got an access on the page</li>
    </ul>
    <p>COST: $20 annual</p>
    `
    mlModal.showModal();
});

// Modal 4 - not for profit
const ml4Btn = document.querySelector('#ml4Btn');
ml4Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Gold Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Get 3 free tickets on our raffle</li>
    <li>Invitaion to special promos</li>
    <li>Free 3 days of NBA League Pass</li>
    <li>Voucher on your first purchase</li>
    <li>You'll get some update on our recent videos and reviews</li>
    <li>You got an access on the page</li>
    </ul>
    <p>COST: $30 annual</p>
    `
    mlModal.showModal();
});

//ADD A HIDDEN DATE
document.querySelector('#today').value = new Date();

