class Knjiga {
    constructor(naziv, ISBNbroj, godinaIzdanje, autor, izdavac, opisKnjige, URLslike) {
        this.naziv = naziv;
        this.godinaIzdanje = godinaIzdanje;
        this.autor = autor;
        this.izdavac = izdavac;
        this.opisKnjige = opisKnjige;
        this.URLslike = URLslike;
        this.ISBNbroj = ISBNbroj;
    }

    render(ID) {
        const uzetiElement = document.getElementById(ID)

        let t = ""
        t += `
        <div class= "cointener">
            <div class= "top">
                <div class= "left"><img src="${this.URLslike}"></div>
                <div class= "right"> <h1>${this.naziv}</h1> <p>${this.opisKnjige}</p> </div>
            </div>
            <div class = "bottom">
                <p class = "lis">${this.ISBNbroj}</p>
                <p class = "lis">${this.godinaIzdanje}</p>
                <p class = "lis">${this.autor}</p>
                <p class = "lis">${this.izdavac}</p>
            </div>
        </div>
        `

        uzetiElement.innerHTML = t;
    }
}


Lorem_ipsum = new Knjiga("Lorem Ipsum", 123, 2022, "Marko Popovic", "DUNP", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "https://www.stamparija.rs/images/stories/slike/knjige-stapmarija%20proof%20beograd.jpg");

Lorem_ipsum.render("book");