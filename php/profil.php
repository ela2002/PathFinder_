<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');

if (!$conn) {
    $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
    $id = mysqli_real_escape_string($conn, $data->id_c);
    $Nom = mysqli_real_escape_string($conn, $data->nom);
    $Prenom = mysqli_real_escape_string($conn, $data->prenom);
    $Email = mysqli_real_escape_string($conn, $data->Email);
    $Mot_De_Passe = mysqli_real_escape_string($conn, $data->mdp);

    //$client_id = $data->id; //$user_id = $_SESSION['user_id']; // ou tout autre moyen d'obtenir l'ID de l'utilisateur connecté
    $sql = "SELECT * FROM client WHERE id_c='$id'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $sql = "UPDATE client SET nom='$Nom', prenom='$Prenom', email='$Email', mdp='$Mot_De_Passe' WHERE id_c='$id'";
        if (mysqli_query($conn, $sql)) {
            echo "Les informations du profil ont été mises à jour avec succès.";
        } else {
            echo "Erreur de mise à jour des informations du profil : " . mysqli_error($conn);
        }
    }
    mysqli_close($conn);
}
?>
