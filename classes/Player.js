export class Player {
    constructor(video) {
        this.video = video;
        this.video.watchedCount++;
    }
    Play() {
        this.video.Load();
        this.video.watchedCount++;
    }
    Pause() {
    }
    Stop() {
    }
}
