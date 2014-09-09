document.write("<table style='border : #000088 1px dotted; border-collapse : separated' >");
for(var i=1; i<10; i++){
	document.write("<tr>");
	for(var j=1; j<10; j++){
		document.write("<td style='border-top : 1px solid #880000 ; border-bottom : solid 1px #008800 ; border-left : solid 1px #000088 ; border-right : solid 1px #888888 '>");
		document.write(j*i);
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");