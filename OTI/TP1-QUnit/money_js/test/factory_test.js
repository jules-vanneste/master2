module("factory", {
//	setup:function(){alert("setup factory individual test");},
//	teardown:function(){alert("teardown factory individual test");}
});

test("test construct MoneyFactory",2,function()
{
	var moneyFactory = new factory.MoneyFactory();
	var money = moneyFactory.createMoney({
        moneyType : "euro",
        v : 1
	});

	ok(money.v,"valeur = 1");
	equal(money.curr,"EUR","currency = EUR");
}
);


test("test accesseurs", 2, function()
{
    var moneyFactory = new factory.MoneyFactory();
    var money = moneyFactory.createMoney({
        moneyType : "euro",
        v : 1
    });

	ok(money.getValue()==1,"valeur = 1");
	equal(money.getCurrency(),"EUR","currency = EUR");
}
);
	

test("test equals", 4, function()
{
    var moneyFactory = new factory.MoneyFactory();

    var m1EUR = moneyFactory.createMoney({
        moneyType : "eur",
        v : 1
    });
    var m1eur = moneyFactory.createMoney({
        moneyType : "EUR",
        v : 1
    });
    var m1CHF = moneyFactory.createMoney({
        moneyType : "CHF",
        v : 1
    });
    var m10eur = moneyFactory.createMoney({
        moneyType : "eur",
        v : 10
    });

	ok(m1EUR.equals(m1EUR),"1 EUR égal à 1 EUR");
	ok(m1EUR.equals(m1eur),"1 EUR égal à 1 eur");
	ok(!m1EUR.equals(m1CHF),"1 EUR diff de 1 CHF");
	ok(!m1EUR.equals(m10eur),"1 EUR diff de 10 eur");
}
);


test("test exception", 1, function()
{
    var moneyFactory = new factory.MoneyFactory();
    throws(function() {var m1BLA = moneyFactory.createMoney({moneyType : "BLABLA", v : 1});}, FactoryExc, "Unknown MoneyClass");
}
);