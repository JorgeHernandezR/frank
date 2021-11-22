<?php
    include ("conexion.php");

if(isset($_POST["id"])){

    $id = $_POST["id"];
    $consulta = "SELECT * FROM producto WHERE id_producto='$id'";

    $resultado = mysqli_query($conexion,$consulta);

    if(!$resultado){
        die("Hubo un error al conectar con la base de datos");
    }

    $json = array();
    while($fila = mysqli_fetch_array($resultado)){
        $json[]= array(
            "id" => $fila["id_producto"],
            "nombre" => $fila["nom_producto"],
            "precio" => $fila["precio"],
            "imagen" => $fila["imagen"]
        );
    }
    
    $json_string = json_encode($json[0]);

    echo $json_string;
}
    
?>