
const game = new Ball()

setInterval(() => {


    game.collisionCheckerBall()
    game.runForestRun()
    game.weAreTheChampions()

}, 45)


window.addEventListener('keypress', (e) => {

    game.collisionCheckerBoard()

    e.key === 'd' ? document.querySelector('.board').style.left = `${game.boardX+=20}px` : ''
    e.key === 'a' ? document.querySelector('.board').style.left = `${game.boardX+=-20}px` : ''
    console.log(game.boardX)

})