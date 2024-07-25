
<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: DELETE');

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect('localhost', 'root', '', 'pathfinder');

if (!$conn) {
    $error_message = mysqli_connect_error();
    echo json_encode(array('message' => 'Erreur de connexion à la base de données : ' . $error_message));
} else {
  $comm = mysqli_real_escape_string($conn, $data->comm);

  // Requête pour supprimer le commentaire correspondant à l'identifiant
  $sql = "DELETE FROM commentaires WHERE commentaire='$comm'";

  if ($conn->query($sql) === TRUE) {
    header('Content-Type: application/json');
    echo json_encode(array('message' => 'Le commentaire a été supprimé avec succès.'));
  } else {
    echo "Une erreur s'est produite lors de la suppression du commentaire: " . $conn->error;
  }
  mysqli_close($conn);
}
?>

