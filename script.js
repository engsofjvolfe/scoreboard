let homeCounter = 0
let guestCounter = 0
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
    homeCounter = add1(homeCounter)
    homeCounter = add1ToCounter(homePoints, homeCounter)
})

btnHome2.addEventListener('click', function () {
    homeCounter = add1(homeCounter)
    homeCounter = add2ToCounter(homePoints, homeCounter)
})

btnHome3.addEventListener('click', function () {
    homeCounter = add1(homeCounter)
    homeCounter = add3ToCounter(homePoints, homeCounter)
})
// END HOME POINTS

// GUEST POINTS
btnGuest1.addEventListener('click', function () {
    guestCounter = add1(guestCounter)
    guestCounter = add1ToCounter(guestPoints, guestCounter)
})
btnGuest2.addEventListener('click', function () {
    guestCounter = add1(guestCounter)
    guestCounter = add2ToCounter(guestPoints, guestCounter)
})
btnGuest3.addEventListener('click', function () {
    guestCounter = add1(guestCounter)
    guestCounter = add3ToCounter(guestPoints, guestCounter)
})
// END GUEST POINTS

// FUNCTIONS
function add1(counter) {
    counter += 1
    return counter
}

function add1ToCounter(points, counter) {
    points.textContent = counter
    return counter
}

function add2ToCounter(points, counter) {
    let add2 = counter + 1
    points.textContent = add2
    return (counter = add2)
}

function add3ToCounter(points, counter) {
    let add3 = counter + 2
    points.textContent = add3
    return (counter = add3)
}

// function subtractPoints(genericPoints, specificPoints){
// if(genericPoints > 0){
//     return genericPoints - specificPoints
// }}

// END FUNCTIONS
