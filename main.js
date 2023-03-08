

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
let allTasksSection = document.querySelector('.all-tasks')


adding.addEventListener('click', unDisplay)

//Removes Adding Plus Task Sign & Displays Task Body
function unDisplay() {
    adding.classList.add('d-none')
    taskBody.classList.remove('d-none')
}

//Deletes Task Body And Input Field Value & Adds Adding Plus Task Sign
function display() {
    adding.classList.remove('d-none')
    taskBody.classList.add('d-none')
    taskNameInput.value = ''
}

// Task Btns
let addBtn = document.querySelector('.add-btn')
let cancelBtn = document.querySelector('.cancel-btn')
let taskNameInput = document.querySelector('#task-name')

//Add Btn Color Indication Whether To Be Deemed Or Not
setInterval(function () {
    if (taskNameInput.value === '') {
        addBtn.style.backgroundColor = '#84b47b'
        addBtn.style.cursor = 'not-allowed'
        
    } else {
        addBtn.style.backgroundColor = '#55A546'
        addBtn.style.cursor = 'pointer'
    }

},500)


addBtn.addEventListener('click', addTheTask)

function addTheTask() {
    if (taskNameInput.value === '') {
        

    } else {

    let div = document.createElement('div')
    div.setAttribute('class', 'task-list-item')
    div.innerHTML = `
    
    <button role="checkbox" class ="done-btn">
    <div class="done-circle ">
    <i class="fa-solid fa-check d-none"></i>
    </div>
    </button>
    
    <p class='hi'>${taskNameInput.value} </p>
    <div class='task-settings d-none'>
        <ul class='setting-icons'>
            <li class='edit-task'> 
                <i class='fa-regular fa-pen-to-square' title='Edit Task'></i>
            </li>
            <li> 
                <i class="fa-regular fa-calendar" title='Set Due Date'></i>
            </li>
            <li> 
                <i class="fa-regular fa-comment" title='Add A Comment'></i>
            </li>
            <li> 
                <i class="fa-solid fa-ellipsis" title='More task action'></i>
            </li>
        </ul>
        
        
    </div>
    <a class ='grip-wrapper'> 
            <i class="fa-solid fa-grip-vertical"></i>
        </a>
    `
    allTasksSection.appendChild(div)
    
    let doneBtn = document.querySelectorAll('.done-btn')
    let allTasks = document.querySelectorAll('.task-list-item')
    const drag = document.querySelectorAll('.fa-grip-vertical')

    // Displays Check Sign
    doneBtn.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            e.querySelector('.fa-check').classList.remove('d-none')
            
        })
    })  

    // Hides Check Sign
    doneBtn.forEach( function (e) {
        e.addEventListener('mouseout', function () {
            e.querySelector('.fa-check').classList.add('d-none')
        })
    })
    

    // Displays User Task Settings
    allTasks.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            e.querySelector('.task-settings').classList.remove('d-none')
        })
        
    })  
    
    // Task Edit Execution
    allTasks.forEach(function (e) {
        let taskEdit = e.querySelector('.edit-task')
        let inputValue = e.querySelector('.hi')

        taskEdit.addEventListener('click', editTask)

        // Task Edit Function
        function editTask() {
            let div = document.createElement('div')

            let section = `
            <div class="taskaya">
            <form action="" id="task-form">
                <input type="text" name="" class="task-name" placeholder="Task name">
            </form>
            <div class="filters">
                <ul>
                    <li>
                        <i class="fa-solid fa-calendar-week"></i>
                        <span>Today</span>
                        <i class="fa-solid fa-x"></i>
                    </li>
                    <li>
                        <i class="fa-regular fa-flag"></i>
                        <span>Priority</span>
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <span>Reminders</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                </ul>
            </div>
            <div class="btns">
                <div class="right-btns">
                    <div class="hero-btn cancel-btn">
                        Cancel
                    </div>
                    <div class="hero-btn save-btn">
                        Save
                    </div>
                </div>
            </div>
        </div>

            `

            div.innerHTML = section
            allTasksSection.appendChild(div)
        
            let input = document.querySelector('.task-name')
            input.value = `${inputValue.textContent}`
            
            e.remove()

            let editedText = allTasksSection.querySelector('.task-name')
            let saveBtn = allTasksSection.querySelector('.save-btn')
            saveBtn.addEventListener('click', function () { 
                
                let p = document.createElement('p')
                p.innerHTML = editedText.value
                
                allTasksSection.appendChild(p)
                div.remove()
            }
                )


        }
    })  



    // Hides User Task Settings
    allTasks.forEach(function (e) {
        e.addEventListener('mouseout', function () {
            e.querySelector('.task-settings').classList.add('d-none')
        })
    })

    let audio = new Audio()
    audio.src = 'sounds/completed.mp3'
    
    doneBtn.forEach( function (e) {
        e.addEventListener('click', function(){
        e.parentElement.remove()
        audio.play()
        
        })
    })

    display()
}
}


// Cancel task Btn
cancelBtn.addEventListener('click', display)
//Inbox Task Counts
window.addEventListener('click', getTaskCounts)

function getTaskCounts() {
    let inbox = document.querySelector('.inbox-num')
    let taskCount = document.querySelectorAll('.task-list-item')
    inbox.innerHTML = `${taskCount.length}`
}

// Side Menu Toggle
const bars = document.querySelector('.bars')
const menu = document.querySelector('.menu')
const taskSection = document.querySelector('.task-section')

bars.addEventListener('click', function () {
    
    menu.classList.toggle('left')
    taskSection.classList.toggle('unmargin-left')
} )



