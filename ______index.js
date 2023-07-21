import {VideoService} from './classes/VideoService.js';
import {Channel} from './classes/Channel.js';
import {FullVideo, Shorts} from './classes/Video.js';
import { User } from './classes/User.js';
import { Player } from './classes/Player.js';

let vidSrv;
let usr;
let usr1;
let chanIndex;
let vidIndex;
let plr;

usr = new User("11111111",false);
usr1 = new User("22222222",false);



vidSrv = new VideoService("YouTube");
vidSrv.AddChannel(new Channel("ВелоМотоОгород"));
vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].AddVideo(new FullVideo("Посадил и офигел! 100% работает! Не спам!"));

chanIndex=vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород");
vidIndex=vidSrv.channels[chanIndex].videos.findIndex(vid=>vid.name=="Посадил и офигел! 100% работает! Не спам!");
vidSrv.channels[chanIndex].videos[vidIndex].description="zdxgszdfgvdzfvfdz";



vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].AddVideo(new Shorts("Приехал на работу и, бл#, домой хочу"));

chanIndex=vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород");
vidIndex=vidSrv.channels[chanIndex].videos.findIndex(vid=>vid.name=="Приехал на работу и, бл#, домой хочу");
vidSrv.channels[chanIndex].videos[vidIndex].description="ууууфффффффф";

/*******************************************************************************************************/

vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].Subscribe(usr);
//vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].Unsubscribe(usr);

/*******************************************************************************************************/

chanIndex=vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород");
vidIndex=vidSrv.channels[chanIndex].videos.findIndex(vid=>vid.name=="Приехал на работу и, бл#, домой хочу");

vidSrv.channels[chanIndex].videos[vidIndex].Like(usr);
vidSrv.channels[chanIndex].videos[vidIndex].Dislike(usr);

/*******************************************************************************************************/




vidSrv.channels[chanIndex].videos[vidIndex].Comment(usr,"cgyjftjkyukyuk");
vidSrv.channels[chanIndex].videos[vidIndex].Comment(usr1,"7777777777777777777777");
vidSrv.channels[chanIndex].videos[vidIndex].Comment(usr,"111111111167568768t67tui");
//vidSrv.channels[chanIndex].videos[vidIndex].Uncomment(usr,"cgyjftjkyukyuk");
//vidSrv.channels[chanIndex].videos[vidIndex].Uncomment(usr,"111111111167568768t67tui");
//vidSrv.channels[chanIndex].videos[vidIndex].Uncomment(usr1,"7777777777777777777777");

/*******************************************************************************************************/

plr=new Player(vidSrv.channels[chanIndex].videos[vidIndex]);
plr.Play();


plr.video.Like(usr1);


console.log(vidSrv);
console.log(plr);
