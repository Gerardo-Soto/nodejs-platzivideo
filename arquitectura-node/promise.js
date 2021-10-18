const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Hello, World!');
        } else {
            reject('Hello, error.');
        }
    }, 2000);
});

promise
.then(msg => msg.toUpperCase())
.then(msg => console.log('messaghe', msg))
.catch(err => console.log('error', err));

