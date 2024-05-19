// The change in the state of an object is known as Event in javascript
//Events are fired to notified the code of "Interesting changes" that may affect 
//code execution.
// 1. Mouse Events(click , double click etc)
// 2. Keyboard Events(key press, key up ,key down)
// 3. Form events(submit etc)
// 4. Print event and many more

// let bt=document.querySelector('#btn');
// bt.ondblclick =()=>{
//     //console.log("Button clicked 2X")
// }


let div=document.querySelector('#box')
div.onmouseover =()=>{
    //console.log("you are inside div");
}
// Notes
// it have 1st priority to handle the event in js file, ignore inline event handle
// if same object have two event than last event proverty worked(overwrite) 

//Event object
// it is a special object that has details about event
// all event handlers have access to the Event object property method and object.

// bt.ondblclick =(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,  e.clientY)
// }



// Event Listener
// it is better way to handle/access events as compare to previous two method Inline and 
// through function
//SYntax of add EventListener
//Node.addEventListener("event", callback());
// callback also known as Handler that go into another function as qargument
let btn2=document.querySelector('#btn');
btn2.addEventListener("dblclick", ()=>{
        //console.log("button 1X clicked Handler-1");
})
let fun=()=>{
    //console.log("button 2X clicked Handler-2");
}
btn2.addEventListener("dblclick", fun)

btn2.addEventListener("dblclick", (e)=>{
        //console.log("button 2X clicked Handler-3");
        
        
})

// removeEventListener
// use to remove event handler
// suppose we need to remove 2nd handler
// This is not a way bacause callback reference should be same

// btn2.removeEventListener("dblclick", ()=>{
//     console.log("button 1X clicked");
// })

// so we need to store the function in a variable
btn2.removeEventListener("dblclick", fun)




