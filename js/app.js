

    let app = (function () {
        let canvas = document.getElementById('my-image'),
            context = canvas.getContext('2d');

        let loadPicture = function () {
            let original =  $('#original');
            let imageObj = new Image();
            imageObj.src = original.attr('src');

            imageObj.onload = function () {
                context.drawImage(imageObj, 0, 0);
            }
            original.attr('width',canvas.width ).attr('height',canvas.height )
        };

        let getImgData = function () {
            return context.getImageData(0, 0, canvas.width, canvas.height);
        };

        let save = function () {
            let link = window.document.createElement('a'),
                url = canvas.toDataURL(),
                filename = 'result.jpg';

            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            window.document.body.appendChild(link);
            link.click();
            window.document.body.removeChild(link);
        };

        return {
            loadPicture,
            save,
            getImgData
        };

    }());

    let reset = function () {
        window.location.reload()
    }


    const applyFilter = function (filter ){
        applyGradient()
      /*     Caman("#my-image", function () {
                   let intensity = parseInt($('#intensity').val());
                 //  for (let i =0; i < intensity +1 ; i++) {
                       golden(this);
                       curves(this);
               //    }

           });*/
    };

    const applyGradient = function (){
        let canvas = document.getElementById('my-image'),
            context = canvas.getContext('2d');
        let gradient = context.createLinearGradient(0,0, canvas.width, canvas.height);
        // Add three color stops
        gradient.addColorStop(0, '#b6644563');
        gradient.addColorStop(.5, '#fcc8970f');
        gradient.addColorStop(.5, '#fcc8970f');
        gradient.addColorStop(.5, '#fcc8970f');

// Set the fill style and draw a rectangle
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    const golden = function (entity) {
        entity.brightness(5)
            .contrast(-5)
            // .saturation(-3)
            .channels({
                red: 20,
                green: 0,
                blue: 0
            })

            //  .sepia(60)
            // falta highlight y  temp
            .render();
    }


    const  curves = function (entity) {

        // Using a string for the channel
        entity.curves('rgb', [0, -50], [100, 100], [180, 200], [255, 255]);

        // Specifying individual color channels
        // entity.curves(['r', 'b'], [0, 0], [100, 120], [180, 240], [255, 255]);

        entity.render();
    };

    const changeImage = function (e){
        let img = $('.img-thumbnail');
        let original = $('#original');
        img.on('click', function (){
            let src = $(this).attr('src')
            localStorage.setItem('src', src);
          //  original.attr('src', src)
         //   app.loadPicture();
            reset()
        })
    }

    $(document).ready(function() {
        if(localStorage.getItem('src')){
            let original = $('#original');
            original.attr('src', localStorage.getItem('src'))
        }
        app.loadPicture();
        changeImage();
});
