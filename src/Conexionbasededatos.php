<?php
$servername = "localhost"; //Aqui va el nombre de el server, pero Importante no se cambia y se queda como LOCALHOST
$username = "nombre_del_admin_asignado"; //Importante colocar bien el nombre si no saldra un error de NO DATA BASE CONNECTED
$password = "contraseña_segura"; // Contraseña creada para el usuario
$dbname = "nombre_de_la_base_de_datos"; // Si se coloca mal algun nombre no funciona la conexion

// Crear una conexión con MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar los datos enviados desde el formulario
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$correo = $data['correo'];

// Preparar y ejecutar la consulta SQL para insertar los datos en la base de datos
$sql = "INSERT INTO nombre_de_la_tabla (nombre, email) VALUES ('$nombre', '$correo')";
if ($conn->query($sql) === TRUE) {
    echo "Los datos se han guardado correctamente en la base de datos.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión con MySQL
$conn->close();
?>
