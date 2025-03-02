const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['#580C82', '#8F30A1', '#FE4773', '#F6D68D', '#46B3A5', '#E6DBC9', '#94BFD0'];

body.style.backgroundColor='#F4F7FF';

button.addEventListener('click',function(){
    const randomColor = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[randomColor];
})


const now = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = days[now.getDay()];
const month = months[now.getMonth()];
const date = now.getDate();
const year = now.getFullYear();

const CurrentDate = `${day}, ${month} ${date} ${year}`;

document.getElementById('date-display').innerText = CurrentDate;



const buttons = document.getElementsByClassName('btn')
const cardsTitle = document.getElementsByClassName('card-title')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            event.preventDefault();
            alert("Board Updated Successfully");
            setTask();
            setTotalTask();
            if(buttons[i].disabled = true){
            buttons[i].style.backgroundColor ="rgba(55, 82, 253, 0.2)"
            }
            const container = document.getElementById("history");

            let now = new Date();
            let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="bg-[#F4F7FF] p-4 rounded-md">
            <p>You have Completed the Task ${cardsTitle[i].innerText} at ${currentTime}</p>
            </div>
            `
            container.appendChild(div);
        })

        if(i===buttons.length-1){
            buttons[buttons.length-1].addEventListener('click',function(event){
    event.preventDefault();
    alert("Congratulation ! You have completed all the current tasks");
})
        }
}


document.getElementById('reset-btn').addEventListener('click', function(event){
    event.preventDefault();
    const container = document.getElementById("history");
    container.innerText = " ";
})


document.getElementById('new-window').addEventListener('click',function(event){
    window.location.href="./main.html";
})

