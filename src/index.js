const THREE = require('three');
import FPSCounter from './fps';
import BoxManager from './boxes';

const BOX_TO_ADD = 100;

let fpsCounter = new FPSCounter();
let camera;
let renderer;
let scene = new THREE.Scene();
let boxManager = new BoxManager(scene);


let checkPoint = 0;
function testCheckpoint() {
    const now = Date.now();
    if (!checkPoint) {
        checkPoint = now;
        return;
    }

    if (now - checkPoint < 5 * 1000) {
        return;
    }

    const boxesCount = boxManager.getBoxesCount();
    boxManager.addBoxes(BOX_TO_ADD);
    console.log(`total boxes: ${boxManager.getBoxesCount()}`);

    checkPoint = now;
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    boxManager.update();
    fpsCounter.count();

    testCheckpoint();
}


const start = (options) => {
    console.log('start test...');
    const {
        canvas,
    } = options;

    const {
        innerWidth: width,
        innerHeight: height,
    } = window;
    canvas.width = width;
    canvas.height = height;

    console.log(`canvas size: ${width}x${height}`);

    // set up renderer
    renderer = new THREE.WebGLRenderer({
        canvas,
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0xcccccc);

    // set up camera
    camera = new THREE.PerspectiveCamera(75, width/height, 1, 1000);
    camera.position.z = 4;

    // add the initial boxes
    boxManager.addBoxes(BOX_TO_ADD);

    // start render loop
    animate();
}

module.exports = {
    start,
}
