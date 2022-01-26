console.log("JS Loaded")

const h1Tag = document.getElementsByTagName("h1")[0]
/*
setTimeout(
    ()=> {
        console.log("I am a pizza")
        h1Tag.innerText += "I like pizza"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds (seconds * milliseconds)
);


setTimeout(
    ()=> {
        console.log("I am polpetta al ragu")
        h1Tag.innerText += " and I also like polpette"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds (seconds * milliseconds)
);


setTimeout(
    ()=> {
        console.log("I like steak")
        h1Tag.innerText += " and I also like steak"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds (seconds * milliseconds)
);
*/

function onButton1Click(){
    console.log("Button 1 clicked")
    setTimeout(
        ()=>h1Tag.innerText += " and I also like steak",
        Math.random() * 5 * 1000
    )
};

function onButton2Click(){
    console.log("Button 2 clicked")
    setTimeout(
        ()=>h1Tag.innerText += " and I also like polpette",
        Math.random() * 5 * 1000
    )
};

function onButton3Click(){
    console.log("Button 3 clicked")
    setTimeout(
        ()=>h1Tag.innerText += "I like pizza",
        Math.random() * 5 * 1000
    )
};

// timer

const counter = document.getElementById("counter");

const myInterval = setInterval(
    () => {                                                         // ()=> counter.textContent++
        counter.innerText = parseInt(counter.innerText) + 1;
        if(counter.innerText === "20"){
            clearInterval(myInterval)
        }
    },
    1 * 1000
);

// only way to stop the clock

const stopCounter = ()=> clearInterval(myInterval);



/*
setTimeout(
    ()=> clearInterval(myInterval),
    20 * 1000
)
*/