
const applyGradient = function (){
    let canvas = document.getElementById('canvas'),
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

const golden = function (entity, intensity) {
    let factor = intensity/5;
    entity.brightness(5 * factor)
        .contrast(-5 * factor)
        // .saturation(-3)
        .channels({
            red: 20 * factor,
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
