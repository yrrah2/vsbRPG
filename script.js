class Hero {
	constructor(name) {
		this.name = name;
		this.skill = {
			"mining": 0,
			"cultivation": 0,
			"husbandry": 0,
			"study": 0
		};
		this.task = '';
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

const selectHero = (hero) => {
	if (selectedHero != 0) {
		$("#hero_"+hero.name).css("border", "1px solid black");
		$("#hero_"+hero.name+" > .heroName").css("font-weight", "normal");
	}
	selectedHero = hero;
	$("#hero_"+hero.name).css("border", "3px solid black");
	$("#hero_"+hero.name+" > .heroName").css("font-weight", "bold");
}

const showHeroes = () => {
	html = '';
	
	for (let i = 0; i < heroesList.length; i++) {	
		let hero = heroesList[i];
		html += heroPanel(hero);
	}
	
	html += "<div class='heroPanel' id='newHero'><p class='heroName'>+</p></div>";
	
	$("#heroes").html(html)
	/$("#newHero").click(() => {newHero()});
	
	for (let i = 0; i < heroesList.length; i++) {	
		let hero = heroesList[i];
		$("#hero_"+hero.name).click(() => {selectHero(hero)});
	}
	selectHero(selectedHero);
}

const heroPanel = (hero) => {
	html = '';
	
	html += "<div ";
	html += "class='heroPanel'";
	html += "id='hero_" + hero.name + "'";
	html += "><p class='heroName'>";
	html += hero.name;
	html += "</p></div>";
	
	return html
}

const pageload = () => {
	heroesList = [];
	selectedHero = 0;
	showHeroes();
}

window.onload = pageload;
