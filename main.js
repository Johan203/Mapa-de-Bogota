import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new SVGLoader();
const svgFilePath = 'tu_archivo.svg';

loader.load(svgFilePath, (data) => {
  const paths = data.paths;
  const group = new THREE.Group();

  paths.forEach((path) => {
    const material = new THREE.MeshBasicMaterial({ color: path.color });
    const shapes = path.toShapes(true);
    shapes.forEach((shape) => {
      const geometry = new THREE.ExtrudeBufferGeometry(shape, {
        depth: 0.1,
        bevelEnabled: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
    });
  });

  scene.add(group);
});

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
