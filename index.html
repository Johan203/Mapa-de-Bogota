<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Three.js Scene</title>
    <style>
        body {
            background-color: #ffffff;
            margin: 0;
            overflow: hidden;
        }

        * {
            outline: none;
        }

        #css,
        #webgl {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        #css {
            --c1: #122538;
            --c2: #112233;
            background: repeating-linear-gradient(-45deg,
                    var(--c1),
                    var(--c1) 20px,
                    var(--c2) 20px,
                    var(--c2) 40px);
        }

        #webgl {
            pointer-events: none;
        }
    </style>
    <script src="https://unpkg.com/three@0.126.0/build/three.js"></script>
    <script src="https://unpkg.com/three@0.126.0/examples/js/controls/OrbitControls.js"></script>
    <script src="https://unpkg.com/three@0.126.0/examples/js/renderers/CSS3DRenderer.js"></script>
</head>

<body>
    <script type="module">
        var scene, root, renderer2, background;

        init();
        animate(performance.now());

        function init() {
            scene = new THREE.Scene();
            root = new THREE.Object3D();
            root.position.y = 20;
            scene.add(root);

            background = makeElementObject('div', 200, 200);
            background.css3dObject.element.textContent = "I am a <div> element in a static background.";
            background.css3dObject.element.style.opacity = "1";
            background.css3dObject.element.style.padding = '10px';
            const color1 = '#7bb38d';
            const color2 = '#71a381';
            background.css3dObject.element.style.background = `repeating-linear-gradient(
                    45deg,
                    ${color1},
                    ${color1} 10px,
                    ${color2} 10px,
                    ${color2} 20px
                )`;
            root.add(background);

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            renderer2 = new THREE.CSS3DRenderer();
            renderer2.domElement.style.position = 'absolute';
            renderer2.domElement.style.top = 0;
            document.querySelector('#css').appendChild(renderer2.domElement);

            window.addEventListener('resize', resize);
            resize();
        }

        function resize() {
            renderer2.setSize(window.innerWidth, window.innerHeight);
        }

        function animate(time) {
            background.rotation.y = Math.PI / 8 * Math.cos(time * 0.001) - Math.PI / 6;
            background.rotation.x = Math.PI / 10 * Math.sin(time * 0.001) - Math.PI / 10;

            renderer2.render(scene, camera);

            requestAnimationFrame(animate);
        }

        function makeElementObject(type, width, height) {
            const obj = new THREE.Object3D();

            const element = document.createElement(type);
            element.style.width = width + 'px';
            element.style.height = height + 'px';
            element.style.opacity = 0.999;
            element.style.boxSizing = 'border-box';

            var css3dObject = new THREE.CSS3DObject(element);
            obj.css3dObject = css3dObject;
            obj.add(css3dObject);

            var material = new THREE.MeshPhongMaterial({
                opacity: 0.15,
                color: new THREE.Color(0x111111),
                blending: THREE.NoBlending
            });
            var geometry = new THREE.BoxGeometry(width, height, 1);
            var mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            obj.lightShadowMesh = mesh;
            obj.add(mesh);

            return obj;
        }
    </script>
</body>

</html>
