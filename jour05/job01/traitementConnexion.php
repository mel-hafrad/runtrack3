<?php


    if (isset($_POST['valider'])) {

        if (!empty($_POST['email']) && !empty($_POST['password'])){

            try {
                $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8','root', '');

            } catch (PDOException $e) {
                print "Erreur !: " . $e->getMessage() . "<br/>";
                die();
            }

            $requete = $pdo->prepare('SELECT * FROM utilisateurs WHERE email = ?');
            $requete->execute([$_POST['email']]);
            $resultat_login = $requete->fetch();
            // var_dump($resultat_login);

            if (password_verify ( $_POST['password'] , $resultat_login["password"] ) == true ) {
                $success["success"] = 'Connexion reussie !';
                $success["prenom"] = $resultat_login['prenom'];
                echo json_encode( $success);
            }
            else {

                $erreur["erreur"] = 'Mot de passe et/ou identifiant invalide !';
                echo json_encode( $erreur);
            }
        }
        else {
            $erreur["erreur"] = 'Les champs ne peuvent pas etre vide';
            echo json_encode( $erreur);
        }


    }

?>