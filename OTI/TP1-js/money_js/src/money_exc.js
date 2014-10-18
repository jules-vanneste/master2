function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+d1+" vs "+d2;
}

function ResultatNegatifExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

ResultatNegatifExc.prototype.toString=function (){
		return "Resultat Negatif : "+d1+" - "+d2;
}

function DivisionPar0Exc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DivisionPar0Exc.prototype.toString=function (){
		return "Division par 0 : "+d1+" / "+d2;
}