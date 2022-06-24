
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtros de imágenes</title>
     <link href="css/bootstrap-grid.css" rel="stylesheet">
     <link href="css/bootstrap-reboot.css" rel="stylesheet">
     <link href="css/bootstrap.css" rel="stylesheet">
     <link href="css/app.css" rel="stylesheet">
  </head>
  <body>
    <div class="container pt-3 mb-4 pm-3 bg-white">
        <div class="row mt-4 pt-4">
            <div class="card col-2 pl-0 pr-0 text-center">
                <div class="card-header">
                    <h4 class="card-title">Filtros</h4>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <button onclick="applyFilter('golden')" class="btn btn-primary mt-3">Aplicar</button>
                    </div>
                    <div class="text-center">
                        <div class="slidecontainer mt-4">
                            <label for="intensity">Intensidad</label>
                            <input name="intensity" type="range" min="0" max="5" class="slider form-control" id="intensity">
                        </div>
                    </div>
                    <div class="col-12 mt-3 text-center">
                        <button onclick="app.save()" class="btn btn-success">Guardar</button>
                    </div>

                    <button onclick="reset()" class="btn btn-secondary mt-4">Recargar</button>
                </div>

            </div>
            <div class="card col-10">
                <div class="card-body row">
                    <div class="col-6 text-center">
                        <div class="img-container">
                            <img id="original" src="images/granada.jpeg">
                        </div>
                    </div>
                    <div class="col-6 text-center">
                        <div class="img-container">
                            <canvas id="my-image"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row w-100 mt-3">
            <div class="col-2 offset-3">
                <img  class="img-thumbnail"  width="100" height="80"  src="images/granada.jpeg">
            </div>
            <div class="col-2">
                <img class="img-thumbnail"  width="100" height="40" src="images/playa.jpeg">
            </div>
            <div class="col-2">
                <img class="img-thumbnail"  width="100" height="80"  src="images/puerto.jpeg">
            </div>
        </div>




    </div>
    <script type="application/javascript" src="js/jquery-3.6.0.min.js"></script>
    <script type="application/javascript" src="js/caman.full.min.js"></script>
    <script type="application/javascript" src="js/bootstrap.bundle.min.js"></script>
  <script type="application/javascript" src="js/app.js"></script>
  </body>
</html>

