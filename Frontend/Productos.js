window.addEventListener("load", function() {
    if (document.firstElementChild.getAttribute("page") == "Productos") {
      loadProducts();
    }
})

function loadProducts(){

  console.log("Entre");
  let xhr = new XMLHttpRequest();

  xhr.open('GET', "http://localhost:3000/api/products");
  xhr.setRequestHeader('Content-Type','application/json');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status != 200) { 
      
      cuentaDisplay.innerHTML = "<img src=\"/ProyectoFinal/Frontend/Styles/angai313-spongebob-sad.gif\" alt=\"sdf\">"
        
    } else {

      ProductListToHTML(JSON.parse(xhr.response));
      console.log(JSON.parse(xhr.response))
          
    }
    
}

}

function ProductToHTML(Product) {
    return "<div class=\"col-sm-6 col-md-4\" sstyle=\"min-height: 100px ;\">" +
    "<div class=\"thumbnail\" style=\"margin:10px;  border:1px solid #ddd;background-color:#fff;\">" +
      "<h4 class=\"text-center\"><span class=\"label label-info\">" + Product.Categoria + "</span></h4>" +
      "<img src=\"" + Product.Imagen + "\" class=\"img-responsive\">" +
      "<div class=\"caption\">" +
        "<div class=\"row\">" +
          "<div class=\"col-md-6 col-xs-6\">" +
            "<h3>" + Product.Tipo + "</h3>" +
          "</div>" +
          "<div class=\"col-md-7 col-xs-6 price\">" +
          "</div>" +
        "</div>" +
        "<h4>Presentaciones</h4>" +
        "<select name=\"presentación\" id=\"pres\">" +
          "<option value=\"1\">Delgado</option>" +
          "<option value=\"2\">Mediano</option>" +
          "<option value=\"3\">Grueso</option>" +
        "</select>" +
       "<p></p>" +
        "<div class=\"row\">" +
          "<div class=\"col-md-6\">" +
            "<a href=\"#\" class=\"btn btn-success btn-product\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Añadir al carro</a>" +
          "</div>" +
        "</div>" +

        "<p> </p>" +
      "</div>" +
    "</div>" +
  "</div>"
}

function ProductListToHTML(ProductList) {
    
  let Str = ProductList.map(ProductToHTML);
  listaProductos.innerHTML = Str;
}
