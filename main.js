function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-arrow").forEach(c => c.classList.remove("selected-arrow"));
	
	document.querySelectorAll(".arrow")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-arrow");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

function toggleHumbuger(){
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')

    btn.addEventListener('click', () => {
        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
    })

    const search_button = document.getElementById('search-btn')
    const search = document.getElementById('search-bar')

    search_button.addEventListener('click', () => {
    search.classList.toggle('hidden')
    })

    const profile_btn = document.getElementById('profile-avatar')
    const dropdown = document.getElementById('profile-dropdown')

    profile_btn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden')
    })
}

toggleHumbuger();

