class Ucenik{
    constructor(ime, prezime, rezred, predmet, ocena){
        this.ime=ime;
        this.prezime=prezime;
        this.rezred=rezred;
        this.predmet=[];
        this.ocena=[]
        predmet.forEach(e => {
            this.predmet.push(e)
        });
        ocena.forEach(e=>{
            this.ocena.push(e)
        });
    }

    render(id){
        const perent = document.getElementById(id)
        let prikazOcene=""
        for(let i=0; i<this.predmet.length; i++){
            prikazOcene+=`${this.predmet[i]}: ${this.ocena[i]} <br>`
        }

        let t=""
        t+=`
        <div class="cointener">
            <p> ${this.ime}</p>
            <p> ${this.prezime}</p>
            <p> ${prikazOcene}</p>
            <p> </p>

        </div>
        
        `
        perent.innerHTML=t
    }
}

let a = new Ucenik("ANA", "Mijaljevic", 3, ["PIA","ASP"], [6,6],)
a.render("prvi")

