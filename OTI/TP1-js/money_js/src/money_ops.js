var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){
	if(m1.getCurrency() != m2.getCurrency()){
		throw new DevisesIncompatibleExc(m1, m2);
	}
	return new money(m1.getValue()+m2.getValue(),m1.getCurrency());
}

MoneyOps.sub = function(m1,m2){
	if(m1.getCurrency() != m2.getCurrency()){
		throw new DevisesIncompatibleExc(m1, m2);
	}
	if(m1.getValue() < m2.getValue()){
		throw new ResultatNegatifExc(m1, m2);
	}
	return new money(m1.getValue()-m2.getValue(),m1.getCurrency());
}

MoneyOps.mult = function(m1,m2){
	if(m1.getCurrency() != m2.getCurrency()){
		throw new DevisesIncompatibleExc(m1, m2);
	}
	return new money(m1.getValue()*m2.getValue(),m1.getCurrency());
}

MoneyOps.div = function(m1,m2){
	if(m1.getCurrency() != m2.getCurrency()){
		throw new DevisesIncompatibleExc(m1, m2);
	}
	if(m2.getValue() == 0){
		throw new DivisionPar0Exc(m1, m2);
	}
	return new money(m1.getValue()/m2.getValue(),m1.getCurrency());
}