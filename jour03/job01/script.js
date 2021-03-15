$(document).ready(function(){     
    $("#button").click(function(){
        $("p").hide(1500, "linear", function(){
            alert("Titre bien caché");
        });
    });
    
    $("#b2").click(function(){
        $("p").show();
    });
});




/* CACHER UN ELEMENT */              