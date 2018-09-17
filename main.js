class Ball {

    constructor() {

        this.positionX = 0
        this.positionY = 0
        this.moveX = 10
        this.moveY = 10
        this.points = 0
        this.boardX = 0
    }
    collisionCheckerBall() {

        this.positionX > innerWidth - 50 ? this.moveX = -10 : ''
        this.positionX < 0 ? this.moveX = 10 : ''

        this.positionY > innerHeight - 50 ? this.moveY = -10 : ''
        this.positionY < 10 ? this.moveY = 10 : ''


        /// this statement checks if ball collided with board, if its true it changes the Y direction of ball

        for (let i = 0; i < 200; i++) {
            if (this.positionY < 40 && this.positionX === this.boardX + i) {
                this.moveY = 10
            }
        }
       ///////////////////////////////////////////////////////////////////////////////////////////////
    }
    collisionCheckerBoard() {

        this.boardX < 20 ? this.boardX = 0 : ''
        this.boardX > innerWidth - 220 ? this.boardX = innerWidth - 220 : ''
    }
    runForestRun() {

        document.querySelector('.ball').style.left = `${this.positionX += this.moveX}px`
        document.querySelector('.ball').style.bottom = `${this.positionY += this.moveY}px`
        console.log(this.positionY)
    }
    weAreTheChampions() {
        document.querySelector('.score').textContent = this.points
        this.points += 1
    }

    engine() {

        this.collisionCheckerBall()
        this.runForestRun()
        this.weAreTheChampions()

    }
    startEngine() {
        setInterval(this.engine, 1000)
    }
}


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



for (let i = 0; i < 200; i++) {

    if (this.positionY < 20 && this.positionX === this.boardX + i) {
        this.moveY = 10

    }


}