var intitules_colonnes = prompt("Colonnes : entrer une série de nombres séparés par des virgules:", "2,4,6,8,10,12,19");
var intitules_lignes = prompt("Lignes : entrer une série de nombres séparés par des virgules:", "3,6,9,12,15,18,21");
var colonnes = intitules_colonnes.split(",");
var lignes = intitules_lignes.split(",");
document.write("<table style='border : #000088 1px dotted; border-collapse : separated' >");
document.write("<tr>");
document.write("<td></td>");
document.write("<td style='background-color : #00AAAA'>"+colonnes.join("<td style='background-color : #00AAAA'>")+"</td>");
document.write("</tr>");
for(var i=0; i<lignes.length; i++){
	document.write("<tr>");
	document.write("<td style='background-color : #00AAAA'>");
	document.write(lignes[i]);
	document.write("</td>");
	for(var j=0; j<colonnes.length; j++){
		var res = lignes[i]*colonnes[j];
		document.write("<td style='border-top : 1px solid #880000 ; border-bottom : solid 1px #008800 ; border-left : solid 1px #000088 ; border-right : solid 1px #888888 '>");
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