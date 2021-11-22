$(document).ready(function () {

  $(document).on("click","#botonGuardar", function () {
      console.log("Entre al ajax")
    $.ajax({
      url: "../controllers/BD/agregarProducto.php",
      type: "POST",
      data: {
        nombre: $("#inputNombre").val(),
        descripcion: $("#inputDescripcion").val(),
        precio: $("#inputPrecio").val()
      },
      success: function (response) {
        alert(response);
      }
    });
  });
});
