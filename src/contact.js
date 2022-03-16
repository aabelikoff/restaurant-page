const contactUs = () => {
    document.querySelector('#header').removeAttribute('class');
    document.body.style.cssText = '';
    let div = document.querySelector('#sc');
    div.innerHTML = '';
    div.classList.add('contacts');
    div.innerHTML = '<p>Have fun with your friends:</p>'+
            '<p>Gubskogo str., 41, Lugansk, Ukraine, 91000</p>'+
            'ph: +38 050 0020103'+
            '<p style=text-align:center>PEACE FOR UKRAINE! GLORY TO UKRAINE!</p>';



}

export default contactUs;