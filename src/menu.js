import steak from './steak-540-360.jpg';
import grill from './grill-540-360.jpg';
import pork_sausages from './pork-sauages-540-360.jpg';
import beef_sausages from './beef-sausages-540-360.jpg';

class Dish {
    constructor (name, price, weight, image) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.image = image;
    }
    createDiv () {
        let div = document.createElement('div');
        div.classList = 'menu-item';
        let picDiv = document.createElement('div');
        picDiv.innerHTML = `<img src="${this.image}" alt="dish-photo">`;
        let infoDiv = document.createElement('div');
        infoDiv.innerHTML = `<p>${this.name}</p><br>
                             <p>${this.price} $</p><br>
                             <p>${this.weight} gr.</p>`;
        div.appendChild(picDiv);
        div.appendChild(infoDiv);
        return div;
    }
};

let menu = [ new Dish('Steak',20,800,steak),
             new Dish('Grill',30,1000,grill),     
             new Dish('Pork sausages',15,500,pork_sausages),
             new Dish('Beef sausages',15,500,beef_sausages)];

const initMenu = () => {
    document.body.style.cssText='background:rgb(211,189,120)';
    document.querySelector('#header').classList.add('header-fixed');
    let div = document.querySelector('#sc');
    div.removeAttribute('class');
    div.classList.add('menu-content');
    div.innerHTML = '';
    //div.appendChild(menu[0].createDiv());
    menu.forEach(elem => div.appendChild(elem.createDiv()));
};

export default initMenu;