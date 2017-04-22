const model = {
    "inputDate" : document.getElementById('date')
}

const operator = {
    "countDays" : function() {
        // time in miliseconds put by user
        var putTime = new Date(model.inputDate.value).getTime();
        // time in miliseconds today
        var now = new Date().getTime();
        // difference in miliseconds
        var resultTime = now - putTime;
        // getting number of days from miliseconds
        var resultDays = Math.floor((resultTime / 86400000));
        // calling display with number of days
        view.putResult(resultDays);
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
    },
    "putResult" : function(result) {
        const output = document.getElementById('output');
        output.textContent = "You are currently living for " + result + " days. They all count, make your next one count too."
    }
}
view.initDisplay();