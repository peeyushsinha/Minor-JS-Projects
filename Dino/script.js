var dino = document.getElementById("dyno");
var block = document.getElementById("block");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var count = 0;

function jump() {
    dino.style.top = "90px";
    setTimeout(() => {
        dino.style.top = "160px";
    }, 400);
    count++;
}
window.addEventListener("keydown", jump);
//Game over function

setInterval (
    function Gameover() 
    {
        var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        if ( (dinotop > 90) && (blockleft < 70) )
        {
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `Score: ${count}`;
        }
    },10)

    /*
     console.log("This is tutorial 58");
    // setTimeout --> Allows us to run the function once after a certain interval of time.
    // setTimeInterval --> Allows us to run the function repeatedly after the interval of time.

    function greet(name, byeText)
    {
        console.log("Hello Good Morning " + name + " " + byeText);
    }

    // timeOut = setTimeout(greet, 5000, "Harry", "Take Care");
    // console.log(timeOut);

    // clearTimeout(timeOut);

    // setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout

    // intervalId = setInterval(greet, 1000, "Harry", "Good Night");
    // clearInterval(intervalId);

    function displayTime()
    {
        time = new Date();
        console.log(time);
        document.getElementById('time').innerHTML = time;
    }
    setInterval(displayTime,  1000);
     */