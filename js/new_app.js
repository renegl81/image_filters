
let canvas, context;
let imgObject = new Image();
let isDraggable = false;

let currentX = 0;
let currentY = 0;

window.onload = function() {
    $('#intensity').val(5)
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    currentX = canvas.width/2;
    currentY = canvas.height/2;

    imgObject.onload = function() {
        _Go();
    };
    imgObject.src = 'images/santa_clara.jpg'
    if(parseInt(imgObject.width) < 468){
        imgObject.width = 468;
    }
    if(parseInt(imgObject.height) < 822){
        imgObject.height = 822;
    }
};

function _Go() {
    _MouseEvents();

    setInterval(function() {
        _ResetCanvas();
        _DrawImage();
    }, 1000/30);
}

function _ResetCanvas() {
  //  context.fillStyle = '#fff';
    context.fillStyle = 'transparent';
    context.fillRect(0,0, canvas.width, canvas.height);
}

function _MouseEvents() {

   canvas.onmousedown = function(e) {
       // Solo escucho click izquierdo
       if(e.which !== 1 ) return;
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;

        if (mouseX >= (currentX - imgObject.width/2) &&
            mouseX <= (currentX + imgObject.width/2) &&
            mouseY >= (currentY - imgObject.height/2) &&
            mouseY <= (currentY + imgObject.height/2)) {
            isDraggable = true;
            currentX = mouseX;
            currentY = mouseY;
        }
    };
    canvas.onmousemove = function(e) {
        if (isDraggable) {
            currentX = e.pageX - this.offsetLeft;
            currentY = e.pageY - this.offsetTop;

        }
    };
    canvas.onmouseup = function(e) {
        isDraggable = false;
    };
    canvas.onmouseout = function(e) {
        isDraggable = false;
        // Elimino el rastro del movimiento
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
}

const _DrawImage = () =>  {
    context.drawImage(imgObject, currentX-(imgObject.width/2), currentY-(imgObject.height/2));
}

const save = () => {
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

const reset = function () {
    window.location.reload()
}

const applyFilter = function (filter ){

    let newCanvas = $('#canvas').clone()
    $('#canvas-container').append(newCanvas);
    applyGradient()
   // newCanvas.attr('id', 'new-canvas');
    Caman("#canvas", function () {
        let intensity = parseInt($('#intensity').val());
        golden(this, intensity);
        curves(this);

    });
};
