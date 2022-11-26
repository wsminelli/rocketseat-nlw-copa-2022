let atraso = -0.1;
function createMenu(link, fase, nome) {
    atraso = atraso + 0.1;
    return `
        <li style="animation-delay: ${atraso}s">
            <a href="./${link}.html" class="${fase}">
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
        ${createMenu("index", "fase-grupo", "Fase de Grupos")}
        ${createMenu("oitavas", "fase-oitavas", "Oitavas de Final")}
        ${createMenu("quartas", "fase-quartas", "Quartas de Final")}
        ${createMenu("semifinal", "fase-semifinal", "Semifinal")}
        ${createMenu("terceiro-lugar", "fase-terceiro", "3º lugar")}
        ${createMenu("final", "fase-final", "Final")}
    </ul>
`

async function getContent() {
    try {
        const response = await fetch('https://copa22.medeiro.tech/matches') 
        
        const data = await response.json()  
        
        show(data)
        
    } catch (error) {
        console.error(error)
    }
}

getContent()


function show(games) {
    let matches = ''


    for( let game of games ) {
        const time = new Date(game.date).toLocaleTimeString('pt-Br',
                 { timeStyle: 'short', hour12: false, timeZone: 'America/Sao_Paulo' });

        matches += `
        <li>
            <figure>    
                <img src="./assets/flags/icon-${game.homeTeam.name}.svg" alt="Bandeira do ${game.homeTeam.name}">
                <figcaption>${game.homeTeam.name}</figcaption>
            </figure>
            <div class="info">
                <span>${game.venue}<br></span>
                <strong>${time}</strong>
            </div>
            <figure> 
                <img src="./assets/flags/icon-${game.awayTeam.name}.svg" alt="Bandeira da ${game.awayTeam.name}">
                <figcaption>${game.awayTeam.name}</figcaption>
            </figure>
        </li> 
        `
    }

    // let dayDate = newDate.getDate(game.date)
    // let delay = -0.4;
    // function createCard(games) {
    //     delay = delay + 0.4;

    //     for( let game of games ) {
    //         dayDate += `
    //             <div class="card swiper-slide" style="animation-delay: ${delay}s">
    //                 <h2>${date}<span>${day}</span></h2>
    //                 <ul>
    //                     ${matches}
    //                 </ul>

    //             </div>
    //         `
    //     }
    // }

    document.querySelector("#cards").innerHTML = `

    <div class="card swiper-slide">
                    <h2>22/11<span>domingo</span></h2>
                    <ul>
                        ${matches}
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