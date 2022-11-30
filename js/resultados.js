var btnLinks = document.getElementById("top-bar");
var links = btnLinks.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}  

let atraso = -0.1;
function createMenu(fase, nome) {
    atraso = atraso + 0.1;
    return `
        <li style="animation-delay: ${atraso}s">
            <a href="#" class="${fase}" onclick="stageOitavas()">
                <svg class="button-left" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 46" preserveAspectRatio="none">
                    <path d="M0 23C5.78 15.215 15.805 5.897 23 0v46C15.805 40.103 5.78 30.785 0 23Z"></path>
                </svg>
                <span class="btn btn-primary">${nome}</span>
                <svg class="button-right" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 46" preserveAspectRatio="none">
                    <path d="M23 23C16.749 30.785 7.43 40.103 0 46V0c7.43 5.897 16.749 15.215 23 23Z"></path>
                </svg>
            </a>
        </li>

    `
}

document.querySelector("#menu").innerHTML = `
    <div id="btn-mobile">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#8a1538" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>    
    </div>
    <ul id="menu-fases">
        ${createMenu("fase-grupo", "Fase de Grupos")}
        ${createMenu("fase-oitavas", "Oitavas de Final")}
        ${createMenu("fase-quartas", "Quartas de Final")}
        ${createMenu("fase-semifinal", "Semifinal")}
        ${createMenu("fase-terceiro", "3º lugar")}
        ${createMenu("fase-final", "Final")}
    </ul>
`

function getDayOfGame(date) {
    const rawDate = new Date(date)
    const day = rawDate.getDate()
    const month = rawDate.getMonth()
    const parsedDay = day.toString().padStart(2, '0')
    const parsedMonth = (month + 1).toString().padStart(2, '0')

    return `${parsedDay}/${parsedMonth}`
}

function getWeekDayOfGame(date) {
    const weekDays = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ]

    const rawDate = new Date(`2022-${date.split("/").reverse().join("-")} 12:00:00`)
    const day = weekDays[rawDate.getDay()]

    return day
}

function getHourDate(date) {
    const rawDate = new Date(date)
    
    return `${rawDate.getHours().toString().padStart(2, "0")}:00`
}

fetch('https://copa22.medeiro.tech/matches')
   .then(res => res.json())
   .then(data => {
        const gamesGroupedByDate = {}
        data.forEach(game => {
            const dayOfGame = getDayOfGame(game.date) 
            
            if (!gamesGroupedByDate[dayOfGame]) {
                 gamesGroupedByDate[dayOfGame] = []
            }
 
            gamesGroupedByDate[dayOfGame].push(game)
        });

        const cards = []
        Object.entries(gamesGroupedByDate).forEach(([date, games]) => {
            const weekDay = getWeekDayOfGame(date)
            const gamesOfDay = games.map((game) => {
                const hour = getHourDate(game.date)

                const gameOfStages = games.filter(game => game.stageName === "Round of 16")
            
                console.log(gameOfStages)

                return createGame(game.venue, hour, game.homeTeam, game.homeTeam.goals, game.awayTeam.goals, game.awayTeam, game.status)
            })

            const card = createCard(date, weekDay, gamesOfDay.join(''))
            cards.push(card)
        })

        document.querySelector(".games").innerHTML = 
            cards.join('')   
    });
 
// var stages = "First stage"; 
function createGame(stadium, hour, player1, goals1, goals2, player2, status) {
    // if (stage == stages) {
    
    if (status == "scheduled") {
        goals1 = ""
        goals2 = ""
      }

    return `
        <li>
            <div class="info">
                <span>${stadium} ${hour}</span>
            </div>
            <div class="game-result">
                <figure>    
                    <img src="./assets/flags/icon-${player1.name?.toLowerCase()}.svg" alt="Bandeira do ${player1.name?.toLowerCase()}">
                    <figcaption>${player1.name?.toLowerCase()}</figcaption>
                </figure>
                <div class="score">
                    <span>${goals1}</span>
                    X
                    <span>${goals2}</span>
                </div>
                <figure> 
                    <img src="./assets/flags/icon-${player2.name?.toLowerCase()}.svg" alt="Bandeira da ${player2.name?.toLowerCase()}">
                    <figcaption>${player2.name?.toLowerCase()}</figcaption>
                </figure>
            </div>
        </li>
    `
    // } else {
    //     ""
    // }
       
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    
    if (games == "") {
        ""
    } else {
        return `
        <div class="card-result" style="animation-delay: ${delay}s">
            <h2>${date} ${day}</h2>
            <div class="card">
                <ul>
                    ${games}
                </ul>
            </div>
        </div>
    `
    }

  
}

function stageOitavas() {
    stages = "Round of 16";

    document.querySelector(".swiper-wrapper").innerHTML = 
        `teste`
}



const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active') 
}

btnMobile.addEventListener('click', toggleMenu);