export class Channel {
    constructor(name) {
        this.videos = [];
        this.subscribers = [];
        this.name = name;
    }
    AddVideo(video) {
        this.videos.push(video);
    }
    RemoveVideo(name) {
        let index;
        for (let i = 0; i < this.videos.length; i++) {
            if (this.videos[i].name === name) {
                index = i;
                break;
            }
        }
        this.videos.splice(index, 1);
    }
    Subscribe(user) {
        if (user.isAnon == false) {
            this.subscribers.push(user);
        }
    }
    Unsubscribe(user) {
        let name = user.name;
        let index;
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].name === name) {
                index = i;
                break;
            }
        }
        this.subscribers.splice(index, 1);
    }
}
