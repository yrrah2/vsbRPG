class Hero {
  constructor(name) {
    this.name = name;
    this.skill = {
		"mining": 0,
		"cultivation": 0,
		"husbandry": 0,
		"study": 0
    }
  }
}

const newHero = (name) => {
	heroesList = heroesList.concat(Hero(name));
}

const showHeroes = (heroesList) => {
	html = '';
	
	for (let i = 0; i < heroesList.length; i++) {	
		let hero = heroesList[i];
		html += heroPanel(hero);
	}
	
	html += heroPanel("newHero");
	
	$("#heroes").html(html)
}

const heroPanel = (hero) => {
	
	html = '';
	
	html += "<div "
	html += "style='width: 100px; height: 200px'"
	
	if (hero == "newHero"){
		html += "onclick='newHero('John')'";
		html += ">";
		html += '+';
	} else {
		html += "onclick=''";
		html += ">";
		html += hero.name;
	};
	html += "</div>";
	
	return html
}

const pageload = () => {
	heroesList = [];
	showHeroes(heroesList);
}

window.onload = pageload;
