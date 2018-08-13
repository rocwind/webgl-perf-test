const THREE = require('three');

export default class BoxManager {
    constructor(scene) {
        this.scene = scene;
        this.boxes = [];
    }

    update() {
        this.boxes.forEach((box) => {
            box.rotation.x += 0.01;
            box.rotation.y += 0.007;
        });
    }

    getBoxesCount() {
        return this.boxes.length;
    }

    addBoxes(count = 1) {
        for (let i = 0; i < count; i++) {
            this._addRandomBox();
        }
    }

    _addRandomBox() {
        // create the Cube
        const color = Math.floor(Math.random()*16777215);
        const size = Math.random() * 0.8 + 0.2;
        const rotation = Math.random();
        const positionX = -2 + Math.random() * 4;
        const positionY = -2 + Math.random() * 4;

        const box = new THREE.Mesh(
            new THREE.BoxGeometry(size, size, size),
            new THREE.MeshBasicMaterial({
                color: Math.floor(Math.random()*16777215),
            })
        );
        box.rotation.set(rotation, rotation, 0);
        box.position.set(positionX, positionY, 0);

        // add the object to the scene
        this.scene.add(box);
        this.boxes.push(box);
    }
}
