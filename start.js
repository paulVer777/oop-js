const game = new Ball()

const serial=setInterval(() => {


    game.collisionCheckerBall()
    game.runForestRun()
    game.weAreTheChampions()

}, 45)



window.addEventListener('keypress', (e) => {

    game.collisionCheckerBoard()

    e.key === 'd' ? document.querySelector('.board').style.left = `${game.boardX+=20}px` : ''
    e.key === 'a' ? document.querySelector('.board').style.left = `${game.boardX+=-20}px` : ''


})

document.querySelector('.up').addEventListener('click', (e) => {
   
    game.difficultyLevelUp()
    document.querySelector('.difficulty-line').style.width = `${game.speed}rem`
    
})

document.querySelector('.down').addEventListener('click', (e) => {
   game.difficultyLevelDown()
    document.querySelector('.difficulty-line').style.width = `${game.speed}rem`
    
})