class Hero {
  constructor(name) {
    this.name = name;
    this.skill = {
		"mining": 0,
		"cultivation": 0,
		"husbandry": 0,
		"study": 0};
  }
}

const showHeroes = (heroesList) => {
	html = '';
	
	for (let i = 0; i < heroesList.length; i++) {	
		let hero = heroesList[i];
		console.log(heroPanel(hero));
	}
	
	html += "<span style='width: 100px'>";
	html += '+';
	html += "</span>";
	
	$("#heroes").html(html)
}

const heroPanel = (hero) => {
	html = '';
	
	html += "<span style='width: 100px'>";
	html += hero.name;
	html += "</span>";
	
	return html
}

const pageload = () => {
	var heroesList = [];
	
}

window.onload = pageload;
