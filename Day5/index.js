function Counter(min, max)
{
    let count = 0;

    function UI(value,message = "")
    {
    
        document.getElementById("count").textContent = value;
        document.getElementById("message").textContent = message;
    }

    return{
        increment(){
            if(count<max){
                count++;
                UI(count);
            }
            else{
                UI(count,"Max limit reached");
            }
        },
        decrement(){
            if(count>min){
                count--;
                UI(count);
            }
            else{
                UI(count,"Minimum limit");
            }
        }
    }
}
const check = new Counter(0,10);
document.addEventListener("keyup",(e) =>{
    if(e.key === "ArrowLeft"){
        check.decrement();
    }
});
document.addEventListener("keyup", (e) =>{
    if(e.key === "ArrowRight"){
        check.increment();
    }
});