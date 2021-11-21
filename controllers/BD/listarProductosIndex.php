<?php
    include ("conexion.php");

    $consulta = "SELECT * FROM producto";

    $resultado = mysqli_query($conexion,$consulta);

    if(!$resultado){
        die("Hubo un error al conectar con la base de datos".mysqli_error($resultado));
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
    
    $json_string = json_encode($json);

    echo $json_string;
?>