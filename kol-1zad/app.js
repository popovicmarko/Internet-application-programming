 
class MobilniTelefon {
	constructor(
		image,
		name,
		code,
		screen,
		brand,
		backCamera,
		frontCamera,
		RAM,
		processor,
		price,
		priceBeforeDiscount
	) {
		this.image = image;
		this.name = name;
		this.code = code;
		this.screen = screen;
		this.brand = brand;
		this.backCamera = backCamera;
		this.frontCamera = frontCamera;
		this.RAM = RAM;
		this.processor = processor;
		this.price = price;
		this.priceBeforeDiscount = priceBeforeDiscount;
	}
}

class ListaTelefona {
	constructor(parentID) {
		this.parentID = parentID;
		this.phones = [];
	}

	addPhone(phone) {
		this.phones.push(phone);
	}

	render() {
		const parent = document.getElementById(this.parentID);
		parent.innerHTML = "";

		this.phones.map((phone) => {
			let div = document.createElement("div");
			div.classList.add("phone");

			div.innerHTML = `
                <img src="${phone.image}" alt="">
                <h2>${phone.name}</h2>
                <p>${phone.priceBeforeDiscount}, ${phone.price}</p>
                <p>Sifra: ${phone.code}</p>
                <p>Brend: ${phone.brand}</p>
                <p>Ekran: ${phone.screen}</p>
                <p>Zadnja Kamera: ${phone.backCamera}</p>
                <p>Prednja Kamera: ${phone.frontCamera}</p>
                <p>RAM memorija: ${phone.RAM}</p>
                <p>Procesor: ${phone.processor}</p>
            `;

			parent.appendChild(div);
		});
	}
}


const phone1 = new MobilniTelefon("https://img.gigatron.rs/img/products/large/image61c1b6048d9ee.png", "Samsung Galaxy", 156165, "5.6", "Samsung", 200, 20, 12, "Snapdragon 3 Ghz", 700, 800);
const phone2 = new MobilniTelefon("https://img.gigatron.rs/img/products/large/image61c1b6048d9ee.png", "Iphone", 156165, "5.6", "Iphone", 200, 20, 12, "Snapdragon 3 Ghz", 700, 800);
const phone3 = new MobilniTelefon("https://img.gigatron.rs/img/products/large/image61c1b6048d9ee.png", "Nokia", 156165, "5.6", "nokia", 200, 20, 12, "Snapdragon 3 Ghz", 700, 800);
const phoneList = new ListaTelefona("content");

phoneList.addPhone(phone1);
phoneList.addPhone(phone2);
phoneList.addPhone(phone3);
phoneList.render();