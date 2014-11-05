var myTodoApplication = {};

myTodoApplication.domElements = {};
myTodoApplication.domElements.enterTask = "#create-task";
myTodoApplication.createTask = function createTask(val){
    var task = $("<li class='task-list__item'></li>");
    var content = $("<div class='item-content'>"+val+"</div>");
    var chkbx = $("<input type='checkbox' class='done-chkbx'>");
    var button = $("<button class='suppress-btn'>⤬</button>");

    task.append(content);

    chkbx.on("change",function(){
        $(this).parent("li").toggleClass("task-list__item--done");
    });
    task.prepend(chkbx);

    button.on("click",function(){
        $(this).parent("li").remove();
    });
    task.append(button);

    $("#todo-app ul").append(task);
};

myTodoApplication.init = function init(){
    var date = new Date();
    if(date.getMinutes() < 10){
        alert("il est " + date.getHours() + "h0" + date.getMinutes());
    }
    else{
        alert("il est " + date.getHours() + "h" + date.getMinutes());
    }

    $("#create-task").on("change",function(){
        myTodoApplication.createTask($(this).val());
        $("#create-task").val("");
    });
};
