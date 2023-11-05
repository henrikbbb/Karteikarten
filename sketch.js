let buttonNeueKarte
let karten
let checkbox = []

function setup() {
    noCanvas()

    let divCheckbox = createDiv()
    divCheckbox.id('divCheckbox')

    let divKarte = createDiv()
    divKarte.id('divKarte')

    let divButton = createDiv()
    divButton.id('divButton')


    karten = []

    setupKarten()

    let themen = new Set()
    for (let karte of karten) {
        themen.add(karte.thema)
    }   
    for (let thema of themen.keys()) {
        checkbox[thema] = createCheckbox(thema)
        checkbox[thema].parent(divCheckbox)
    }

    let buttonStart = createButton('Start')
    buttonStart.id('buttonNeueKarte')
    buttonStart.parent(divButton)
    buttonStart.mousePressed(() => {
        for (let i = karten.length-1; i >= 0; i--) {
            let karte = karten[i]
            let thema = karte.thema
            if (checkbox[thema].checked() == false) {
                let index = karten.indexOf(karte)
                karten.splice(index, 1)
            }
        }

        buttonStart.remove()
        for (let thema of themen) {
            checkbox[thema].remove()
        }

        buttonNeueKarte = createButton('neue Karte')
        buttonNeueKarte.id('buttonNeueKarte')
        buttonNeueKarte.parent(divButton)
        buttonNeueKarte.mousePressed(() => {
            loadKarte()
        })

        if (karten.length > 0) {
            loadKarte()
        } else {
            buttonNeueKarte.remove()
        }

    })
}

function loadKarte() {
    let index = int(random(karten.length))
    let karte = karten[index]
    karten.splice(index, 1)
    setupKarte(karte)

    if (karten.length == 0) {
        buttonNeueKarte.remove()
    }
}

function getRandomPastelColor() {
    const h = random(360)
    return `hsl(${h}deg, 100%, 90%)`;
}

function setupKarte(karte) {
    let divKarte = select('#divKarte')
    divKarte.html('')
    let color = getRandomPastelColor() 
    divKarte.style('background-color', color)

    
    let title = createElement('h1')
    title.html('Aufgabe')
    title.parent(divKarte)

    let content = createP(karte.aufgabe)
    content.parent(divKarte)

    let buttonZeigeLösung = createButton('zeige Lösung')
    buttonZeigeLösung.id('buttonZeigeLösung')
    buttonZeigeLösung.parent(divKarte)
    buttonZeigeLösung.mousePressed(() => {
        let title = createElement('h1')
        title.html('Lösung')
        title.parent(divKarte)

        let content = createP(karte.lösung)
        content.parent(divKarte)

        buttonZeigeLösung.remove()

        MathJax.typeset()
    })

    MathJax.typeset()
}


class Karte {
    constructor(thema, aufgabe, lösung, hilfe=undefined) {
        this.thema = thema
        this.aufgabe = aufgabe
        this.lösung = lösung
        this.hilfe = hilfe
    }
}