var intitules_colonnes = prompt("Colonnes : entrer une série de nombres séparés par des virgules:", "2,4,6,8,10,12,19");
var intitules_lignes = prompt("Lignes : entrer une série de nombres séparés par des virgules:", "3,6,9,12,15,18,21");
var colonnes = intitules_colonnes.split(",");
var lignes = intitules_lignes.split(",");
document.write("<table class='multiplication'>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td class='intitule'>"+colonnes.join("<td class='intitule'>")+"</td>");
document.write("</tr>");
for(var i=0; i<lignes.length; i++){
	document.write("<tr>");
	document.write("<td class='intitule'>");
	document.write(lignes[i]);
	document.write("</td>");
	for(var j=0; j<colonnes.length; j++){
		var res = lignes[i]*colonnes[j];
		document.write("<td class='valeur'>");
		if(res % 10 == 0){
			document.write(new String(res).bold());
		}
		else if(res > 100){
			document.write(new String(res).strike());
		}
		else{
			document.write(res);
		}
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");