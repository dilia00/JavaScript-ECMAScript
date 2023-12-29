'use strict';
const url = "https://dog.ceo/api/breeds/image/random";
const body = document.querySelector('body');
let counter = 0;

function getDog(data) {
    body.insertAdjacentHTML('beforeend',
        `<img src="${data.message}" alt="dog">`)
}

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const intervalId = setInterval(async () => {
    if (counter >= 9) {
        clearInterval(intervalId);
    }
    try {
        const data = await getData(url);
        console.log(data);
        getDog(data);
    } catch (error) {
        console.log("Something went wrong");
    }
    counter++;
}, 3000);
