"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shorts = exports.FullVideo = exports.Video = void 0;
var Comment_1 = require("./Comment");
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
            this.comments.push(new Comment_1.Comment(user, text));
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
exports.Video = Video;
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
exports.FullVideo = FullVideo;
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
exports.Shorts = Shorts;
