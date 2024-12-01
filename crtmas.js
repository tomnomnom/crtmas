function crtmas(elem){

    var bgColor = 'hsla(0, 0%, 0%, 0.002)';

    var width = elem.width;
    var height = elem.height;

    var c = elem.getContext('2d');

    var grid = [
        "                                                       ",
        "                                                       ",
        "  OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  ",
        "  O                                                 O  ",
        "  O O     O OOOOOOO OOOOO   OOOOO   O     O         O  ",
        "  O OO   OO O       O    O  O    O  O     O         O  ",
        "  O O O O O O       O     O O     O  O   O          O  ",
        "  O O  O  O O       O    O  O    O    O O           O  ",
        "  O O     O OOOOOO  OOOOO   OOOOO      O            O  ",
        "  O O     O O       O    O  O    O     O            O  ",
        "  O O     O O       O     O O     O    O            O  ",
        "  O O     O O       O     O O     O    O            O  ",
        "  O O     O OOOOOOO O     O O     O    O            O  ",
        "  O                                                 O  ",
        "  O  OOOOO  OOOOO   OOOOOOO O     O   OOO     OOOO  O  ",
        "  O O     O O    O     O    OO   OO  O   O   O    O O  ",
        "  O O       O     O    O    O O O O O     O O       O  ",
        "  O O       O    O     O    O  O  O O     O  O      O  ",
        "  O O       OOOOO      O    O     O OOOOOOO   OOO   O  ",
        "  O O       O    O     O    O     O O     O      O  O  ",
        "  O O       O     O    O    O     O O     O       O O  ",
        "  O O     O O     O    O    O     O O     O O    O  O  ",
        "  O  OOOOO  O     O    O    O     O O     O  OOOO   O  ",
        "  O                                                 O  ",
        "  OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  ",
        "                                                       ",
        "                                                       "
    ].map(r => r.split(""));

    var state = {
        pointer: 0
    };

    var pixelWidth = (width / grid[0].length);
    var pixelHeight = (height / grid.length) * 0.9;


    (function draw(t){
        drawBg(c);

        var y = (height / grid.length) * state.pointer;
        
        var row = grid[state.pointer];

        for (var i = 0; i < row.length; i++){

            if (row[i] == "O"){
                var x = (width / row.length) * i;

                c.save();
                c.beginPath();
                c.rect(x, y, pixelWidth, pixelHeight);
                c.fillStyle = 'hsla(86, 100%, 50%, 0.9)';
                c.fill();
                c.closePath();
                c.restore();
            }
        }

        state.pointer++;
        if (state.pointer >= grid.length){
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
}

