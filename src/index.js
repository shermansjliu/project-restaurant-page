import {createNavbar} from './navbar';
import {homeTab} from './homepage';
import {menuPage as menuTab} from './menu';

createNavbar();
homeTab();

document.querySelectorAll('.nav-item').forEach((tab) => {

    tab.addEventListener('click', (e) => {
        loadPage(e.target);
    })

});


function loadPage(tab) {
    let pageName = tab.dataset.page.toLowerCase();
    updateNavElement(pageName);

    let oldContent = document.querySelector('.content');
    oldContent.remove();

    let newContent = document.createElement('div');
    newContent.classList.add('content');
    document.querySelector('body').appendChild(newContent);

    if (pageName == 'home') {
        homeTab();
    }
    else if (pageName == 'menu'){
        menuTab();

    }
    else if (pageName == 'contact'){
        contactTab();

    }
}


function updateNavElement(pageName) {
    document.querySelectorAll('.nav-item').forEach(tab => {
        let hasSelected = tab.classList.contains('tab-selected');
        let hasClicked = tab.dataset.page.toLowerCase() == pageName;
        if (hasClicked && hasSelected){
            tab.classList.add('tab-selected')
        }
        if (!hasClicked && !hasSelected){
            tab.classList.remove('tab-selected')
        }
    })
}