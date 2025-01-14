const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to populate course list dynamically
const populateCoursework = () => {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear the list if already populated

    courses.forEach(course => {
        const courseItem = document.createElement("li");
        courseItem.classList.add("course-item");

        courseItem.innerHTML = `
            <strong>${course.subject} ${course.number}:</strong> ${course.title}
            <p><em>${course.description}</em></p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
        `;

        courseList.appendChild(courseItem);
    });
};

// Populate courses dynamically
const populateCourses = (filter) => {
    const courseCardsContainer = document.getElementById('course-cards');
    courseCardsContainer.innerHTML = ''; // Clear existing content

    const filteredCourses = filter
        ? courses.filter(course => course.subject === filter)
        : courses;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card', course.completed ? 'completed' : 'not-completed');

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `;

        courseCardsContainer.appendChild(courseCard);
    });
};

// Filter buttons functionality
document.getElementById('filter-all').addEventListener('click', () => populateCourses());
document.getElementById('filter-cse').addEventListener('click', () => populateCourses('CSE'));
document.getElementById('filter-wdd').addEventListener('click', () => populateCourses('WDD'));

// Initial population
populateCourses();
// Populate coursework on page load
populateCoursework();

// Define breakpoints
const mobileBreakpoint = 768; // Example: devices smaller than 768px are considered mobile

// Function to check if the device is mobile or desktop
function checkDeviceType() {
    if (window.innerWidth <= mobileBreakpoint) {
        console.log("Mobile device detected");
        // Perform mobile-specific actions
        document.body.style.backgroundColor = "#f4f4f4"; // Example: change background for mobile
    } else {
        console.log("Desktop device detected");
        // Perform desktop-specific actions
        document.body.style.backgroundColor = "#ffffff"; // Example: change background for desktop
    }
}

// Run the function on page load
checkDeviceType();

// Add an event listener to handle window resizing
window.addEventListener("resize", checkDeviceType);
