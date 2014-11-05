var factory = function () {}

factory.MoneyFactory = function() { };
factory.MoneyFactory.prototype.v = 0;
factory.MoneyFactory.prototype.curr = "";
factory.MoneyFactory.prototype.createMoney = function (options) {
	switch(options.moneyType){
		case "euro":
        case "eur":
        case "EURO":
        case "EUR":
			this.moneyClass = factory.Euro;
			break;
		case "dollar":
		case "usd":
		case "DOLLAR":
		case "USD":
			this.moneyClass = factory.Dollar;
			break;
		case "livre":
		case "gbp":
		case "LIVRE":
		case "GBP":
			this.moneyClass = factory.LivreSterling;
			break;
		case "yen":
        case "chf" :
        case "yen":
        case "CHF" :
			this.moneyClass = factory.Yen;
			break;
        default :
            throw new FactoryExc(options.moneyType);
            break;
	}
	return new this.moneyClass(options);
};

factory.Euro = function(options){
    return new money(options.v, "EUR");
}

factory.Dollar = function(options){
    return new money(options.v, "USD");
}

factory.LivreSterling = function(options){
    return new money(options.v, "GBP");
}

factory.Yen = function(options){
    return new money(options.v, "YEN");
}