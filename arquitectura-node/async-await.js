//Transform a const to function:
// const promise = new Promise((resolve, reject) => {

const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Hello, World!');
        } else {
            reject('Hello, error.');
        }
    }, 500);
});

async function asyncAwait(){
    try {
        const msg = await promiseFunction();
        console.log('message', msg);
    } catch (err) {
        console.log('error', err);
    }
}

asyncAwait();

