do{
	var a = prompt("Saisissez un nombre multiplicateur:");
}
while(isNaN(a));
a = parseInt(a);
document.write("<table style='border : #000088 1px dotted; border-collapse : separated' >");
for(var i=1; i<10; i++){
	document.write("<tr>");
	for(var j=1; j<10; j++){
		var res = j*i*a;
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