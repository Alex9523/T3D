
function sphere() {
    const canvas = document.querySelector("#sphere")

    const width = 400
    const height = 400

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


    //---GEOMETRY AND MATERIAL
    const geometryLargeSphere = new THREE.SphereGeometry(380, 10, 10)
    const materialLargeSphere = new THREE.MeshBasicMaterial({ wireframe: true})

    const geometryMiddleSphere = new THREE.SphereGeometry(280, 10, 10)
    const materialMiddleSphere = new THREE.MeshBasicMaterial({color: '#6d95cd', wireframe: true})

    const geometrySmallSphere = new THREE.SphereGeometry(150, 10, 10)
    const materialSmallSphere = new THREE.MeshBasicMaterial({color: "white", wireframe: true})

    
    //----MESH
    const largeSphere = new THREE.Mesh(geometryLargeSphere, materialLargeSphere)
    largeSphere.position.x = 0

    const middleSphere = new THREE.Mesh(geometryMiddleSphere, materialMiddleSphere)
    middleSphere.position.x = 0

    const smallSphere = new THREE.Mesh(geometrySmallSphere, materialSmallSphere)
    smallSphere.position.x = 0
    
    scene.add(smallSphere)
    
    scene.add(middleSphere)
    
    scene.add(largeSphere)


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

        camera.lookAt(largeSphere.position);

    }

   


        
         
    

        function loop() {
           
//             largeSphere.scale.x -=0.01
//             largeSphere.scale.y -=0.01
//             largeSphere.scale.z -=0.01


            //animate()
            largeSphere.rotation.y += 0.01
            largeSphere.rotation.x += 0.01

            middleSphere.rotation.z += 0.01
            middleSphere.rotation.x += 0.01

            smallSphere.rotation.y += 0.01  
            
            renderer.render(scene, camera)
            requestAnimationFrame(() => { loop() })
        }

        loop()

    }


