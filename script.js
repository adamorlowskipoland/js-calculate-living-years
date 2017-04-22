const model = {
    "inputDate" : document.getElementById('date'),
    "days" : 0,
}

const operator = {
    "countDays" : function() {
        console.log(model.inputDate.value);
        var putDate = new Date(model.inputDate.value);
        var putTime = putDate.getTime();
        var today = new Date();
        var now = today.getTime();
        var resultTime = now - putTime;
        var resultDays = Math.floor((resultTime / 86400000));
        console.log(resultDays);
    },
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            operator.countDays();
        })
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}
view.initDisplay();