const homeTab = () => {
    let content = document.querySelector('.content');
    let container = document.createElement('div');
    let title = document.createElement('div');
    let description = document.createElement('div');

    container.classList.toggle('container');
    container.appendChild(title);
    container.appendChild(description);
    title.classList.toggle('title');
    description.classList.toggle('description');

    title.textContent = "Yums";
    description.textContent = "Feast on Yums";
    content.appendChild(container);
    
    content.classList.toggle('homepage');
};

export {homeTab}
