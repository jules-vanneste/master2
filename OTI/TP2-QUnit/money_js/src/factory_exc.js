function FactoryExc(_moneyClass) {
	this.moneyClass=_moneyClass;
}

FactoryExc.prototype.toString=function (){
	return "Erreur création avec moneyClass: "+this.moneyClass+"";
}