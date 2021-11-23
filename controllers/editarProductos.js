$(document).ready(function () {
    let id = localStorage["id"];
    localStorage.removeItem("id");
    console.log(id);

    $.ajax({
        url: "../controllers/BD/obtenerProducto.php",
        type: "POST",
        data: {id},
        success: function (response) {
            console.log(response);
            let producto = JSON.parse(response);
            
          $("#inputNombre").val(producto.nombre);
          $("#inputDescripcion").val(producto.descripcion);
          $("#inputPrecio").val(producto.precio);
        },
      });

    $(document).on("click", "#botonEditar", function () {
      let form = new FormData(document.getElementById("formEditar"));
      form.append("id",id);
      $.ajax({
        url: "../controllers/BD/editarProducto.php",
        type: "POST",
        data: form,
        processData: false,
        contentType: false,
        success: function (response) {
          alert(response);
        },
      }).done(function () {
        $("#formAgregar").trigger("reset");
      });
    });
  });