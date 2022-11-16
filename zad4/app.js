class OdevniPredmet {
    constructor (id, naziv, slika, tip, cena, kolekcija) {
        this.id = id
        this.naziv = naziv
        this.slika = slika 
        this.tip = tip
        this.cena = cena
        this.kolekcija = kolekcija
    }

    render(id) {
        const parent = document.getElementById(id)
        const child = document.createElement("div")
        child.classList.add("flex-container")

        let t = ""
        t += `<div><img src = "${this.slika}"></div>
              <div>
              <p> ${this.id} </p>
              <p> ${this.cena} </p>
              </div>`

        child.innerHTML = t
        parent.appendChild(child)
    }
}

class Korpa {
    constructor () {
        this.odevniPredmeti = []
    }

    add(product) {
        this.odevniPredmeti.push(product)
    }

    delete(id) {
        for(let i = 0; i < this.odevniPredmeti.length; i++) {
            if(this.odevniPredmeti[i].id === id) {
                this.odevniPredmeti.splice(i, 1);
            }
        }
    }

    renderAll(ids) {
        for(let i=0; i<this.odevniPredmeti.length; i++) {
            this.odevniPredmeti[i].render(ids[i])
        }
      
    }
}

let a =new OdevniPredmet(2, 2, "https://wallpaperset.com/w/full/e/1/1/180487.jpg", 2, 2, 2)
let b =new OdevniPredmet(3, 3, "https://wallpaperset.com/w/full/e/1/1/180487.jpg", 3, 3, 3)
let c =new OdevniPredmet(4, 4, "https://wallpaperset.com/w/full/e/1/1/180487.jpg", 4, 4, 4)
let korpa= new Korpa()
korpa.add(a)
korpa.add(b)
korpa.add(c)
korpa.odevniPredmeti.forEach(e => {
    console.log(e.id)
});



let divIds= ["prvi", "drugi", "treci"]
korpa.renderAll(divIds)
