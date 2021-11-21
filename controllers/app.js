$(document).ready(function () {
 
  function listarTodo(){
    $.ajax({
      url: "../controllers/BD/listarProductosIndex.php",
      type: "GET",
      success: function (response) {
        let productos = JSON.parse(response);
        let plantilla = "";
        console.log(productos);
        productos.forEach((producto) => {
          plantilla += `
                   <form method="POST" action = "./detalleProducto.html" class="formDetalle">
          <article class="articulo">
              <img src="${producto.imagen}" alt="esperanding">
              <div class="nombre"> $ ${producto.nombre} </div>
              <div class="precio"> $ ${producto.precio} </div>
          </article>
        </form> `;
        });
        $("#mainIndex").html(plantilla);
      },
    });
  
  }


  listarTodo();

  $.ajax({
    url: "../controllers/BD/listarProductosIndex.php",
    type: "GET",
    success: function (response) {
      let productos = JSON.parse(response);
      let plantilla = "";
      console.log(productos);
      productos.forEach((producto) => {
        plantilla += `
                 <form method="POST" action = "./detalleProducto.html" class="formDetalle">
        <article class="articulo">
            <img src="${producto.imagen}" alt="esperanding">
            <div class="nombre"> $ ${producto.nombre} </div>
            <div class="precio"> $ ${producto.precio} </div>
        </article>
      </form> `;
      });
      $("#mainIndex").html(plantilla);
    },
  });



















console.log("antes de empesar");
  $('#buscar').keyup(function(e){
  
    console.log("Empece");
    if($('#buscar').val()){
      if(!($('#buscar').val()==="")){
      let busca=$('#buscar').val();
      $.ajax({
        url:'../controllers/BD/buscar.php',
        type: 'POST',
        data: {busca},
        success: function(response){
          console.log(response);
          let obj=JSON.parse(response);
            let template='';
            obj.forEach((objs)=>{
              template+= `
              <form method="POST" action = "./detalleProducto.html" class="formDetalle">
     <article class="articulo">
         <img src="${objs.imagen}" alt="esperanding">
         <div class="nombre"> $ ${objs.nombre} </div>
         <div class="precio"> $ ${objs.precio} </div>
     </article>
   </form> `;
            });
            $('#mainIndex').html(template);
          }
      })
    }
  }else{
    listarTodo();
  }
    });

    
 
});
