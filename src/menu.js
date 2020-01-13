/**
 * Created by work on 2/1/2020.
 */
const menuPage= () => {
    const content = document.querySelector('.content');
    const menuGrid = document.createElement('div');
    const columnTea = document.createElement('div');
    const rowCrossaint = document.createElement('div');
    const rowCake = document.createElement('div');

    menuGrid.appendChild(columnTea);
    menuGrid.appendChild(rowCrossaint);
    menuGrid.appendChild(rowCake);
    menuGrid.classList.toggle('menu-grid');

    columnTea.classList.toggle('columnTea');
    columnTea.textContent = 'Tea';

    rowCrossaint.textContent = 'Crossaint';
    rowCrossaint.classList.toggle('rowCrossaint');

    rowCake.textContent = 'Cake';
    rowCake.classList.toggle('rowCake');

    content.appendChild(menuGrid);

};

export {menuPage}
