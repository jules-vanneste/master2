var multiplicateur;
do {
	multiplicateur=prompt("Entrer un multiplicateur",2);
} while (isNaN(multiplicateur));
multiplicateur=parseInt(multiplicateur);
document.write("<table style='border : #000088 1px dotted; border-collapse : separated' >");
for (var ligne=0;ligne<10;ligne++) {
	document.write("<tr>");
	for (var colonne=0;colonne<10;colonne++) {
		document.write("<td style='border-top : 1px solid #880000 ; border-bottom : solid 1px #008800 ; border-left : solid 1px #000088 ; border-right : solid 1px #888888 '>");
		var value=multiplicateur*ligne*colonne;
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