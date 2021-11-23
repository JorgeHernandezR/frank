$(document).ready(function () {
  $(document).on("click", "#botonGuardar", function () {
    let form = new FormData(document.getElementById("formAgregar"));
    $.ajax({
      url: "../controllers/BD/agregarProducto.php",
      type: "POST",
      data: form,
      processData: false,
      contentType: false,
      success: function (response) {
        alert(form.get("imagen"));
        console.log(response);
      },
    }).done(function () {
      //$("#formAgregar").trigger("reset");
    });
  });
});
