var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, type) {
        this.name = name;
        this.isAnon = type;
    }
    return User;
}());
/****************************************************************************************************/
var VideoServices = /** @class */ (function () {
    function VideoServices(name) {
        this.channels = [];
        this.name = name;
    }
    VideoServices.prototype.AddChannel = function (channel) {
        this.channels.push(channel);
    };
    VideoServices.prototype.RemoveChannel = function (name) {
        var index;
        for (var i = 0; i < this.channels.length; i++) {
            if (this.channels[i].name === name) {
                index = i;
                break;
            }
        }
        this.channels.splice(index, 1);
    };
    VideoServices.prototype.AddUser = function (user) {
        this.users.push(user);
    };
    VideoServices.prototype.RemoveUser = function (name) {
        var index;
        for (var i = 0; i < this.channels.length; i++) {
            if (this.channels[i].name === name) {
                index = i;
                break;
            }
        }
        this.users.splice(index, 1);
    };
    return VideoServices;
}());
/***********************************************************************************************************/
var Video = /** @class */ (function () {
    function Video(name) {
        this.watchedCount = 0;
        this.name = name;
    }
    Video.prototype.Load = function () { };
    Video.prototype.Like = function (user) {
        if (user.isAnon == false) {
            var likedIndex = this.liked.indexOf(user.name);
            if (likedIndex == -1) {
                this.liked.push(user.name);
                var dislikedIndex = this.disliked.indexOf(user.name);
                if (dislikedIndex > -1) {
                    this.disliked.splice(dislikedIndex, 1);
                }
            }
            else {
                this.liked.splice(likedIndex, 1);
            }
        }
    };
    Video.prototype.Dislike = function (user) {
        if (user.isAnon == false) {
            var dislikedIndex = this.disliked.indexOf(user.name);
            if (dislikedIndex == -1) {
                this.disliked.push(user.name);
                var likedIndex = this.liked.indexOf(user.name);
                if (likedIndex > -1) {
                    this.liked.splice(likedIndex, 1);
                }
            }
            else {
                this.disliked.splice(dislikedIndex, 1);
            }
        }
    };
    Video.prototype.Comment = function (user, text) {
        if (user.isAnon == false) {
            this.comments.push(new Coment(user, text));
        }
    };
    Video.prototype.Uncomment = function (user, text) {
        if (user.isAnon == false) {
            var temp = [];
            for (var i = 0; i < this.comments.length; i++) {
                if (this.comments[i].user === user) {
                    temp.push(i);
                }
            }
            for (var i = 0; i < temp.length; i++) {
                if (this.comments[temp[i]].text == text) {
                    this.comments.splice(temp[i], 1);
                    break;
                }
            }
        }
    };
    return Video;
}());
var FullVideo = /** @class */ (function (_super) {
    __extends(FullVideo, _super);
    function FullVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullVideo.prototype.Load = function () {
        console.log("loading 25%");
        console.log("loading 50%");
        console.log("loading 75%");
        console.log("loading 100%");
    };
    return FullVideo;
}(Video));
var Shorts = /** @class */ (function (_super) {
    __extends(Shorts, _super);
    function Shorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shorts.prototype.Load = function () {
        console.log("loading 100%");
    };
    return Shorts;
}(Video));
/*************************************************************************************************************/
var Player = /** @class */ (function () {
    function Player(video) {
        this.video = video;
    }
    Player.prototype.Play = function () {
        this.video.Load();
    };
    Player.prototype.Pause = function () {
    };
    Player.prototype.Stop = function () {
    };
    return Player;
}());
/********************************************************************************************************* */
var Coment = /** @class */ (function () {
    function Coment(user, text) {
        this.user = user;
        this.text = text;
    }
    return Coment;
}());
/********************************************************************************************************** */
var Channel = /** @class */ (function () {
    function Channel(name) {
        this.subscribers = [];
        this.name = name;
    }
    Channel.prototype.AddVideo = function (video) {
        this.videos.push(video);
    };
    Channel.prototype.RemoveVideo = function (name) {
        var index;
        for (var i = 0; i < this.videos.length; i++) {
            if (this.videos[i].name === name) {
                index = i;
                break;
            }
        }
        this.videos.splice(index, 1);
    };
    Channel.prototype.Subscribe = function (user) {
        if (user.isAnon == false) {
            this.subscribers.push(user);
        }
    };
    Channel.prototype.Unsubscribe = function (user) {
        var name = user.name;
        var index;
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].name === name) {
                index = i;
                break;
            }
        }
        this.subscribers.splice(index, 1);
    };
    return Channel;
}());
/************************************************************************************************************ */
var vidSrv;
var usr;
var usr1;
var plr;
var chanIndex;
var vidIndex;
usr = new User("11111111", false);
usr1 = new User("22222222", false);
vidSrv = new VideoServices("YouTube");
vidSrv.AddChannel(new Channel("ВелоМотоОгород"));
var index;
for (var i = 0; i < this.channels.length; i++) {
    if (this.channels[i].name === "ВелоМотоОгород") {
        index = i;
        break;
    }
}
vidSrv.channels[index].AddVideo(new FullVideo("Посадил и офигел! 100% работает! Не спам!"));
console.log(vidSrv);
