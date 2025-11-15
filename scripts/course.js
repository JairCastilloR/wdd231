
const courses = [
    { code: "WDD 130", title: "Web Fundamentals", credits: 2, category: "WDD", completed: true },
    { code: "WDD 131", title: "Dynamic Web Fundamentals", credits: 2, category: "WDD", completed: true },
    { code: "WDD 231", title: "Web Frontend Development I ", credits: 2, category: "WDD", completed: false },
    { code: "CSE 110", title: "Intro to Programming", credits: 2, category: "CSE", completed: true },
    { code: "CSE 111", title: "Programming with Functions", credits: 2, category: "CSE", completed: true },
    { code: "CSE 210", title: "Programming with Classes", credits: 2, category: "CSE", completed: false },
];

const container = document.getElementById('courses-container');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('#filter-buttons button');

function renderCourses(filter) {
    container.innerHTML = '';
    let filtered = courses;

    if (filter === 'wdd') {
        filtered = courses.filter(c => c.category === 'WDD');
    } else if (filter === 'cse') {
        filtered = courses.filter(c => c.category === 'CSE');
    }

    let totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsEl.textContent = totalCredits;

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `  
            <h3>${course.code}: ${course.title}</h3>
            <p>Créditos: ${course.credits}</p>
            <p>Categoría: ${course.category}</p>
            <p>${course.completed ? '✅ Completado' : '◻️ No completado'}</p>
        `;
        container.appendChild(card);
    });
}

renderCourses('all');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        renderCourses(filter);
    });
});
