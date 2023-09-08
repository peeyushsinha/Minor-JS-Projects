var jokes = document.querySelector("#joketext");
var jokebtn = document.querySelector("#jokebtn");
var container = document.querySelector("#container");


const getjokes = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json",
            },
        };

        const res = await fetch('https://icanhazdadjoke.com/', config);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`the error is${error}`);
    }
}
jokebtn.addEventListener('click', getjokes);
getjokes();