<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT');

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');

if (!$conn) {
    $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
    $comment = mysqli_real_escape_string($conn, $data->comment);
    $newComment = mysqli_real_escape_string($conn, $data->newComment);

    $sql = "UPDATE commentaires SET commentaire='$newComment' WHERE commentaire='$comment'";

    if (mysqli_query($conn, $sql)) {
        header('Content-Type: application/json');
        echo "Le commentaire a été mis à jour avec succès.";
    } else {
        echo "Une erreur s'est produite lors de la mise à jour du commentaire: " . $conn->error;
    }

    mysqli_close($conn);
}
?>
