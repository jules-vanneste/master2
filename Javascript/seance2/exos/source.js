application = {};
application.Fields = function (conteneur, name, _parent, type, parameters){
    var _name = name;
    var parent = _parent;
    var newLine = domHelp.addElement(parent, "p");

    var label = domHelp.addElement(newLine, "span");
    var labelText = domHelp.addText(label,(parameters.label?parameters.label:""));
    ttt = labelText;

    var textField = domHelp.addElement(newLine, "input", "type", type);
    if(parameters.hint)
        textField.setAttribute("placeholder", parameters.hint);

    this.__defineGetter__("label", function(){return labelText.data;});
    this.__defineSetter__("label", function(value){return labelText.data = value;});
    this.__defineGetter__("hint", function(){return textField.getAttribute("placeholder")...});
    this.__defineSetter__("hint", function(value){return textField.setAttribute("placeholder")...});
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
    /*titre.style.width = "100%"; titre.style.margin = "0px"; titre.style.paddingTop = "10px"; titre.style.paddingBottom = "10px"; titre.style.backgroundColor = "#2B5278"; titre.style.top = "0px"; titre.style.left = "0px"; titre.style.textAlign = "center"; titre.style.fontSize = "18px"; titre.style.fontWeight = "bold"; titre.style.color = white;*/
}
application.Screen.prototype.addTextField = function(name, parameters){
    this.fields[name] = new application.Fields(this)
    var para = domHelp.addElement(this.body, "p");
    var label = domHelp.addElement(para, "span");
    var input = domHelp.addElement(para, "input", {name : "type", value : "text"}, {name : "id", value : name}, {name : "placeholder", value : parameters.hint}, {name : "name", value : name});

    domHelp.addText(label, parameters.label);
}

domHelp = {
    addElement : function(parentNode, element){
        var tmp = document.createElement(element);
        for(i=2; i<arguments.length; i+=1){
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

window.onload = function(){
    var screen2 = new application.Screen(); // L1
    screen2.addTitle("First Screen"); // L2
    screen2.setTitleStyle();
    screen2.addTextField("nom", { label : "Nom :", hint : "Votre nom" });
    screen2.addTextField("prenom", { label : "Prenom :", hint : "Votre prénom" });
}
