class Ball {

    constructor() {

        this.speed = 10
        this.positionX = 0
        this.positionY = 0
        this.moveX = this.speed
        this.moveY = this.speed
        this.points = 0
        this.boardX = 0
    }
    collisionCheckerBall() {

        this.positionX > innerWidth - 50 ? this.moveX = -this.speed : ''
        this.positionX < 0 ? this.moveX = this.speed : ''

        this.positionY > innerHeight - 50 ? this.moveY = -this.speed : ''


        if (this.positionY < 0) {

            const h1 = document.createElement('h1')
            const button = document.createElement('button')

            button.textContent = 'Try again'
            button.classList.add('btn-reload')
            button.addEventListener('click', (e) => {
                location.reload()
            })

            h1.textContent = 'Game Over'
            h1.classList.add('farewell')

            window.clearInterval(serial)
            document.body.appendChild(h1)
            document.body.appendChild(button)

        }

        /// this statement checks if ball collided with board, if its true it changes the Y direction of the ball

        for (let i = 0; i < 200; i++) {
            if (this.positionY < 40 && this.positionX === this.boardX + i) {
                this.moveY = this.speed
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

    }
    weAreTheChampions() {
        document.querySelector('.score').textContent = `Scores: ${this.points}`
        this.points += 1
    }
    difficultyLevelUp() {
        game.speed === 17 ? game.speed = 17 : game.speed++
        console.log(game.speed)
    }
    difficultyLevelDown() {
        game.speed === 5 ? game.speed = 5 : game.speed--
        console.log(game.speed)
    }
}