const output = document.querySelector("#output");
const button = document.querySelector('#set-alarm');
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0)
            throw new Error("delay < 0");
        setTimeout(() => {
            resolve(`Wake up, ${person}`);
        }, delay)
    });
}

// way one
button.addEventListener("click", () => {
    alarm(name.value, delay.value)
        .then((message) => (output.textContent = message))
        .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});

// way two
button.addEventListener("click", async () => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Could not set alarm ${error}`;
    }
})