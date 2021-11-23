<?php

    include('conexion.php');

    $archivo = $_FILES["imagen"]["tmp_name"];
    $nombreArchivo = $_FILES["imagen"]["name"];
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];

    $rutaImagen = "../public/images/".$nombreArchivo;

    $consulta = "INSERT INTO producto VALUES (DEFAULT, '$nombre','$descripcion','$precio','$rutaImagen')";
    echo $consulta;

    $resultado =  mysqli_query($conexion, $consulta);
    if(!$resultado){
       
        die("Hubo un error al tratar de agregar el producto".mysqli_error($conexion));
    }else{
        move_uploaded_file($archivo, "../../public/images/".$nombreArchivo);
        echo "El producto fue agregado con exito";
    }
?>