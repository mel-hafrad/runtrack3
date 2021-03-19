<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
    <form action="" method="POST" id="form_inscription">
        <label for="">Nom</label>
        <input type="text" name="nom" id="nom">
        <label for="">Prenom</label>
        <input type="text" name="prenom" id="prenom">
        <label for="">Mail</label>
        <input type="email" name="email" id="email">
        <label for="">Mot de passe :</label>
        <input type="password" name="password" id="password" >
        <label for="">Confirmation du mot de passe :</label>
        <input type="password" name="password2" id="password2" >
        <input type="submit" name="valider" id="btn_inscription">
    </form>
    <p id="p_prenom"></p>
    <p id="p_nom"></p>
    <p id="mail"></p>
    <p id="p_password"></p>
    <p id="p_password2"></p>
    <p id="erreur"></p>
    <script src="script.js"></script>
</body>
</html>