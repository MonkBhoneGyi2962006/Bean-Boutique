function toggleMenu() {
    const navList = document.getElementById("nav-list");
    const logoTag = document.querySelector('.logo-tag');
    const searchBar = document.querySelector('.logo-tag input[type="text"]');
    
    navList.classList.toggle("show");
    logoTag.classList.toggle("hide");
    searchBar.classList.toggle("hide");
}
