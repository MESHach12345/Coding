const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = true;
        isReady ? resolve("Soup is Ready") : reject("Soup is not available today");
    }, 5000);
})

console.log(promise1
    .then(success => console.log(success))
    .catch(err => console.log(err)));

// 