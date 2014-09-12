
function ecrireTableau (tableauValeursClasses, classeCssTableau) {
	
	function recupValeur(tableau) {return tableau[0];}
	
	function recupClasse(tableau) {return tableau[1];}
	
	function ecrireDebutBalise (nomBalise,classeCSS) {
		document.write("<"+nomBalise);
		if (typeof(classeCSS)!="undefined"||classeCSS!=null)
			document.write(" class='"+classeCSS+"' ");
		document.write(">");
	}
	
	function ecrireFinBalise (nomBalise) {
		document.write("</"+nomBalise+">");
	}
	
	function ecrireBalise (nomBalise,classeCSS, contenu) {
		ecrireDebutBalise(nomBalise,classeCSS);
		if (typeof(contenu)!="undefined"||contenu!=null)
			document.write(contenu);
		ecrireFinBalise(nomBalise);
	}
	
	ecrireDebutBalise("table",classeCssTableau);
	for (var indiceLigne=0;indiceLigne<tableauValeursClasses.length;indiceLigne++) {
		var ligne=tableauValeursClasses[indiceLigne];
		ecrireDebutBalise("tr");
		for (var indiceColonne=0;indiceColonne<ligne.length;indiceColonne++) {
			var cellule=ligne[indiceColonne];
			ecrireBalise("td",recupClasse(cellule),recupValeur(cellule));
		}
		ecrireFinBalise("tr");
	}
	ecrireFinBalise("table");
}

function genererTableauMultiplication (xs, ys) {
	var tableau=new Array();
	function texteSimple(texte) { return new Array(texte,null); }
	function intitule(texte) { return new Array(texte,"intitule"); }
	function valeur(texte) { return new Array(texte,"valeur"); }
	
	var ligne0=new Array(texteSimple);
	for (var indiceX=0;indiceX<xs.length;indiceX++)
		ligne0.push(intitule(xs[indiceX]));
	tableau.push(ligne0);
	
	for (var indiceY=0;indiceY<ys.length;indiceY++) {
		var ligne=new Array(intitule(ys[indiceY]));
		for (var indiceX=0;indiceX<xs.length;indiceX++) 
			ligne.push( valeur(parseInt(xs[indiceX])*parseInt(ys[indiceY])) );
		tableau.push(ligne);
	}
	return tableau;
}


var intitules_colonnes,intitules_lignes;
intitules_colonnes=prompt("Colonnes : entrer une sŽrie de nombres sŽparŽs par des virgules","2,4,6,8,10,12,19").split(",");
intitules_lignes=prompt("Lignes : entrer une sŽrie de nombres sŽparŽs par des virgules","3,6,9,12,15,18,21").split(",");
ecrireTableau(genererTableauMultiplication(intitules_colonnes,intitules_lignes),"multiplication");
