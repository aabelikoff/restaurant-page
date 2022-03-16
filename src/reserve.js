import reserve_background from './reserve-background.jpg';

const reserve = () => {
    document.querySelector('#header').removeAttribute('class');
    document.body.style.cssText = '';
    document.body.style.cssText = `background-image: url(${reserve_background});
            background-size: 1400px 800px;`
    let div = document.querySelector('#sc');
    div.innerHTML = '';
    div.removeAttribute ('class');
    div.classList.add('reserve');
    div.innerHTML = `
    <div>
        For table reserving please call +38 050 0020103 or <br> fill the form below.
    </div>
    <form action="">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br>
        <label for="date">Date:</label>
        <input type="text" id="date" name="date"><br>
        <label for="guests">Number of guests:</label>
        <input type="text" id="guests" name="guests"><br>
        <label for="phone">Phone number:</label>
        <input type="text" id="phone" name="phone"><br>
        
        <span><input type="submit" id="submit" name="submit" value="Submit"></span>
    </form>

    `;
    
            

}

export default reserve;