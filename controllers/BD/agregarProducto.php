<?php

    include('conexion.php');
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];

    $consulta = "INSERT INTO producto VALUES (DEFAULT, '$nombre','$descripcion','$precio','null')";
    echo $consulta;

    $resultado =  mysqli_query($conexion, $consulta);

    if(!$resultado){
        die("Hubo un error al tratar de agregar el producto".mysqli_error($conexion));
    }else{
        echo "El producto fue agregado con exito";
    }
?>