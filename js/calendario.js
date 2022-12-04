var swiper = new Swiper(".mySwiper", {
    loop: false,
    freeMode: true,
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 16,
      },
      1020: {
          slidesPerView: 3,
          spaceBetween: 32,

      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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
            <a href="#" class="${fase}">
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

                return createGame(game.homeTeam, game.venue, hour, game.awayTeam)
            })
            
            const card = createCard(date, weekDay, gamesOfDay.join(''))
            cards.push(card)
        })

        document.querySelector(".swiper-wrapper").innerHTML = 
            cards.join('')
            console.log(cards)
});

        // document.querySelector(".fase-grupo").addEventListener("click", () => 
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //         cards.push(card.filter(card => card.stage === 'First stage'))
        //     );

        // document.querySelector(".fase-oitavas").addEventListener("click", () => 
            
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //     'text'
        //     );
    
        // document.querySelector(".fase-quartas").addEventListener("click", () => 
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //         cards.slice(17, 19).join('')
        //     );

        // document.querySelector(".fase-semifinal").addEventListener("click", () => 
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //         cards.slice(19, 21).join('')
        //     );

        // document.querySelector(".fase-terceiro").addEventListener("click", () => 
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //         cards.slice(21, 22).join('')
        //     );

        // document.querySelector(".fase-final").addEventListener("click", () => 
        //     document.querySelector(".swiper-wrapper").innerHTML = 
        //         cards.slice(22, 23).join('')
        //     );
 
function createGame(player1, stadium, hour, player2) {
        return `
        <li>
            <figure>    
                <img src="./assets/flags/icon-${player1.name?.toLowerCase()}.svg" alt="Bandeira do ${player1.name?.toLowerCase()}">
                <figcaption>${player1.name?.toLowerCase()}</figcaption>
            </figure>
            <div class="info">
                <span>${stadium}<br></span>
                <strong>${hour}</strong>
            </div>
            <figure> 
                <img src="./assets/flags/icon-${player2.name?.toLowerCase()}.svg" alt="Bandeira da ${player2.name?.toLowerCase()}">
                <figcaption>${player2.name?.toLowerCase()}</figcaption>
            </figure>
        </li>
        `
}

let delay = -0.4; 
function createCard(date, day, games) {
        return `
        <div class="card swiper-slide" style="animation-delay: 0s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
} 

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active') 
}

btnMobile.addEventListener('click', toggleMenu);