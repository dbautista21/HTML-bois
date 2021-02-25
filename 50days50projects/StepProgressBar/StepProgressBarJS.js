const progress = document.getElementById("progress")
// progress bar id get
const prev = document.getElementById("prev")
// prev button id get
const next = document.getElementById("next")
// next button id get
const circles = document.querySelectorAll(".circle")
// circles get all in class

let currentActive = 1

/*
    Adds a 1 to currentActive with every click
    currentActive will have a maximum value of the amount
    of circles there are in total
*/
next.addEventListener("click",() => {
    currentActive++
    if (currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

/*
    Subtracts a 2 to currentActive with every click
    currentActive will have a minimum value of 1
*/
prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1;
    }
    update()
 })
 /* 
    Both of the above eventlisteners 
    have an update function that triggers 
    whenever a button is clicked 
 */
function update(){
    //for each circle array element ex: circle 1,2,3,4
    circles.forEach((circle,idx) => {
        /*
            If the idx of the circle is less than the currentActive
            then these circles with these indexes will be considered 
            active
        */
        if (idx < currentActive){
            circle.classList.add("active")
        }
        /*
            Else remove active class, incase user decides to go back
        */
        else{
            circle.classList.remove("active")
        }
    })
    /*
        Array of all elements that are in active class
    */
    const actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length -1)/(circles.length-1) * 100) + '%'

    // what happends when you are in the beginning of the array
    if(currentActive === 1){
        prev.disabled = true
    }
    // what happens when you are at the end of the array
    else if (currentActive === circles.length){
        next.disabled = true
    }
    else{ // Middle 
        prev.disabled = false
        next.disabled = false
    }
}   

