let elForm = document.querySelector('.form');
let elUSD = document.querySelector('.usd');
let elUZS = document.querySelector('.uzs');
let elUserMoney = document.querySelector('.userMoney');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
		'X-RapidAPI-Key': 'b81e55b064msh0d8c6b94f10c9adp195404jsn428b3d6bb47f'
	}
};

elForm.addEventListener('submit', async function(e) { // qaytaradi: Promise<void>
    e.preventDefault();

    const response = await fetch(`https://currency-converter-pro1.p.rapidapi.com/convert?from=USD&to=UZS&amount=${elUserMoney.value}`, options)
    const responseJSON = await response.json()
    console.log(responseJSON);

    elUSD.innerHTML = `$ ${elUserMoney.value}`;
    elUZS.innerHTML =  `${(new Intl.NumberFormat().format(responseJSON.result))} so'm`;
})

// LOADER
function loader() {
    document.querySelector('.loader__container').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 5000)
}

window.onload = fadeOut()