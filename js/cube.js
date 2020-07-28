
function cube() {
    const canvas = document.querySelector("#cube")

    const width = 300
    const height = 300

    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)


    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })

    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()

    // -----LIGHT
    const colorLight = 0xddeeff
    const light = new THREE.AmbientLight(colorLight)

    light.intensity = 1
    scene.add(light)

    const colorForSecondLight1 = 0xddeeff
    const colorForSecondLight2 = 0x080820
    const intensity2 = 1
    const secondLight = new THREE.HemisphereLight(colorForSecondLight1, colorForSecondLight2, intensity2)
    scene.add(secondLight)

    //-----CAMERA
    const fov = 45
    const aspect = width / height
    const near = 0.1
    const far = 5000

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 1000)

    //---- CAMERA ROTATION

    //---GEOMETRY AND MATERIAL
    const colorCube = '#6d95cd'
    const geometryCube = new THREE.BoxGeometry(400, 400, 400, 4, 4)
    const materialCube = new THREE.MeshStandardMaterial({ color: colorCube })


    //-----TEXTURE
    const loader = new THREE.TextureLoader()
    const materialTexture = new THREE.MeshBasicMaterial({
        map: loader.load('./img/html.png'),
        color: colorCube,
    })

    const materials = [
        new THREE.MeshBasicMaterial({map: loader.load('./img/react.png')}),
        new THREE.MeshBasicMaterial({map: loader.load('./img/threejs (1).png')}),
        new THREE.MeshBasicMaterial({map: loader.load('./img/css.png')}),
        new THREE.MeshBasicMaterial({map: loader.load('./img/html.png')}),
        new THREE.MeshBasicMaterial({map: loader.load('./img/web.png')}),
        new THREE.MeshBasicMaterial({map: loader.load('./img/js.png')}),
    ]

    
    //----MESH
    const cube = new THREE.Mesh(geometryCube, materials  )

    
    cube.rotation.set(0.4, 1, 0.3);

   
    
    scene.add(
        cube
    )


    // ----ORBIT CONTROLS
    const control = new THREE.OrbitControls(camera, canvas);
    control.update();
    control.target.set(0, 5, 0);

// ----- ORBIT CAMERA
    var clock = new THREE.Clock();
    var angle = 0; // текущий угол
    var angularSpeed = THREE.Math.degToRad(20); // угловая скорость - градусов в секунду
    var delta = 0;
    var radius = 1000;
    function animate() {
        delta = clock.getDelta(); // getDelta() - возвращает интервал в долях секунды
        requestAnimationFrame(animate);

        camera.position.x = Math.cos(angle) * radius;
        camera.position.z = Math.sin(angle) * radius;
        angle += angularSpeed * delta; // приращение угла

        camera.lookAt(cube.position);

    }

        function loop() {
            animate()
            
            renderer.render(scene, camera)
            requestAnimationFrame(() => { loop() })
        }

        loop()

    }


