
$(document).ready(function(){
    
    let id = localStorage['id'];
    
    $.ajax({
        url: "../controllers/BD/obtenerProducto.php",
        type: "POST",
        data: {id},
        success: function (response) {
            console.log(response);

        }
    })
})