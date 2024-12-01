<!doctype html>
<html lang="en">
<head>
    <title>Merry CRTmas</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        body {
            background-color: #000000;
        }
        section {
            text-align: center;
        }
        canvas {
            padding: 1em;
            filter: url(#crt-filter);
        }
        svg {
        }
    </style>
</head>
<body>


    <section class="main">
        <canvas id="demo" width="800" height="600" data-val="0">No canvas</canvas>
    </section>

    <script src="crtmas.js?<?php echo uniqid(); ?>"></script>

    <script>
        window.addEventListener('load', function(){
            var sourceImg = new Image();
            var fishImg = new Image();

            var proms = [
                new Promise(res => sourceImg.onload = () => res()),
                new Promise(res => fishImg.onload = () => res()),
            ];

            sourceImg.src = "sheep.png";
            fishImg.src= "fisheye800.jpg"

            Promise.all(proms).then(() => {
                var source = document.createElement("canvas");
                source.width = 80;
                source.height = 60;

                var sc = source.getContext('2d')
                sc.drawImage(sourceImg, 0, 0);

                var imgData = sc.getImageData(0, 0, source.width, source.height);

                var demo = document.getElementById('demo');
                crtmas(demo, imgData, source.width, source.height);
            })
        });
    </script>

    <svg version="1.1" width=800 height=600 viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <filter id="crt-filter" color-interpolation-filters="sRGB" x="0" y="0" width="800" height="600">

                <feImage width="800" height="600" xlink:href="fisheye800.jpg" result="displacement" />
                <feDisplacementMap width="800" height="600" in="SourceGraphic" in2="displacement" scale="70" xChannelSelector="R" yChannelSelector="G" result="fisheye"/>

                <feGaussianBlur stdDeviation="3" in="fisheye" result="blur"/>

            </filter>
        </defs>
    </svg>



</body>
</html>
