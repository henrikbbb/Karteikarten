let buttonNeueKarte
let karten

function setup() {
    noCanvas()

    karten = []
    karten.push(new Karte('Forme die Gleichung in die Normalform um. \\[(x-5) \\cdot (x+5) = 0\\]', '\\(x^2-25=0\\)'))
    karten.push(new Karte('Forme die Gleichung in die Normalform um. \\[(x-3) \\cdot (x-5) = 0\\]', '\\(x^2-8x+15=0\\)'))
    karten.push(new Karte('Forme die Gleichung in die Normalform um. \\[(x-1) \\cdot (x+2) = 0\\]', '\\(x^2+x-2=0\\)'))
    karten.push(new Karte('Forme die Gleichung in die Normalform um. \\[(x-3) \\cdot (x+2) = 0\\]', '\\(x^2-x-6=0\\)'))
    karten.push(new Karte('Forme die Gleichung in die Normalform um. \\[(x-2) \\cdot (x+8) = 0\\]', '\\(x^2+6x-16=0\\)'))

    karten.push(new Karte('Forme die Funktion in die Normalform um. \\[f(x) = 5 \\cdot (x+2) \\cdot (x+5)\\]', '\\(f(x)=5x^2+35x+50\\)'))
    karten.push(new Karte('Forme die Funktion in die Normalform um. \\[f(x) = 2 \\cdot (x+1) \\cdot (x+3)\\]', '\\(f(x)=2x^2+8x+6\\)'))

    karten.push(new Karte('Forme die Gleichung in die faktorisierte Form um. \\[3x^2+6x-45=0\\]', '\\[3 \\cdot (x+5) \\cdot (x-3)\\]'))
    karten.push(new Karte('Forme die Gleichung in die faktorisierte Form um. \\[x^2-2x+1=0\\]', '\\[(x-1) \\cdot (x-1) = (x-1)^2 = 0\\]'))

    karten.push(new Karte('Forme die Funktion in die faktorisierte Form um. \\[f(x)=(x-1)^2+4\\]', '\\[f(x)=(x+1)\\cdot(x-3)\\]'))

    karten.push(new Karte('Gib eine Gleichung in der Form \\(x^2+px+q=0\\) mit der Lösungsmenge \\(L=\\{7;9\\}\\) an.', '\\(x^2-16x+63=0\\)'))
    karten.push(new Karte('Gib eine Gleichung in der Form \\(x^2+px+q=0\\) mit der Lösungsmenge \\(L=\\{5;6\\}\\) an.', '\\(x^2-11x+30=0\\)'))
    karten.push(new Karte('Gib eine Gleichung in der Form \\(x^2+px+q=0\\) mit der Lösungsmenge \\(L=\\{-8;-3\\}\\) an.', '\\(x^2+11x+24=0\\)'))

    karten.push(new Karte('Gib eine Gleichung in der Normalform mit der Lösungsmenge \\(L=\\{-2;2\\}\\) an.', '\\(x^2-4=0\\)'))
    karten.push(new Karte('Gib eine Gleichung in der Normalform mit der Lösungsmenge \\(L=\\{0;5\\}\\) an.', '\\(x^2-5x=0\\)'))
    karten.push(new Karte('Gib eine Gleichung in der Normalform mit der Lösungsmenge \\(L=\\{-2;0\\}\\) an.', '\\(x^2+2x=0\\)'))

    karten.push(new Karte('Gib eine Gleichung in der faktorisierten Form mit der Lösungsmenge \\(L=\\{-3;1\\}\\) an.', '\\((x+3)\\cdot(x-1)=0\\)'))
    karten.push(new Karte('Gib eine quadratische Gleichung in der faktorisierten Form mit der Lösungsmenge \\(L=\\{4\\}\\) an.', '\\((x-4)^2=0\\)'))

    karten.push(new Karte('Zerlege in Linearfaktoren und bestimme die Lösungsmenge. \\[2x^2-18x+28=0\\]', '\\(L=\\{2;7\\}\\)'))
    karten.push(new Karte('Zerlege in Linearfaktoren und bestimme die Lösungsmenge. \\[\\frac{1}{2}x^2+3x+4=0\\]', '\\(L=\\{-4;-2\\}\\)'))

    karten.push(new Karte('Bestimme die Lösungsmenge. \\[x^2-6x=0\\]', '\\(L=\\{0;6\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[x^2-9=0\\]', '\\(L=\\{-3;3\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[x^2=-3x\\]', '\\(L=\\{-3;0\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[x^2=49\\]', '\\(L=\\{-7;7\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[2x^2=-8x\\]', '\\(L=\\{-4;0\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[3x^2=48\\]', '\\(L=\\{-4;4\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[3x^2=-6\\]', '\\(L=\\{\\}\\)'))
    karten.push(new Karte('Bestimme die Lösungsmenge. \\[4x^2+5x=3x^2\\]', '\\(L=\\{-5;0\\}\\)'))

    karten.push(new Karte('Prüfe, ob die beiden Ereignisse A und B stochastisch unabhängig sind. \\begin{array} {|r|r|}\\hline  & A & \\overline{A} & Summe \\\\ \\hline B & 0,3 & 0,4 & 0,7 \\\\ \\hline \\overline{B} & 0,1 & 0,2 & 0,3 \\\\ \\hline Summe & 0,4 & 0,6 & 1 \\\\ \\hline  \\end{array}', 'Hier gilt \\(P(A)\\cdot P(B)\\neq P(A\\cap B)\\), also sind die Ereignisse abhängig.'))
    karten.push(new Karte('Prüfe, ob die beiden Ereignisse A und B stochastisch unabhängig sind. \\begin{array} {|r|r|}\\hline  & A & \\overline{A} & Summe \\\\ \\hline B & 0,1 & 0,15 & 0,25 \\\\ \\hline \\overline{B} & 0,3 & 0,45 & 0,75 \\\\ \\hline Summe & 0,4 & 0,6 & 1 \\\\ \\hline  \\end{array}', 'Hier gilt \\(P(A)\\cdot P(B) = P(A\\cap B)\\), also sind die Ereignisse unabhängig.'))
    
    karten.push(new Karte('Berechne \\(P_A(B)\\). \\begin{array} {|r|r|}\\hline  & A & \\overline{A} & Summe \\\\ \\hline B & 0,2 & 0,4 & 0,6 \\\\ \\hline \\overline{B} & 0,3 & 0,1 & 0,4 \\\\ \\hline Summe & 0,5 & 0,5 & 1 \\\\ \\hline  \\end{array}', '\\(P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0,2}{0,5} = 0,4\\)'))

    karten.push(new Karte('Erstelle die zugehörige Vierfeldertafel. \\[P(A)=0,5\\] \\[P(\\overline{B})=0,7\\] \\[P(\\overline{A} \\cap B) = 0,1\\]', '\\begin{array} {|r|r|}\\hline  & A & \\overline{A} & Summe \\\\ \\hline B & 0,2 & 0,1 & 0,3 \\\\ \\hline \\overline{B} & 0,3 & 0,4 & 0,7 \\\\ \\hline Summe & 0,5 & 0,5 & 1 \\\\ \\hline  \\end{array}'))

    let divButton = select('#divButton')
    buttonNeueKarte = createButton('neue Karte')
    buttonNeueKarte.id('buttonNeueKarte')
    buttonNeueKarte.parent(divButton)
    buttonNeueKarte.mousePressed(() => {
        loadKarte()
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
    constructor(aufgabe, lösung) {
        this.aufgabe = aufgabe
        this.lösung = lösung
    }
}