var intitules_colonnes,intitules_lignes;

intitules_colonnes=prompt("Colonnes : entrer une série de nombres séparés par des virgules","2,4,6,8,10,12,19");
intitules_lignes=prompt("Lignes : entrer une série de nombres séparés par des virgules","3,6,9,12,15,18,21");

var colonnes = intitules_colonnes.split(",");
colonnes.unshift(" ");
var lignes = intitules_lignes.split(",");

document.write("<table class='multiplication' >");
document.write("<tr>");
document.write("<td>"+colonnes.join("</td><td class='intitule'>")+"</td>");
document.write("</tr>");
colonnes.shift();
for (var ligne=0;ligne<lignes.length;ligne++) {
	var value_ligne=parseInt(lignes[ligne]);
	document.write("<td class='label'>"+value_ligne+"</td>");
	for (var colonne=0;colonne<colonnes.length;colonne++) {
		var value_colonne=parseInt(colonnes[colonne]);
		var value=value_ligne*value_colonne;
		document.write("<td class='valeur'>");
		var text=value+"";
		if (value/10==parseInt(value/10))
			text=text.bold();
		else if (value>100)
			text=text.strike();
		document.write(text);
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");