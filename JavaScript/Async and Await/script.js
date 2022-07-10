// Rules for Async and Await
//1. Must be in a function
//2. Must use keyword await and async

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = true;
        isReady ? resolve("Soup is Ready") : reject("Soup is not available today");
    }, 5000);
})

const getDog = async () => {
    
    const url = "https://dog.ceo/api/breeds/image/random";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getDog();

const getSoup = async () => {
    try {
        const soup = await promise1;
        console.log(soup);
    } catch (err) {
        console.log(err);
    }
}