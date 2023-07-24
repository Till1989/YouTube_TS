import { Comment } from "./Comment.js";
export class Video {
    constructor(name) {
        this.liked = [];
        this.disliked = [];
        this.comments = [];
        this.name = name;
    }
    Like(user) {
        if (user.isAnon == false) {
            let likedIndex = this.liked.indexOf(user.name);
            if (likedIndex == -1) {
                this.liked.push(user.name);
                let dislikedIndex = this.disliked.indexOf(user.name);
                if (dislikedIndex > -1) {
                    this.disliked.splice(dislikedIndex, 1);
                }
            }
            else {
                this.liked.splice(likedIndex, 1);
            }
        }
    }
    Dislike(user) {
        if (user.isAnon == false) {
            let dislikedIndex = this.disliked.indexOf(user.name);
            if (dislikedIndex == -1) {
                this.disliked.push(user.name);
                let likedIndex = this.liked.indexOf(user.name);
                if (likedIndex > -1) {
                    this.liked.splice(likedIndex, 1);
                }
            }
            else {
                this.disliked.splice(dislikedIndex, 1);
            }
        }
    }
    Comment(user, text) {
        if (user.isAnon == false) {
            this.comments.push(new Comment(user, text));
        }
    }
    Uncomment(user, text) {
        if (user.isAnon == false) {
            let temp = [];
            for (let i = 0; i < this.comments.length; i++) {
                if (this.comments[i].user === user) {
                    temp.push(i);
                }
            }
            for (let i = 0; i < temp.length; i++) {
                if (this.comments[temp[i]].text == text) {
                    this.comments.splice(temp[i], 1);
                    break;
                }
            }
        }
    }
}
export class FullVideo extends Video {
    Load() {
        console.log("loading 25%");
        console.log("loading 50%");
        console.log("loading 75%");
        console.log("loading 100%");
    }
}
export class Shorts extends Video {
    Load() {
        console.log("loading 100%");
    }
}
