import logo from './logo.png';
import instIcon from './icons8-instagram-100px.png';
import fbIcon from './icons8-facebook-100px.png';
import twitIcon from './icons8-twitter-100px.png';
import {home} from './home';

function Initialize () {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    document.body.removeAttribute('style');
    let divs =[];
    for (let i=0; i<3; i++){
        divs.push(document.createElement('div'));
    }
    divs[0].id = 'header';
    //divs[0].classList.add('header-fixed');
    divs[1].id = 'sc';
    divs[1].className = 'site-content';
    divs[2].id = 'footer';
    {
        let div = document.createElement('div');
        div.className = 'logo';
        let a = document.createElement('a');
        a.className = 'logo-btn';
        a.setAttribute('href','#');
        
        div.appendChild(a);
        let ul = document.createElement('ul');
        ul.className = ('head-nav');
        let liNames =['About','Menu','Reservations'];
        for (let i=0; i<3; i++){
            let li =document.createElement('li');
            li.innerHTML = `<a href="#" target="_self">${liNames[i]}</a>`;
            ul.appendChild(li);
        }
        divs[0].appendChild(div);
        divs[0].appendChild(ul);
    }
    
    {
        home (divs[1]);
    }
    {
        const socialIcons = [{img:instIcon, url:'https://www.instagram.com'},
                            {img:fbIcon, url:'https://www.facebook.com'}, 
                            {img:twitIcon, url:'https://www.twitter.com'}];
        let liNames = ['Careers', 'News', 'Contact us'];
        let ul, li;
        for (let i=0; i<2; i++){
            ul = document.createElement('ul');
            for(let j=0;j<3;j++){
                li = document.createElement('li');
                if (i === 0){
                    //li.setAttribute('href','#');
                    //.setAttribute('target','blank');
                    li.innerHTML = `<a href="${socialIcons[j].url}" target="blank"><img src='${socialIcons[j].img}'><a>`;
                }
                else {
                    li.innerHTML = `<a href="#">${liNames[j]}</a>`;
                }
                ul.appendChild(li);
            }
            ul.className = !i ? 'social-accounts' : 'foot-nav';
            divs[2].appendChild(ul);
        }
    }
    divs.forEach(elem => content.appendChild(elem)); 
}

export default Initialize;