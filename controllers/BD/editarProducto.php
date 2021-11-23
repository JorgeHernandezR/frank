<?php

    include('conexion.php');

    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];

    $consulta = "UPDATE producto SET nom_producto= '$nombre',descripcion = '$descripcion', precio = '$precio' WHERE id_producto = $id";
    $resultado =  mysqli_query($conexion, $consulta);
    if(!$resultado){
       
        die("Hubo un error al tratar de agregar el producto".mysqli_error($conexion));
    }else{
        if(!empty($_FILES["imagen"]["name"])){
            $archivo = $_FILES["imagen"]["tmp_name"];
            $nombreArchivo = $_FILES["imagen"]["name"];
            
            $rutaImagen = "../public/images/".$nombreArchivo;     
            $consultaArchivo = "UPDATE producto SET imagen= '$rutaImagen' WHERE id_producto = $id"; 

            $resultadoArchivo = mysqli_query($conexion,$consultaArchivo);
            if(!$resultadoArchivo){
       
                die("Hubo un error al tratar de agregar el producto".mysqli_error($conexion));
            }else{
                move_uploaded_file($archivo, "../../public/images/".$nombreArchivo);  
                echo "EL PRODUCTO FUE EDITADO CON EXITO!";
            }
            
           
            
        }else{
            echo "EL PRODUCTO FUE EDITADO CON EXITO!";
        }
    }
?>