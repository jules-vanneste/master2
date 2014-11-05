module("moneyOps", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

test("test simple add", 2, function()
{
	var m1=new money(1,"EUR");
    var m2=new money(2,"EUR");
    var m3=new money(3,"EUR");
        
	ok(m3.equals(MoneyOps.add(m1,m2)),"3e = 1e+2e");
	deepEqual(m3,MoneyOps.add(m1,m2),"3e = 1e+2e deepEqual");
}
);
	

test("test multi devise add", 1, function()
{
	var m1=new money(1,"EUR");
    var m2=new money(2,"CHF"); 
	throws(function() {var m3=MoneyOps.add(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);


test("test simple sub", 2, function()
{
	var m1=new money(2,"EUR");
    var m2=new money(1,"EUR");
    var m3=new money(1,"EUR");
        
	ok(m3.equals(MoneyOps.sub(m1,m2)),"1e = 2e-1e");
	deepEqual(m3,MoneyOps.sub(m1,m2),"1e = 2e-1e deepEqual");
}
);
	

test("test multi devise sub", 1, function()
{
	var m1=new money(2,"EUR");
    var m2=new money(1,"CHF"); 
	throws(function() {var m3=MoneyOps.sub(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);

test("test res negatif sub", 1, function()
{
	var m1=new money(1,"EUR");
    var m2=new money(2,"EUR"); 
	throws(function() {var m3=MoneyOps.sub(m1,m2)}, ResultatNegatifExc, "Resultat sub negatif !");
}
);

test("test simple mult", 2, function()
{
	var m1=new money(2,"EUR");
    var m2=new money(3,"EUR");
    var m3=new money(6,"EUR");
        
	ok(m3.equals(MoneyOps.mult(m1,m2)),"6e = 2e*3e");
	deepEqual(m3,MoneyOps.mult(m1,m2),"6e = 2e*3e deepEqual");
}
);
	

test("test multi devise mult", 1, function()
{
	var m1=new money(2,"EUR");
    var m2=new money(1,"CHF"); 
	throws(function() {var m3=MoneyOps.mult(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);

test("test simple div", 2, function()
{
	var m1=new money(6,"EUR");
    var m2=new money(2,"EUR");
    var m3=new money(3,"EUR");
        
	ok(m3.equals(MoneyOps.div(m1,m2)),"3e = 6e/2e");
	deepEqual(m3,MoneyOps.div(m1,m2),"3e = 6e/2e deepEqual");
}
);
	

test("test multi devise div", 1, function()
{
	var m1=new money(2,"EUR");
    var m2=new money(1,"CHF"); 
	throws(function() {var m3=MoneyOps.div(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);

test("test div par 0", 1, function()
{
	var m1=new money(3,"EUR");
    var m2=new money(0,"EUR");
	throws(function() {var m3=MoneyOps.div(m1,m2)}, DivisionPar0Exc, "Division par 0");
}
);