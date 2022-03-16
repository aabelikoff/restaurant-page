import about_background from './about-background.jpg';
import zone_1 from './interior-big-2.jpg';
import zone_2 from './interior-big.jpg';
import zone_3 from './interior-small.jpg';
import zone_4 from './rbar-small.jpg';

const about = () => {
    document.querySelector('#header').removeAttribute('class');
    document.body.style.cssText = '';
    document.body.style.cssText = `background-image: url(${about_background});
            background-size: 1400px 800px;`
    let div = document.querySelector('#sc');
    div.innerHTML = '';
    div.removeAttribute ('class');
    div.classList.add('about');
    div.innerHTML = `
    <div>
        <p>Hi, we are "Rock & Meat"restaurant.</p>
        <p>We were founded in 2001 year. Since that time we are democratic non-formaland a little 
        bit crazy.<br><br> If you com to us you are free. If you are not free you will get thr freedom.
        The freedom of spirit, fathe and taste.</p>
        <p >   Our 3 dining zone are opened from 10-00 a.m. till 00-00</p>
    </div>
    <div>
        <img src=${zone_1} alt='restaurant interior picture'>;
        <img src=${zone_2} alt='restaurant interior picture'>;
        <img src=${zone_3} alt='restaurant interior picture'>;
        <img src=${zone_4} alt='restaurant interior picture'>;
    </div>`;
            

}

export default about;