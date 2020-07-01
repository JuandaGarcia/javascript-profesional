import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector('#MediaPlayer__video')
const button_play_pause = document.querySelector('#btn-play-pause')
const button_mute_inmute = document.querySelector('#btn-mute-inmute')

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay()],
})
button_play_pause.onclick = () => player.togglePlay()
button_mute_inmute.onclick = () => player.toggleMute()
