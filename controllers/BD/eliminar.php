<?php
include('conexion.php');
if(isset($_POST['id'])){
    $id=$_POST['id'];
    $query="DELETE FROM producto WHERE id_producto=$id";
    $resultado=mysqli_query($conexion,$query);
    if(!$resultado){
        die('Error en la eliminación');
    }
    echo 'tarea eliminada satisfactoriamente';
}

?>