let input = document.getElementById("input");


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
         timer=setTimeout(() => {
            fn(...args);
         }, delay);
    }
}

const search = (e) =>{
    let query = e.target.value;
    console.log("Search for",query)
}
const searchWithDebounce = debounce(search,1000);
input.addEventListener("input",searchWithDebounce);

function throttel(fn,delay){
    let lastcall =0;
    return function(...args){
        const now = Date.now();
        if(now-lastcall < delay){
            return;
        }
        lastcall = now;
        return fn(...args);
    }
}

function sendChatMessage(message){
    console.log("sending message",message);
}

const sendMessageWithSlowMode = throttel(sendChatMessage,2*1000);

sendMessageWithSlowMode("hi");
sendMessageWithSlowMode("hello");