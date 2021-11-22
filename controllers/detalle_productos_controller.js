
$(document).ready(function(){
    
    let id = localStorage['id'];
    localStorage.removeItem("id");
    
    $.ajax({
        url: "../controllers/BD/obtenerProducto.php",
        type: "POST",
        data: {id},
        success: function (response) {
            console.log(response);
            let producto = JSON.parse(response);
            plantilla = `<div class="principalDiv">
            <img id="imgDetalle" src="${producto.imagen}" alt="">
           
            <br>
              <div id="listaDescripcion">
                <br>
                <div class="nombre"> ${producto.nombre}</div>
                <br>
                <p class="descripcion"> ${producto.descripcion}
                </p>
              </div>
              <br>
              <div id="listaBoton">
                <div class="precio"> $ ${producto.precio} </div>
                <br>
                <button id="botonAñadir">Añadir al carrito</button>
              </div>
            </div>`

            $("#mainDetalle").html(plantilla);
        }
    })
})