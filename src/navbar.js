

function createNavbar () {
    const nav = document.querySelector('#navbar');
    const navList = document.createElement('ul');
    const iconContainer = document.createElement('div');
    iconContainer.classList.toggle('iconContainer');

    nav.appendChild(iconContainer);
    const icon = document.createElement('p')
    icon.className = 'nav-item icon';
    icon.textContent = "Yums";
    icon.setAttribute('data-page', 'home');

    iconContainer.appendChild(icon);
    navList.appendChild(createNavItem('Menu'));
    navList.appendChild(createNavItem('phone-number'));
    navList.appendChild(createNavItem('credits'));
    nav.appendChild(navList);
}

function createNavItem(content) {
    let navItem = document.createElement('li');
    
    if (content.toLowerCase() == 'phone-number') {
        navItem.textContent = '123-456-789';
        navItem.classList.add('phone-number')
    }
    else {
        navItem.textContent = content;
        navItem.classList.toggle('nav-item');
    }
    navItem.setAttribute('data-page', content);
    
    return navItem
}

export {createNavbar}


