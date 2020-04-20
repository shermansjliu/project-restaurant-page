const creditsTab = () => {
  const content_div = document.querySelector('.content');
  const list = document.createElement('ul');
  list.appendChild(createCreditElement("Photo by Alex Boyd on Unsplash"));
  list.appendChild(createCreditElement(" Photo by Siebe Warmoeskerken on Unsplash"));
  list.appendChild(createCreditElement("Photo by Y Cai on Unsplash"));
  list.appendChild(createCreditElement("Photo by Tyler Nix on Unsplash"));
  list.classList.add('credits-list');
  content_div.appendChild(list);
}

const createCreditElement = (credit_text) => {
  let el = document.createElement('li');
  el.textContent = credit_text;
  return el
}
export {creditsTab}