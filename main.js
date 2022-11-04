function creatGame(player1, hour, player2){
    return`
    <li>
                    <img src="./Bandeiras/icon=${player1}.svg" alt="bandeira ${player1}">
                    <strong>${hour}</strong>
                    <img src="./Bandeiras/icon=${player2}.svg" alt="bandeira ${player2}">
                </li> 
    `
}
let delay = -0.4;
function creatCard(date, day, games){
    delay = delay +0.4;
    return`
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 

       creatCard("20/11", "domingo",
        creatGame('qatar', '13:00', 'ecuador'))+

       creatCard("21/11", "segunda", 
        creatGame('england', '10:00', 'iran') + 
        creatGame('senegal', '13:00', 'netherlands') +
        creatGame('united states', '16:00', 'wales')) +

       creatCard("22/11", "terça",
        creatGame('argentina', '07:00', 'saudi arabia') +
        creatGame('denmark', '10:00', 'tunisia') +
        creatGame('mexico', '13:00', 'poland') +
        creatGame('france', '16:00', 'australia'))

