domHelp = {
    addElement : function(parentNode, element){
        var tmp = document.createElement(element);
        for(var i=2; i<arguments.length; i+=1){
            tmp.setAttribute(arguments[i].name, arguments[i].value);
        }
        parentNode.appendChild(tmp);
        return tmp;
    },
    addText : function(parentNode, text){
        var tmp = document.createTextNode(text);
        parentNode.appendChild(tmp);
        return tmp;
    }
}

application = {};
application.Fields = function (conteneur, name, _parent, type, parameters){
    if(!conteneur){
        return;
    }
    var _name = name;
    var parent = _parent;
    var newLine = domHelp.addElement(parent, "p");

    var label = domHelp.addElement(newLine, "span");
    var labelText = domHelp.addText(label,(parameters.label?parameters.label:""));
    //ttt = labelText;

    var textField = domHelp.addElement(newLine, "input", {name : "type", value : type});
    textField.setAttribute("name", name);
    if(parameters.hint)
        textField.setAttribute("placeholder", parameters.hint);
    if(parameters.value)
        textField.setAttribute("value", parameters.value);

    this.__defineGetter__("label", function(){return labelText.data;});
    this.__defineSetter__("label", function(value){return labelText.data = value;});
    this.__defineGetter__("hint", function(){return textField.getAttribute("placeholder")});
    this.__defineSetter__("hint", function(value){return textField.setAttribute("placeholder", value)});
    this.__defineGetter__("name", function(){return _name;});
    this.__defineSetter__("name",
        (function(value) {
            delete conteneur.fields[_name];
            _name = value;
            conteneur.fields[_name] = this;
        }).bind(this)
    );
}

application.Fields.prototype = {
}

application.TextField = function (conteneur, name, _parent, parameters){
    application.Fields.call(this, conteneur, name, _parent, "text", parameters)
}
application.TextField.prototype = new application.Fields;

application.PasswordField = function (conteneur, name, _parent, parameters){
    application.Fields.call(this, conteneur, name, _parent, "password", parameters)
}
application.PasswordField.prototype = new application.Fields;

application.RadioField = function (conteneur, name, _parent, parameters){
    application.Fields.call(this, conteneur, name, _parent, "radio", parameters)
}
application.RadioField.prototype = new application.Fields;

application.Screen = function(){
    this.body=document.getElementsByTagName("body").item(0);
    for (var i=0;this.body.childNodes.length;i++){
        this.body.removeChild(this.body.childNodes.item(0));
    }
    this.fields={};
}
application.Screen.prototype.addTitle = function(text){
    var title = domHelp.addElement(this.body, "div");
    domHelp.addText(title, text);
}
application.Screen.prototype.setTitleStyle = function(){
    var titre=document.getElementsByTagName("div").item(0);
    titre.setAttribute("style", "width: 100%; margin: 0px; padding-top: 10px; padding-bottom: 10px; background-color:#2B5278; top: 0px; left: 0px; text-align: center; font-size: 18px; font-weight: bold; color: white");
}
application.Screen.prototype.addTextField = function(name, parameters){
    this.fields[name] = new application.TextField(this, name, this.body, parameters);
}

application.Screen.prototype.addPasswordField = function(name, parameters){
    this.fields[name] = new application.PasswordField(this, name, this.body, parameters);
}

application.Screen.prototype.addRadioField = function(name, parameters){
    var label = domHelp.addElement(this.body, "span");
    domHelp.addText(label, (parameters.label?parameters.label:""))
    for(var i=0; i<parameters.choices.length; i+=1){
        var para = {"label" : parameters.choices[i], "value" : parameters.choices[i]};
        this.fields[name] = new application.RadioField(this, name, this.body, para);
    }
}

application.Screen.prototype.addRadioField = function(name, parameters){
    var label = domHelp.addElement(this.body, "span");
    domHelp.addText(label, (parameters.label?parameters.label:""))
    for(var i=0; i<parameters.choices.length; i+=1){
        var para = {"label" : parameters.choices[i], "value" : parameters.choices[i]};
        this.fields[name] = new application.RadioField(this, name, this.body, para);
    }
}

window.onload = function(){
    var screen2 = new application.Screen(); // L1
    screen2.addTitle("First Screen"); // L2
    screen2.setTitleStyle();
    screen2.addTextField("nom", { label : "Nom :", hint : "Votre nom" });
    screen2.fields.nom.label="Name :";
    screen2.fields.nom.hint="Your name";
    screen2.addTextField("prenom", { label : "Prenom :", hint : "Votre prénom" });
    screen2.fields.prenom.label="FirstName :";
    screen2.fields.prenom.name="prenom2";
    screen2.fields.prenom2.hint="Your first name";
    screen2.addPasswordField("mdp", { label : "Mot de passe :", hint : "Mot de passe" });
    screen2.addRadioField("situation", { label : "Situation :", choices :["marié(e)", "pacsé(e)", "célibataire"]});
}
