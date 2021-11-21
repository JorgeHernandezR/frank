<?php

include('conexion.php');
$buscar=$_POST['busca'];

if(!empty($buscar)){
    $query="SELECT * FROM producto WHERE nom_producto LIKE '$buscar%'";
    $result=mysqli_query($conexion,$query);
    if(!$result){
        die('Error'.mysqli_error($conexion));
    }

    $json = array();
    while($fila = mysqli_fetch_array($result)){
        $json[]= array(
            "id" => $fila["id_producto"],
            "nombre" => $fila["nom_producto"],
            "precio" => $fila["precio"],
            "imagen" => $fila["imagen"]
        );
    }
    
    $json_string = json_encode($json);

    echo $json_string;
}

?>