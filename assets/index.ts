import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('#MediaPlayer__video')
const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
})

const playButton: HTMLElement = document.querySelector('#btn-play-pause')
playButton.onclick = () => player.togglePlay()

const muteButton: HTMLElement = document.querySelector('#btn-mute-inmute')
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
