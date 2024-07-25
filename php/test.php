/*

<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');

if (!$conn) {
    $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
    $Nom = mysqli_real_escape_string($conn, $data->Nom);
    $Prenom = mysqli_real_escape_string($conn, $data->Prenom);
    $Email = mysqli_real_escape_string($conn, $data->Email);
    $Mot_De_Passe = mysqli_real_escape_string($conn, $data->Mot_De_Passe);

    // Vérifier si l'utilisateur existe déjà dans la base de données
    $sql = "SELECT * FROM client WHERE email = '$Email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo json_encode(array('message' => 'Cet utilisateur existe déjà dans la base de données.'));
    } else {
        // Vérifier si tous les champs sont remplis
        if (empty($Nom) || empty($Prenom) || empty($Email) || empty($Mot_De_Passe)) {
            echo json_encode(array('message' => 'Veuillez remplir tous les champs du formulaire.'));
        } else {
            $query = "INSERT INTO client (nom, prenom, email, mdp) 
                    VALUES ('$Nom', '$Prenom', '$Email', '$Mot_De_Passe')";

            if (mysqli_query($conn, $query)) {
                echo json_encode(array('message' => 'utilisateur a été ajouté avec succès.'));
            } else {
                echo json_encode(array('message' => 'Erreur lors de l\'ajout de l\'utilisateur : ' . mysqli_error($conn)));
            }
        }
    }

    mysqli_close($conn);
}

?>


