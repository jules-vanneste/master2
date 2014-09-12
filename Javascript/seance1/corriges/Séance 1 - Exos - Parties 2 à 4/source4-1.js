document.write("<table border=1 cellspacing=0 cellpadding=5 >");
for (var ligne=0;ligne<10;ligne++) {
	document.write("<tr>");
	for (var colonne=0;colonne<10;colonne++) {
		document.write("<td>"+ligne*colonne+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");