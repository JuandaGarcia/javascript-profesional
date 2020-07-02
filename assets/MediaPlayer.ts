class MediaPlayer {
	media: HTMLMediaElement
	plugins: Array<any>
	constructor(config) {
		this.media = config.el
		this.plugins = config.plugins || []
		this.initPlugins()
	}
	private initPlugins() {
		// const player = {
		// 	play: () => this.play(),
		// 	pause: () => this.pause(),
		// 	media: this.media,
		// 	get muted() {
		// 		return this.media.muted
		// 	},
		// 	set muted(value) {
		// 		this.media.muted = value
		// 	},
		// }
		this.plugins.forEach((plugin) => {
			plugin.run(this)
		})
	}
	play() {
		this.media.play()
	}
	pause() {
		this.media.pause()
	}
	mute() {
		this.media.muted = true
	}
	unmute() {
		this.media.muted = false
	}
	togglePlay() {
		if (this.media.paused) {
			this.play()
		} else {
			this.pause()
		}
	}
	toggleMute() {
		if (this.media.muted) {
			this.unmute()
		} else {
			this.mute()
		}
	}
}

export default MediaPlayer
