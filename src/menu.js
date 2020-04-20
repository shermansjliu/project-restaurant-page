function createMenuItem(menu_item, name) {
    const item_name_container = document.createElement('div');
    const item_name = document.createElement('p');
    item_name_container.classList.add("menu-item-container");
    item_name.textContent = name;
    item_name.classList.toggle("menu-item-name")
    // menu_item.textContent = name;
    item_name_container.appendChild(item_name)
    menu_item.appendChild(item_name_container);
}
export function menuPage() {
    const content = document.querySelector('.content');
    const menu_grid = document.createElement('div');
    const cafe_items = ["tea", "croissant", "coffee", "cake"];

    menu_grid.classList.add("menu-grid");
    for (let i  = 0; i < 4; i++) {
        let menu_item = document.createElement('div');
        menu_item.classList.add(cafe_items[i]);
        menu_item.classList.toggle('menu-item');
        createMenuItem(menu_item, cafe_items[i]);
        menu_grid.append(menu_item);
    }
    content.appendChild(menu_grid);
};


