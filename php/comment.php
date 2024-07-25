

<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');

if (!$conn) {
    $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
    $comment = mysqli_real_escape_string($conn, $data->comment);
    $id_C = mysqli_real_escape_string($conn, $data->id_C);
    $id_F = mysqli_real_escape_string($conn, $data->id_F);
    
    $date = date('Y-m-d H:i:s');
    $query = "INSERT INTO commentaires (commentaire, date, id_C, id_F) VALUES ('$comment', '$date', '$id_C', '$id_F')";

    if (mysqli_query($conn, $query)) {
        echo json_encode(array('message' => 'commentaire a été ajouté avec succès.'));
    } else {
        echo json_encode(array('message' => 'Erreur lors de l\'ajout de commentaire : ' . mysqli_error($conn)));
    }
    mysqli_close($conn);
}
?>


