function createMenu(link, fase, nome) {
    return `
        <li>
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

function createGame(player1, stadium, hour, player2) {
    return `
        <li>
            <figure>    
                <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
                <figcaption>${player1}</figcaption>
            </figure>
            <div class="info">
                <span>${stadium}<br></span>
                <strong>${hour}</strong>
            </div>
            <figure> 
                <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}">
                <figcaption>${player2}</figcaption>
            </figure>
        </li>    
    `
}

let delay = -0.4;
function createCard(fase, date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card swiper-slide ${fase}" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>

    </div>
    `
}

document.querySelector("#cards").innerHTML = `
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            ${createCard("grupo", "20/11", "domingo", createGame("qatar", "AL BAYT", "13:00", "ecuador"))}
            ${createCard("grupo", 
                "21/11",
                "segunda",
                createGame("england", "INTERNACIONAL KHALIFA", "10:00", "iran") +
                createGame("senegal", "AL THUMAMA", "13:00", "netherlands") +
                createGame("united states", "AHMAD BIN ALI", "16:00", "wales")
            )}
            ${createCard("grupo", 
                "22/11",
                "terça",
                createGame("argentina", "LUSAIL", "07:00", "saudi arabia") +
                createGame("denmark", "CIDADE DA EDUCAÇÃO", "10:00", "tunisia") +
                createGame("mexico", "ESTÁDIO 974", "13:00", "poland") +
                createGame("france", "AL JANOUB", "16:00", "australia")
            )}
            ${createCard("grupo", 
                "23/11",
                "quarta",
                createGame("morocco", "AL BAYT", "07:00", "croatia") +
                createGame("germany", "INTERNACIONAL KHALIFA", "10:00", "japan") +
                createGame("spain", "AL THUMAMA", "13:00", "costa rica") +
                createGame("belgium", "AHMAD BIN ALI","16:00", "canada")
            )}
            ${createCard("grupo", 
                "24/11",
                "quinta",
                createGame("switzerland", "AL JANOUB", "07:00", "cameroon") +
                createGame("uruguay", "CIDADE DA EDUCAÇÃO", "10:00", "south korea") +
                createGame("portugal", "ESTÁDIO 974", "13:00", "ghana") +
                createGame("brazil", "LUSAIL", "16:00", "serbia")
            )}
            ${createCard("grupo", 
                "25/11",
                "sexta",
                createGame("wales", "AHMAD BIN ALI", "07:00", "iran") +
                createGame("qatar", "AL THUMAMA", "10:00", "senegal") +
                createGame("netherlands", " INTERNACIONAL KHALIFA ", "13:00", "ecuador") +
                createGame("england", "AL BAYT", "16:00", "united states")
            )}
            ${createCard("grupo", 
                "26/11",
                "sábado",
                createGame("tunisia", "AL JANOUB", "07:00", "australia") +
                createGame("poland", "CIDADE DA EDUCAÇÃO", "10:00", "saudi arabia") +
                createGame("france", "ESTÁDIO 974", "13:00", "denmark") +
                createGame("argentina", "LUSAIL", "16:00", "mexico")
            )}
            ${createCard("grupo", 
                "27/11",
                "domingo",
                createGame("japan", "AHMAD BIN ALI", "07:00", "costa rica") +
                createGame("belgium", "AL THUMAMA", "10:00", "morocco") +
                createGame("croatia", "INTERNACIONAL KHALIFA", "13:00", "canada") +
                createGame("spain", "AL BAYT", "16:00", "germany")
            )}
            ${createCard("grupo", 
                "28/11",
                "segunda",
                createGame("cameroon", "AL JANOUB", "07:00", "serbia") +
                createGame("south korea", "CIDADE DA EDUCAÇÃO", "10:00", "ghana") +
                createGame("brazil", "ESTÁDIO 974", "13:00", "switzerland") +
                createGame("portugal", "LUSAIL", "16:00", "uruguay")
            )}
            ${createCard("grupo", 
                "29/11",
                "terça",
                createGame("ecuador", "INTERNACIONAL KHALIFA", "12:00", "senegal") +
                createGame("netherlands", "AL BAYT", "12:00", "qatar") +
                createGame("iran", "AL THUMAMA", "16:00", "united states") +
                createGame("wales", "AHMAD BIN ALI", "16:00", "england")
            )}
            ${createCard("grupo", 
                "30/11",
                "quarta",
                createGame("tunisia", "CIDADE DA EDUCAÇÃO", "12:00", "france") +
                createGame("australia", "AL JANOUB", "12:00", "denmark") +
                createGame("poland", "STÁDIO 974 ", "16:00", "argentina") +
                createGame("saudi arabia", "LUSAIL", "16:00", "mexico")
            )}
            ${createCard("grupo", 
                "01/12",
                "quinta",
                createGame("croatia", "AHMAD BIN ALI", "12:00", "belgium") +
                createGame("canada", "AL THUMAMA", "12:00", "morocco") +
                createGame("japan", "INTERNACIONAL KHALIFA", "16:00", "spain") +
                createGame("costa rica", "AL BAYT ", "16:00", "germany")
            )}
            ${createCard("grupo", 
                "02/12",
                "sexta",
                createGame("south korea", "AL JANOUB", "12:00", "portugal") +
                createGame("ghana", "CIDADE DA EDUCAÇÃO", "12:00", "uruguay") +
                createGame("serbia", "ESTÁDIO 974", "16:00", "switzerland") +
                createGame("cameroon", "LUSAIL", "16:00", "brazil")
            )}         
        </div>
        <div class="swiper-button-next">
            <img src="./assets/arrowRight.svg">
        </div>
        <div class="swiper-button-prev">
            <img src="./assets/arrowLeft.svg">
        </div>
    </div>
`

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active') 
}

btnMobile.addEventListener('click', toggleMenu);