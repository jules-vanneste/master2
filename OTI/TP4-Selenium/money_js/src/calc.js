function calc() {
    this.message="";
}

calc.prototype.displayResult=function (resultDiv) {
    resultDiv.innerHTML=this.message;
};

calc.prototype.computeResult=function (form) {
    if(form.elements['c2'].value != form.elements['c1'].value){
        alert("Not the same currency");
    }
    try{
        m1=new money(parseInt(form.elements['v1'].value), form.elements['c1'].value);
        m2=new money(parseInt(form.elements['v2'].value), form.elements['c2'].value);
    }
    catch(e){
        this.message = e.toString();
    }

    if (typeof m1 !== 'undefined' && typeof m2 !== 'undefined') {
        ops=form.elements['ops'].value;
        try{
            if (ops==="ADD") {
                res=MoneyOps.add(m1,m2);
                this.message="Result : "+(res.toString())+"";

            } else if(ops==="SUB"){
                res=MoneyOps.sub(m1,m2);
                this.message="Result : "+(res.toString())+"";
            } else {
                alert("Unsupported operation");
                //this.message="Unsupported operation "+ops+"";
            }
        }catch (e) {
            this.message=e.toString();

        }
    }
};

function doComputation(form,resDiv) {
    c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
