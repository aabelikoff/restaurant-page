function home (parentNode) {
    let h = document.createElement('h1');
    h.textContent = 'ROCK & MEAT';
    let div = document.createElement('div');
    div.className = 'main-logo';
    div.innerHTML = `STEAKHOUSE`;
    parentNode.appendChild(h);
    parentNode.appendChild(div);
}

function goHome (){
    document.body.style.cssText = '';
    let div = document.querySelector('#sc');
    div.innerHTML = '';
    div.removeAttribute('class');
    document.querySelector('#header').removeAttribute('class');
    div.classList.add('site-content')
    home(div);
}

export {home, goHome};