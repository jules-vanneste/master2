document.write("<table style='border : #000088 1px dotted; border-collapse : separated' >");
for (var ligne=0;ligne<10;ligne++) {
	document.write("<tr>");
	for (var colonne=0;colonne<10;colonne++) {
		document.write("<td style='border-top : 1px solid #880000 ; border-bottom : solid 1px #008800 ; border-left : solid 1px #000088 ; border-right : solid 1px #888888 '>"+ligne*colonne+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");