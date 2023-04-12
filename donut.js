const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const getRandomMatrixChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
};

const createMatrixText = (text, size) => {
    const loader = new THREE.FontLoader();
    return new Promise((resolve) => {
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            const geometry = new THREE.TextGeometry(text, {
                font: font,
                size: size,
                height: 0.1,
            });
            resolve(geometry);
        });
    });
};

const createDonut = async () => {
    const radius = 2;
    const tubeRadius = 0.5;
    const radialSegments = 12;
    const tubularSegments = 50;
    const donut = new THREE.Object3D();

    for (let i = 0; i < radialSegments; i++) {
        for (let j = 0; j < tubularSegments; j++) {
            const char = getRandomMatrixChar();
            const textGeo = await createMatrixText(char, 0.3);

            const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
            const textMesh = new THREE.Mesh(textGeo, textMaterial);

            const angle = (Math.PI * 2 * i) / radialSegments;
            const subAngle = (Math.PI * 2 * j) / tubularSegments;
            const xPos = (radius + tubeRadius * Math.cos(subAngle)) * Math.cos(angle);
            const yPos = (radius + tubeRadius * Math.cos(subAngle)) * Math.sin(angle);
            const zPos = tubeRadius * Math.sin(subAngle);

            textMesh.position.set(xPos, yPos, zPos);
            textMesh.rotation.y = angle;
            donut.add(textMesh);
        }
    }

    return donut;
};

createDonut().then((donut) => {
    scene.add(donut);
    camera.position.z = 10;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    function animate() {
        requestAnimationFrame(animate);

        donut.rotation.x += 0.01;
        donut.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
});
