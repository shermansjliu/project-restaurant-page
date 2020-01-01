function createNavbar () {
    const nav = document.createElement('navbar');
    const navList = document.createElement('ul');
    const icon = document.createElement('div');

    icon.classList.toggle('icon');

    nav.appendChild(icon);
    navList.appendChild(createNavItem('Menu'));
    navList.appendChild(createNavItem('Contact'));


    nav.appendChild(navList);

    return nav
}

function createNavItem(content) {
    let navItem = document.createElement('li');
    navItem.classList.toggle('nav-item');
    navItem.textContent = content;

    return navItem

}

export {createNavbar}


