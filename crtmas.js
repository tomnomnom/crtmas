function crtmas(elem){

    var bgColor = 'hsla(0, 0%, 0%, 0.02)';
    var baseFreq = 2;

    var width = elem.width;
    var height = elem.height;

    var c = elem.getContext('2d');

    var screen = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1],
        [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
        [1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    var state = {
        pointer: 0
    };

    var pixelWidth = (width / screen[0].length) * 0.9;
    var pixelHeight = (height / screen.length) * 0.9;


    (function draw(t){
        drawBg(c);

        var y = (height / screen.length) * state.pointer;
        
        var row = screen[state.pointer];

        for (var i = 0; i < row.length; i++){

            if (row[i] == 1){
                var x = (width / row.length) * i;

                c.save();
                c.beginPath();
                c.rect(x, y, pixelWidth, pixelHeight);
                c.shadowBlur = 10;
                c.shadowColor = 'hsla(86, 100%, 50%, 1)';
                c.fillStyle = 'hsla(86, 100%, 50%, 1)';
                c.fill();
                c.closePath();
                c.restore();
            }
        }

        state.pointer++;
        if (state.pointer >= screen.length){
            state.pointer = 0;
        }

        requestAnimationFrame(draw);
    })(0);

    function drawBg(c){
        c.save();
        c.rect(0, 0, width, height)
        c.fillStyle = bgColor;
        c.fill();
        c.restore();
    }

    function initTrail(){
        var trail = [];
        var length = Math.floor((Math.random() * 10) + 1);
        for (var i = 0; i < length; i++) {
            trail.push(Math.fllor(Math.random() * 2));
        }

        return trail;
    }
}

