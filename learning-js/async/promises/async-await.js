//Inside an async function, you can use the await keyword before a call to a function that returns a promise.
// This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}
//Note though that, async function always returns a promise
async function fetchProducts() {
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));

