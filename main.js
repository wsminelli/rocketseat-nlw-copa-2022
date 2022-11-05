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
            ${createCard('24/11', 'quinta',
            createGame('switzerland', '07:00', 'cameroon') +
            createGame('uruguay', '10:00', 'south korea') +
            createGame('portugal', '13:00', 'ghana') +
            createGame('brazil', '16:00', 'serbia')
            )}

            ${createCard('28/11', 'segunda', 
            createGame('cameroon', '07:00', 'serbia') +
            createGame('south korea', '10:00', 'ghana') +
            createGame('switzerland', '13:00', 'brazil') +
            createGame('portugal', '16:00', 'uruguay')
            )}

            ${createCard('02/12', 'sexta',
            createGame('south korea', '07:00', 'portugal') +
            createGame('ghana', '10:00', 'uruguay') +
            createGame('serbia', '13:00', 'switzerland') + 
            createGame('brazil', '16:00', 'cameroon')
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