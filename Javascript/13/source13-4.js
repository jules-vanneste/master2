/**
 * 
 */

html = {
	getBody : function() { return document.getElementsByTagName('body')[0]; },
	ajouterBalise : function(baliseMere, baliseFille)  {
		baliseMere.appendChild(baliseFille);
	},
	creerBalise : function(nomBalise) {
		var b = document.createElement(nomBalise);
		
		for(var i = 1; i < arguments.length; i+=2) 
			if(arguments[i+1] != undefined)
				b.setAttribute(arguments[i], arguments[i+1]);
		
		return b;
	},
	ajouterTexte : function(balise, texte) {
		balise.innerHTML = texte;
	}
};

table = {
	creer : function(tableauValeursClasses, classeCssTableau) {
		var table = html.creerBalise('table', 'class', classeCssTableau);
		for(var i = 0; i < tableauValeursClasses.length; i++) {
			var tr = html.creerBalise('tr');
			for(var j = 0; j < tableauValeursClasses[i].length; j++) {
				var td = html.creerBalise('td', 'class', tableauValeursClasses[i][j].classeCSS);
				html.ajouterTexte(td, tableauValeursClasses[i][j].valeur);
				
				html.ajouterBalise(tr, td);
			}
			html.ajouterBalise(table, tr);
		}
		
		return table;
	} 
};

var generateurTableauMultiplication = {
	generer : function(xs, ys) {
		var res = new Array();

		res[0] = new Array();
		res[0][0] = this.texteSimple('X');

		for(var x = 0; x < xs.length; x++)
			res[0][x+1] = this.intitule(xs[x]);
		
		for(var x = 0; x < xs.length; x++) {
			res[x+1] = new Array();
			res[x+1][0] = this.intitule(ys[x]);
			for(var y  = 0; y < ys.length; y++) {
				res[x+1][y+1] = this.valeur(xs[x] * ys[y]);
			}
		}

		return res;
	},
	
	texteSimple : function(texte) { return {valeur: texte, classeCSS: null}; },
	intitule : function(texte) { return {valeur: texte, classeCSS: 'intitule'}; },
	valeur : function(texte) {
		var nbTxt = parseInt(texte);
		texte = "" + texte;
		if(nbTxt % 10 == 0) 
			texte = texte.bold();
		if(nbTxt > 100) 
			texte = texte.strike();

		return {valeur: texte, classeCSS: 'valeur'}; 
	}
}

function editBox(event) {
	var td = event.target;
	td.removeEventListener("click", this);
	td.removeChild(td.monText);

	td.input = html.creerBalise('input', 'type', 'text', 'value', td.monText.data, 'size' , 4);
	td.input.addEventListener("keyup", { handleEvent : keyUpInput});
	td.input.myTd=td;
	td.appendChild(td.input);
	td.input.focus();
}

function keyUpInput(event) {
	var input=event.target;
	var td=input.myTd;

	if(event.which == 13) {
			td.removeChild(td.input);
			td.appendChild(td.monText);
			td.monText.data=td.input.value;
			td.addEventListener("click", { handleEvent : editBox });
	}
}

function go() {
	var table = html.creerBalise('table', 'class', 'multiplication');
	for(var i = 1; i <= 10; i++) {
		var tr = document.createElement('tr');
		for(var j = 1; j <= 10; j++) {
			var td = html.creerBalise('td', 'class', 'valeur');
			var myText=document.createTextNode(i*j);
			td.appendChild(myText);
			td.monText=myText;
			td.addEventListener ( "click", { handleEvent : editBox}); 
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
	html.getBody().appendChild(table);
}