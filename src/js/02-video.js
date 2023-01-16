import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const iframeEl = document.getElementById('vimeo-player');
const player = new Player(iframeEl);


player.on('timeupdate', throttle(updateTime, 1000));

function updateTime ({ seconds }) {
localStorage.setItem(VIDEO_CURRENT_TIME, seconds);
}


const time = +localStorage.getItem(VIDEO_CURRENT_TIME);

player.setCurrentTime(time);
