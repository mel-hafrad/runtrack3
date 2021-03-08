function bisextile(){
    var année = 2016;
    
    if ((année % 4 === 0 && année % 100 > 0) || (année % 400 === 0)) {
        var année = true;
    } else {
    
        var année = false;
    }
    }