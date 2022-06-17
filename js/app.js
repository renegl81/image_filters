

    let app = (function () {
        let canvas = document.getElementById('my-image'),
            context = canvas.getContext('2d'),

            public = {};

        public.loadPicture = function () {
            var imageObj = new Image();
            imageObj.src = 'images/benidorm.jpg';

            imageObj.onload = function () {
                context.drawImage(imageObj, 0, 0);
            }
        };

        public.getImgData = function () {
            return context.getImageData(0, 0, canvas.width, canvas.height);
        };

        public.save = function () {
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

        // Filters
        public.filters = {};

        public.filters.bw = function () {
            let imageData = app.getImgData(),
                pixels = imageData.data,
                numPixels = imageData.width * imageData.height;

            for (var i = 0; i < numPixels; i++) {
                var r = pixels[i * 4];
                var g = pixels[i * 4 + 1];
                var b = pixels[i * 4 + 2];

                var grey = (r + g + b) / 3;

                pixels[i * 4] = grey;
                pixels[i * 4 + 1] = grey;
                pixels[i * 4 + 2] = grey;
            }

            context.putImageData(imageData, 0, 0);
        };
        public.filters.contrast = function (contrast) {
            let imageData = app.getImgData(),
                pixels = imageData.data,
                numPixels = imageData.width * imageData.height,
                factor;

            contrast || (contrast = 100); // Default value

            factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

            for (var i = 0; i < numPixels; i++) {
                var r = pixels[i * 4];
                var g = pixels[i * 4 + 1];
                var b = pixels[i * 4 + 2];

                pixels[i * 4] = factor * (r - 128) + 128;
                pixels[i * 4 + 1] = factor * (g - 128) + 128;
                pixels[i * 4 + 2] = factor * (b - 128) + 128;
            }

            context.putImageData(imageData, 0, 0);
        };

        public.filters.contrast = function (contrast) {
            let imageData = app.getImgData(),
                pixels = imageData.data,
                numPixels = imageData.width * imageData.height,
                factor;

            contrast || (contrast = 100); // Default value

            factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

            for (var i = 0; i < numPixels; i++) {
                var r = pixels[i * 4];
                var g = pixels[i * 4 + 1];
                var b = pixels[i * 4 + 2];

                pixels[i * 4] = factor * (r - 128) + 128;
                pixels[i * 4 + 1] = factor * (g - 128) + 128;
                pixels[i * 4 + 2] = factor * (b - 128) + 128;
            }

            context.putImageData(imageData, 0, 0);
        };

        return public;
    }());

    let applyFilter = function () {
     // app.filters.contrast(selector.value)
        applyCamman();
    }

    let reset = function () {
        window.location.reload()
    }

    let applyCamman = function () {
        Caman('#my-image', function () {
            var brightnessInput = $('#myBr')
            var brightness = brightnessInput.attr('value')
            var contrastInput = $('#myBr')
            var contrast = contrastInput.attr('value')

            this.brightness(parseInt(brightness));
            this.contrast(parseInt(contrast));
            this.sepia(10);
            this.saturation(1);
            this.render();
        });
    }


    $(document).ready(function() {
        app.loadPicture();

});
