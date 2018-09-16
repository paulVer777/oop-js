
let pozycjaPoziomo = 0
let pozycjaPionowo = 0
let krokiWBok = +10
let krokiWPionie= +10

const moveRight = () => {
    
    pozycjaPoziomo > innerWidth-50 ? krokiWBok = -10 : ''
    pozycjaPoziomo < 0 ? krokiWBok = + 10 : ''

    
    pozycjaPionowo > innerHeight - 50 ? krokiWPionie = -10 : ''
    pozycjaPionowo < 0 ? krokiWPionie = +10 : ''


    document.querySelector('.ball').style.left = `${pozycjaPoziomo+=krokiWBok}px`
    document.querySelector('.ball').style.bottom =`${pozycjaPionowo+=krokiWPionie}px`

}


setInterval(moveRight,30)