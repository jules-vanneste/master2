ecrireTableau = {
	ecrire : function(tableauValeursClasses, classeCssTableau){
		this.ecrireDebutBalise("table",classeCssTableau);
		for (var indiceLigne=0;indiceLigne<tableauValeursClasses.length;indiceLigne++) {
			var ligne=tableauValeursClasses[indiceLigne];
			this.ecrireDebutBalise("tr");
			for (var indiceColonne=0;indiceColonne<ligne.length;indiceColonne++) {
				var cellule=ligne[indiceColonne];
				this.ecrireBalise("td",this.recupClasse(cellule),this.recupValeur(cellule));
			}
			this.ecrireFinBalise("tr");
		}
		this.ecrireFinBalise("table");
	},

	ecrireDebutBalise : function(nomBalise, classeCSS){
		if (typeof(classeCSS)!="undefined"||classeCSS!=null)
			return document.write("<"+nomBalise+" class='"+classeCSS+"'>");
		else
			return document.write("<"+nomBalise+">");
	},
	
	ecrireFinBalise : function(nomBalise){
		return document.write("</"+nomBalise+">");
	},
	
	ecrireBalise : function(nomBalise, classeCSS, contenu){
		this.ecrireDebutBalise(nomBalise,classeCSS);
		if (typeof(contenu)!="undefined"||contenu!=null)
			document.write(contenu);
		this.ecrireFinBalise(nomBalise);
	},
	
	recupValeur : function(tableau){
		return tableau[0];
	},
	
	recupClasse : function(tableau){
		return tableau[1];
	}
}

genererTableauMultiplication = {
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


var intitules_colonnes,intitules_lignes;
intitules_colonnes=prompt("Colonnes : entrer une série de nombres séparés par des virgules","2,4,6,8,10,12,19").split(",");
intitules_lignes=prompt("Lignes : entrer une série de nombres séparés par des virgules","3,6,9,12,15,18,21").split(",");
ecrireTableau.ecrire(genererTableauMultiplication.generer(intitules_colonnes,intitules_lignes),"multiplication");
