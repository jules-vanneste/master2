var money=function(v,curr) {
	if(v<0){
		throw new CreationMoneyNegExc(v);
	}
	if(curr.length > 3){
		throw new CreationMoneyCurrencySup3Exc(v);
	}
	this.v=v;
	this.curr=curr;
}

money.prototype.getCurrency=
        function () {
		return this.curr.toUpperCase();
	};

money.prototype.getValue=
        function () {
		return this.v;
	};

money.prototype.equals=
	function (otherM) {
		return (otherM.getValue()==this.getValue())&&(otherM.getCurrency()==this.getCurrency());
	};
        
money.prototype.toString=
	function () {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	};