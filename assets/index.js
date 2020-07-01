import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('#MediaPlayer__video')
const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause()],
})

const playButton = document.querySelector('#btn-play-pause')
playButton.onclick = () => player.togglePlay()

const muteButton = document.querySelector('#btn-mute-inmute')
muteButton.onclick = () => {
	if (player.media.muted) {
		player.unmute()
	} else {
		player.mute()
	}
}

//service worker
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('/sw.js').catch((error) => {
// 		console.log(error.message)
// 	})
// }
