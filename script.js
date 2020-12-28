class Hero {
	constructor(name) {
		if (name == "newHero"){
			this.name = "+";
			this.link = "onclick='newHero(\"John\")'";
		} else {
			this.name = name;
			this.link = "onclick=''";
			this.skill = {
				"mining": 0,
				"cultivation": 0,
				"husbandry": 0,
				"study": 0
			}
		}
	}
}

const newHero = (name) => {
	heroesList = heroesList.concat(new Hero(name));
}

const showHeroes = (heroesList) => {
	html = '';
	
	for (let i = 0; i < heroesList.length; i++) {	
		let hero = heroesList[i];
		html += heroPanel(hero);
	}
	
	html += heroPanel(new Hero("newHero"));
	
	$("#heroes").html(html)
}

const heroPanel = (hero) => {
	
	html = '';
	
	html += "<div "
	html += "class='heroPanel'"
	html += hero.link;
	html += "><p class='heroName'>";
	html += hero.name;
	html += "</p></div>";
	
	return html
}

const pageload = () => {
	heroesList = [];
	showHeroes(heroesList);
}

window.onload = pageload;
