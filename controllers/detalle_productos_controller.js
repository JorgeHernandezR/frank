
$(document).ready(function(){
    
    let id = localStorage['id'];
    
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
                <p class="descripcion"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, beatae repudiandae id quam quia quod repellat aspernatur. Dolores quasi quidem ducimus. Molestias suscipit voluptatem, sit vitae reiciendis minima explicabo ullam. 
                </p>
              </div>
              <br>
              <div id="listaBoton">
                <div class="precio"> $ ${producto.precio} </div>
                <br>
                <button id="botonAñadir">Añadir al carrito</button>
              </div>
            </div>`

            $("#mainDetalle").html

        }
    })
})