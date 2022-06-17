
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Filtros de imágenes</title>
    <link href="css/app.css" rel="stylesheet">
  </head>
  <body>
    <div class="main_page">
        <div class="navbar">
            <button onclick="app.loadPicture()" class="btn-reload">Recargar imagen</button>
            <button onclick="applyFilter()" class="btn-action">Aplicar</button>
            <div class="slidecontainer">
                <label for="brightnessField">Brillo</label>
                <input type="range" min="-20" max="20" value="5" class="slider" id="myBr">
            </div>
            <div class="slidecontainer">
                <label for="contrastField">Contraste</label>
                <input type="range" min="0" max="100" value="30" class="slider" id="myCt">
            </div>
            <button onclick="reset()" class="btn-reset">Resetear valores</button>
        </div>

        <canvas id="my-image" width="800" height="600"></canvas>
        <div class="navbar">
        <button onclick="app.save()" class="btn-reset">Guardar</button>
        </div>
    </div>
    <script type="application/javascript" src="js/jquery-3.6.0.min.js"></script>
    <script type="application/javascript" src="js/caman.full.min.js"></script>
  <script type="application/javascript" src="js/app.js"></script>
  </body>
</html>

