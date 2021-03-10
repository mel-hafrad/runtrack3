var keylogger = document.getElementById('keylogger');

window.addEventListener('keydown', function(event){
    var key = event.key; //définis la variable key pour la value de keylogger
    keylogger.value += key;
})