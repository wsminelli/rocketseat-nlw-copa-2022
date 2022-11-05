function createGame(player1, hour, player2) {
    return `
        <li>
            <figure>    
                <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
                <figcaption>${player1}</figcaption>
            </figure>
            <strong>${hour}</strong>
            <figure> 
                <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}">
                <figcaption>${player2}</figcaption>
            </figure>
        </li>    
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card swiper-slide" style="animation-delay: ${delay}s">
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
            ${createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador"))}
            ${createCard(
                "21/11",
                "segunda",
                createGame("england", "10:00", "iran") +
                createGame("senegal", "13:00", "netherlands") +
                createGame("united states", "16:00", "wales")
            )}
            ${createCard(
                "22/11",
                "terça",
                createGame("argentina", "07:00", "saudi arabia") +
                createGame("denmark", "10:00", "tunisia") +
                createGame("mexico", "13:00", "poland") +
                createGame("france", "16:00", "australia")
            )}
            ${createCard(
                "23/11",
                "quarta",
                createGame("morocco", "07:00", "croatia") +
                createGame("germany", "10:00", "japan") +
                createGame("spain", "13:00", "costa rica") +
                createGame("belgium", "16:00", "canada")
            )}
            ${createCard(
                "24/11",
                "quinta",
                createGame("switzerland", "07:00", "cameroon") +
                createGame("uruguay", "10:00", "south korea") +
                createGame("portugal", "13:00", "ghana") +
                createGame("brazil", "16:00", "serbia")
            )}
            ${createCard(
                "25/11",
                "sexta",
                createGame("wales", "07:00", "iran") +
                createGame("qatar", "10:00", "senegal") +
                createGame("netherlands", "13:00", "ecuador") +
                createGame("england", "16:00", "united states")
            )}
            ${createCard(
                "26/11",
                "sábado",
                createGame("tunisia", "07:00", "australia") +
                createGame("poland", "10:00", "saudi arabia") +
                createGame("france", "13:00", "denmark") +
                createGame("argentina", "16:00", "mexico")
            )}
            ${createCard(
                "27/11",
                "domingo",
                createGame("japan", "07:00", "costa rica") +
                createGame("belgium", "10:00", "morocco") +
                createGame("croatia", "13:00", "canada") +
                createGame("spain", "16:00", "germany")
            )}
            ${createCard(
                "28/11",
                "segunda",
                createGame("cameroon", "07:00", "serbia") +
                createGame("south korea", "10:00", "ghana") +
                createGame("brazil", "13:00", "switzerland") +
                createGame("portugal", "16:00", "uruguay")
            )}
            ${createCard(
                "29/11",
                "terça",
                createGame("ecuador", "12:00", "senegal") +
                createGame("netherlands", "12:00", "qatar") +
                createGame("iran", "16:00", "united states") +
                createGame("wales", "16:00", "england")
            )}
            ${createCard(
                "30/11",
                "quarta",
                createGame("tunisia", "12:00", "france") +
                createGame("australia", "12:00", "denmark") +
                createGame("poland", "16:00", "argentina") +
                createGame("saudi arabia", "16:00", "mexico")
            )}
            ${createCard(
                "01/12",
                "quinta",
                createGame("croatia", "12:00", "belgium") +
                createGame("canada", "12:00", "morocco") +
                createGame("japan", "16:00", "spain") +
                createGame("costa rica", "16:00", "germany")
            )}
            ${createCard(
                "02/12",
                "sexta",
                createGame("south korea", "12:00", "portugal") +
                createGame("ghana", "12:00", "uruguay") +
                createGame("serbia", "16:00", "switzerland") +
                createGame("cameroon", "16:00", "brazil")
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