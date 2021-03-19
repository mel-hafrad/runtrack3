$(document).ready(function (){

  $("#form_inscription").submit(function(event) {
    
     event.preventDefault();
      
   
      let nom = $('#nom').val();
      let prenom = $('#prenom').val();
      let email = $('#email').val();
      let password = $('#password').val();
      let password2 = $('#password2').val();
      let valider = $('#btn_inscription').val();
      let erreur = 0;


     if ( password2 === '') {
       $("#p_password2").html("Veuillez confirmer votre mot de passe");
       $('#password2').css('border','1px solid red');
       erreur = 1;
     }else {
         $("#p_password2").html("");
     }

   
     if ( password === '') {
       $("#p_password").html("Veuillez entrer un mot de passe");
       $('#password').css('border','1px solid red');
       erreur = 1;
     }else {
         $("#p_password").html("");
     }

     

     if ( email === '') {
       $("#mail").html("<p> Veuillez entrer une adresse mail</p>");
       $('#email').css('border','1px solid red');
       erreur = 1;
     }
     else {
       $("#mail").html("");
     
     }
       

     if (nom === ''){
        $('#p_nom').html("Veuillez entrer votre nom")
         $('#nom').css('border','1px solid red');
         erreur = 1;
     }else {
       $('#p_nom').html("")
       
     }

     if (prenom === '') {
       $("#p_prenom").html("Veuillez entrer votre prénom");
       $('#prenom').css('border','1px solid red');
       //$('#erreur').remove("p");
       erreur = 1;
     } else {
       $("#p_prenom").html(""); 
     }
    
     if (erreur === 0) {
       
       
   
      $.ajax({
           url:"traitement.php",
           type:"post",
           data: {
               nom: nom,
               prenom: prenom,
               email: email,
               password: password,
               password2: password2,
               valider: valider,
           },

            
           
           success: (data) => {
              var retour = JSON.parse(data);
             if (retour.erreur) {
               $('#erreur').html(retour.erreur);
             }
             else {
               $('#erreur').html(retour.success);
               top.location.href="connexion.php";
             }
              
                console.log(retour);
           },
           error: (data) => {
               console.log("erreor")
           }
       })
   }
   })

   $('#form_connexion').submit(function(event){

       event.preventDefault();

       let email = $("#email").val();
       let password = $("#password").val();
       let valider = $("#btn_connexion").val();
       let erreur = 0;

       //AFFICHER ERREUR 
       if ( email === "") {
         $("#mail").html("<p> Veuillez entrer une adresse mail</p>");
         $('#email').css('border','1px solid red');
         erreur = 1;
       }
       else {
         $("#mail").html("");
       
       }

       if ( password === '') {
         $("#p_password").html("Veuillez entrer un mot de passe");
         $('#password').css('border','1px solid red');
         erreur = 1;
       }else {
           $("#p_password").html("");
       }

       if (erreur === 0){

       

       
         $.ajax({
             url: "traitementConnexion.php",
             type: "post",
             data: {
                 email: email,
                 password: password,
                 valider: valider,
             },

             success : (data) => {
                 let retour = JSON.parse(data);
                 if (retour.erreur){
                     $('#erreur').html(retour.erreur);
                 }
                 else {
                     sessionStorage.setItem('prenom', retour.prenom );
                     top.location.href="index.php";
                 }
             },
             error: (data) => {
                 console.log("erreor")
             }
         })
     }


   })

   $('#nav').css("display","none");
   if (sessionStorage.getItem("prenom")) {
       var data = sessionStorage.getItem('prenom');
       $("#paragraphe").html("Bonjour "+ data );
   }else {
       $('#nav').css("display","block");
   }
  })