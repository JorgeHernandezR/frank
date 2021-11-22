let id = "25";

$(document).ready(function () {

  function listarTodo() {
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
          <button productoId="${producto.id}" type=submit class="botonFormDetalle" style="padding : 0px ; background-color:#b7e3f7; border-color=#b7e3f7">
          <article class="articulo">
          <img src="${producto.imagen}" alt="esperanding">
         <div class="nombre"> ${producto.nombre} </div>
        <div class="precio"> $ ${producto.precio} </div>
        <div class="iconoArticulo">
        <a href="" style="color: black" class="botonEliminar"><i class="fas fa-trash-alt" style="font-size: 15px;"></i></a>
         <a href=""style="color: black"><i class="fas fa-pen" style="font-size: 15px;"></i></a>
         </div>
        </article>
        
        </button>
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
                 <form  method="POST" action = "./detalleProducto.html" class="formDetalle">
                 <button productoId="${producto.id}" type=submit class="botonFormDetalle" style="padding : 0px ; background-color:#b7e3f7; border-color=#b7e3f7">
        <article class="articulo">
            <img src="${producto.imagen}" alt="esperanding">
            <div class="nombre"> ${producto.nombre} </div>
            <div class="precio"> $ ${producto.precio} </div>
            <div class="iconoArticulo">
            <a href="" style="color: black" class="botonEliminar"><i class="fas fa-trash-alt" style="font-size: 15px;"></i></a>
            <a href=""style="color: black"><i class="fas fa-pen" style="font-size: 15px;"></i></a>
            </div>
        </article>
     
        </button>
      </form> `;
      });
      $("#mainIndex").html(plantilla);
    },
  });



















  console.log("antes de empesar");
  $('#buscar').keyup(function (e) {

    console.log("Empece");
    if($('#buscar').val()){
      if(!($('#buscar').val()==="")){
      let busca=$('#buscar').val();
      $.ajax({
        url:'../controllers/BD/buscar.php',
        type: 'POST',
        data: {busca},
        success: function(response){
          let obj=JSON.parse(response);
            let template='';
            obj.forEach((objs)=>{
              template+= `
              <form  method="POST" action = "./detalleProducto.html" class="formDetalle">
              <button productoId="${objs.id}" type="submit" class="botonFormDetalle" style="background-color:#b7e3f7; border-color:#b7e3f7; padding:0px">
     <article class="articulo">
         <img src="${objs.imagen}" alt="esperanding">
         <div class="nombre"> $ ${objs.nombre} </div>
         <div class="precio"> $ ${objs.precio} </div>
         <div class="iconoArticulo">
         <a href="" style="color: black" class="botonEliminar"><i class="fas fa-trash-alt" style="font-size: 15px;"></i></a>
         <a href=""style="color: black"><i class="fas fa-pen" style="font-size: 15px;"></i></a>
         </div>
     </article>
     </button>
   </form> `;
            });
            $('#mainIndex').html(template);
          }
        })
      }
    } else {
      listarTodo();
    }
  });

$(document).on('click','.botonEliminar',function(){
  let element =$(this)[0].parentElement.parentElement.parentElement;
  console.log(element);
 if(confirm('Estas seguro de querer eliminarlo')){
  let element =$(this)[0].parentElement.parentElement.parentElement;
   let id=$(element).attr('productoId');
   console.log(element);
   console.log(id);
   $.post('../controllers/BD/eliminar.php',{id},function(response){
     listarTodo();
   })
 }
})

   $(document).on("click", ".botonFormDetalle",function (e) {
     console.log("entre a esta madre");
    let idProducto = $(this).attr("productoId");
    setId(idProducto);
    id = idProducto;
  })

  function setId(id){
    this.id = id;
    localStorage.setItem("id", this.id);
  }

   
});


