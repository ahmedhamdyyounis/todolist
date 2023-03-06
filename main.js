// Search Field Implementation
let search = document.getElementById('search-field')
let faQuestion = document.querySelector('.fa-circle-question')
let faX = document.querySelector('.fa-x')

search.addEventListener('focus', function () {
            faQuestion.classList.remove('d-none')
            faX.classList.remove('d-none')
})

search.addEventListener('blur', function () {
            faQuestion.classList.add('d-none')
            faX.classList.add('d-none')
})

// Section Date
let currentDate = document.querySelector('.current-date')
let months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec" ]
let weekDays = ['Sun',  "Mon", 'Tues', 'Wed', 'Thur', 'Fri', 'Sat' ]
let todayDate = new Date()
currentDate.innerHTML = `${months[todayDate.getMonth()]} ${todayDate.getDate()} <span>.</span> Today <span>.</span> ${weekDays[todayDate.getDay()]}`

// Add Task

let adding = document.querySelector('.add-task')
let taskBody = document.querySelector('.taskaya')
adding.addEventListener('click', unDisplay)
function unDisplay() {
    adding.classList.add('d-none')
    taskBody.classList.remove('d-none')
}

let taskForm = document.querySelector('.task-form')

// taskForm.addEventListener('focus', function () {
    
// })

console.log(taskBody)


