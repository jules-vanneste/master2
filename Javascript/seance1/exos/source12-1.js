html = {
	getBody : function() {
		return document.getElementsByTagName("body")[0];
	},
	ajouterBalise : function(baliseMere, nomBalise) {
		var nouvelleBalise=this.creerBalise(nomBalise);
		for ( var indice = 2; indice < arguments.length; indice += 2) {
			nouvelleBalise.setAttribute(arguments[indice],
					arguments[indice + 1]);
		}
		baliseMere.appendChild(nouvelleBalise);
		return nouvelleBalise;
	},
	creerBalise : function(nomBalise) {
		var nouvelleBalise = document.createElement(nomBalise);
		for ( var indice = 1; indice < arguments.length; indice += 2) {
			nouvelleBalise.setAttribute(arguments[indice],
					arguments[indice + 1]);
		}
		return nouvelleBalise;
	},
	ajouterTexte : function(balise, texte) {
		var baliseTexte = document.createTextNode(texte);
		balise.appendChild(baliseTexte);
		return baliseTexte;
	}
};

table = {
	creer : function(tableauValeursClasses, classeCssTableau) {
		var tableau = html.creerBalise("table", "class", classeCssTableau);
		for ( var indiceLigne = 0; indiceLigne < tableauValeursClasses.length; indiceLigne++) {
			var ligne = tableauValeursClasses[indiceLigne];
			var ligneHTML = html.ajouterBalise(tableau, "tr");
			for ( var indiceColonne = 0; indiceColonne < ligne.length; indiceColonne++) {
				var cellule = ligne[indiceColonne];
			}
		}
		return tableau;
	},
};

generateurTableauMultiplication = {
	generer : function(xs, ys){
		var tableau = new Array();
		var ligne0 = new Array(this.texteSimple);
		
		for (var indiceX=0;indiceX<xs.length;indiceX++)
			ligne0.push(this.intitule(xs[indiceX]));
		tableau.push(ligne0);
		
		for (var indiceY=0;indiceY<ys.length;indiceY++) {
			var ligne=new Array(this.intitule(ys[indiceY]));
			for (var indiceX=0;indiceX<xs.length;indiceX++) 
				ligne.push(this.valeur(parseInt(xs[indiceX])*parseInt(ys[indiceY])) );
			tableau.push(ligne);
		}
		return tableau;
	},
	texteSimple : function(texte){
		return new Array(texte,null);
	},
	intitule : function(texte){
		return new Array(texte,"intitule");
	},
	valeur : function(texte){
		return new Array(texte,"valeur");
	}
}

function go() {
	var intitules_colonnes,intitules_lignes;
	intitules_colonnes=prompt("Colonnes : entrer une série de nombres séparés par des virgules","2,4,6,8,10,12,19").split(",");
	intitules_lignes=prompt("Lignes : entrer une série de nombres séparés par des virgules","3,6,9,12,15,18,21").split(",");
	html.getBody().appendChild(table.creer(generateurTableauMultiplication.generer(intitules_colonnes, intitules_lignes), "multiplication"));
}
