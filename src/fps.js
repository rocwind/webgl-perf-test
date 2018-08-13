

export default class FPSCounter {
    constructor() {
        this.frames = 0;
        this.preTime = Date.now();
        this.fps = '0.00';
    }

    count() {
        this.frames += 1;
        const curTime = Date.now();
        if (curTime > this.preTime + 1000) {
            const fps = this.frames * 1000 / (curTime - this.preTime);
            this.fps = fps.toFixed(2);
            console.log(`FPS: ${this.fps}`);

            this.frames = 0;
            this.preTime = curTime;
        }
    }

    getFPS() {
        return this.fps;
    }
}
