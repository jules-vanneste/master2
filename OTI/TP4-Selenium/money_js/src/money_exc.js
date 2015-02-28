function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
	return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

function CreationMoneyNegExc(_d1) {
	this.d1=_d1;
}

CreationMoneyNegExc.prototype.toString=function (){
	return "Money < 0: "+this.d1+"";
}

function CreationMoneyCurrencySup3Exc(_d1) {
	this.d1=_d1;
}

CreationMoneyCurrencySup3Exc.prototype.toString=function (){
	return "Currency Superieur a 3 caracteres : "+this.d1+"";
}

function ResultatNegatifExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

ResultatNegatifExc.prototype.toString=function (){
	return "Resultat Negatif : "+this.d1+" - "+this.d2;
}

function DivisionPar0Exc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DivisionPar0Exc.prototype.toString=function (){
	return "Division par 0 : "+this.d1+" / "+this.d2;
}