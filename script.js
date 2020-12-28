class Hero {
	constructor(name) {
		if (name == "newHero"){
			this.name = "+";
			this.link = "onclick='newHero()'";
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

const newHero = () => {
	name = window.prompt('Hero name: \n\n\n');
	while (name == ''){
		name = window.prompt('! Name must not be blank ! \n\n Hero name: \n\n\n');
	}
	heroesList = heroesList.concat(new Hero(name));
	showHeroes();
}

const showHeroes = () => {
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
	showHeroes();
}

window.onload = pageload;
