<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');
      
if (!$conn) {
     $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
    // Requête SQL pour récupérer tous les commentaires
    $sql = "SELECT * FROM commentaires";
    $resultat = mysqli_query($conn, $sql);

    // Vérification de la requête SQL
    if (mysqli_num_rows($resultat) > 0) {
        $commentaires = [];

        // Récupération des données de chaque commentaire
        while ($row = mysqli_fetch_assoc($resultat)) {
            $commentaire = $row["commentaire"];

            // Ajout du commentaire au tableau
            array_push($commentaires, $commentaire);
        }

        // Conversion du tableau en format JSON
        echo json_encode($commentaires);
    } else {
        echo "Aucun commentaire trouvé.";
    }

    mysqli_close($conn);
}
?>
