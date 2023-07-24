export class VideoService {
    constructor(name) {
        this.channels = [];
        this.users = [];
        this.name = name;
    }
    AddChannel(channel) {
        this.channels.push(channel);
    }
    RemoveChannel(name) {
        let index;
        for (let i = 0; i < this.channels.length; i++) {
            if (this.channels[i].name === name) {
                index = i;
                break;
            }
        }
        this.channels.splice(index, 1);
    }
    AddUser(user) {
        this.users.push(user);
    }
    RemoveUser(name) {
        let index;
        for (let i = 0; i < this.channels.length; i++) {
            if (this.channels[i].name === name) {
                index = i;
                break;
            }
        }
        this.users.splice(index, 1);
    }
}
