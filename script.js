let counter = 0
let homePoints = document.querySelector('.home-points-p')
let guestPoints = document.querySelector('.guest-points-p')
let btnHome1 = document.querySelector('.hplus-1')
let btnHome2 = document.querySelector('.hplus-2')
let btnHome3 = document.querySelector('.hplus-3')
let btnGuest1 = document.querySelector('.gplus-1')
let btnGuest2 = document.querySelector('.gplus-2')
let btnGuest3 = document.querySelector('.gplus-3')

// HOME POINTS
btnHome1.addEventListener('click', function () {
    add1()
    add1ToCounter(homePoints)
})

btnHome2.addEventListener('click', function () {
    add1()
    add2ToCounter(homePoints)
})

btnHome3.addEventListener('click', function () {
    add1()
    add3ToCounter(homePoints)
})
// END HOME POINTS

// GUEST POINTS
btnGuest1.addEventListener('click', function () {
    add1()
    add1ToCounter(guestPoints)
})
btnGuest2.addEventListener('click', function () {
    add1()
    add2ToCounter(guestPoints)
})
btnGuest3.addEventListener('click', function () {
    add1()
    add3ToCounter(guestPoints)
})
// END GUEST POINTS

// FUNCTIONS
function add1() {
    counter += 1
    return counter
}

function add1ToCounter(points) {
    points.textContent = counter
}

function add2ToCounter(points) {
    let add2 = counter + 1
    points.textContent = add2
    counter = add2
}

function add3ToCounter(points) {
    let add3 = counter + 2
    points.textContent = add3
    counter = add3
}

// function subtractPoints(genericPoints, specificPoints){
// if(genericPoints > 0){
//     return genericPoints - specificPoints
// }}

// END FUNCTIONS
