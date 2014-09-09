ecriteurTableau = {
	ecrire : function(tableauValeursClasses, classeCssTableau) {
		this.ecrireDebutBalise("table", classeCssTableau);
		for ( var indiceLigne = 0; indiceLigne < tableauValeursClasses.length; indiceLigne++) {
			var ligne = tableauValeursClasses[indiceLigne];
			this.ecrireDebutBalise("tr");
			for ( var indiceColonne = 0; indiceColonne < ligne.length; indiceColonne++) {
				var cellule = ligne[indiceColonne];
				this.ecrireBalise("td", cellule.classe, cellule.valeur);
			}
			this.ecrireFinBalise("tr");
		}
		this.ecrireFinBalise("table");
	},
	ecrireDebutBalise : function(nomBalise, classeCSS) {
		document.write("<" + nomBalise);
		if (typeof (classeCSS) != "undefined" || classeCSS != null)
			document.write(" class='" + classeCSS + "' " + "");
		document.write(">");
	},

	ecrireFinBalise : function(nomBalise) {
		document.write("</" + nomBalise + ">");
	},

	ecrireBalise : function(nomBalise, classeCSS, contenu) {
		this.ecrireDebutBalise(nomBalise, classeCSS);
		if (typeof (contenu) != "undefined" || contenu != null)
			document.write(contenu);
		this.ecrireFinBalise(nomBalise);
	}
};

generateurTableauMultiplication = {
	generer : function(xs, ys) {
		var tableau = new Array();
		var ligne0 = new Array(this.texteSimple(""));
		for ( var indiceX = 0; indiceX < xs.length; indiceX++)
			ligne0.push(this.intitule(xs[indiceX]));
		tableau.push(ligne0);

		for ( var indiceY = 0; indiceY < ys.length; indiceY++) {
			var ligne = new Array(this.intitule(ys[indiceY]));
			for ( var indiceX = 0; indiceX < xs.length; indiceX++)
				ligne
						.push(this.valeur(parseInt(xs[indiceX])
								* parseInt(ys[indiceY])));
			tableau.push(ligne);
		}
		return tableau;
	},
	texteSimple : function(texte) {
		return {
			valeur : texte,
			classe : null
		};
	},
	intitule : function(texte) {
		return {
			valeur : texte,
			classe : "intitule"
		};
	},
	valeur : function(texte) {
		return {
			valeur : texte,
			classe : "valeur"
		};
	}
};

var intitules_colonnes, intitules_lignes;
intitules_colonnes = prompt(
		"Colonnes : entrer une sŽrie de nombres sŽparŽs par des virgules",
		"2,4,6,8,10,12,19").split(",");
intitules_lignes = prompt(
		"Lignes : entrer une sŽrie de nombres sŽparŽs par des virgules",
		"3,6,9,12,15,18,21").split(",");
ecriteurTableau.ecrire( generateurTableauMultiplication.generer(intitules_colonnes, intitules_lignes), "multiplication");
