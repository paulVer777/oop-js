function collisionChecker() {
    console.log('hej')
}


class Ball {

    constructor() {

        this.positionX = 0
        this.positionY = 0
        this.moveX = 10
        this.moveY = 10
        this.points = 0
        this.boardX=0
    }
    collisionChecker() {

        this.positionX > innerWidth - 50 ? this.moveX = -10 : ''
        this.positionX < 0 ? this.moveX = 10 : ''

        this.positionY > innerHeight - 50 ? this.moveY = -10 : ''
        this.positionY < 10 ? this.moveY = 10 : ''
    }
    runForestRun() {

        document.querySelector('.ball').style.left = `${this.positionX += this.moveX}px`
        document.querySelector('.ball').style.bottom = `${this.positionY += this.moveY}px`

    }
    weAreTheChampions() {
        document.querySelector('.score').textContent = this.points
        this.points += 1
    }

    engine() {

        this.collisionChecker()
        this.runForestRun()
        this.weAreTheChampions()

    }
    startEngine() {
        setInterval(this.engine, 1000)
    }
}


const game = new Ball()

setInterval(()=>{


game.collisionChecker()
game.runForestRun()
game.weAreTheChampions()

},45)


window.addEventListener('keypress', (e) => {


    e.key === 'd' ? document.querySelector('.board').style.left=`${game.boardX+=20}px` : ''
    e.key === 'a' ? document.querySelector('.board').style.left=`${game.boardX+=-20}px` : ''

    game.boardX < 20 ? game.boardX=0 : ''
    game.boardX > innerWidth-220 ? game.boardX=innerWidth-220 : ''
 
})