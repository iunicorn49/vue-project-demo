<template>
	<div ref="box" class="scroll-box">
		<slot></slot>
		<div ref="line" class="line">
			<div class="inside"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'scroll-bar',
	props: {
		lineSpace: {type: Number, default: 10}
	},
	data() {
		return {
			box: null,
			boxH: 0,
			line: null,
			lineT: 0,
			slot: null,
			slotH: 0,
			min: 0,
			max: 0
		}
	},
	methods: {
		initScrollBox(mainDom) {
			this._initBox()
			this._initSlot(mainDom)
			this._initLine()
			this.max = this.box.offsetHeight - this.line.offsetHeight
			this.box.addEventListener('mousewheel', this._mousewheel)
			document.body.addEventListener('mouseup', e => {
				this.box.removeEventListener('mousemove', this._move)
			})
		},
		_initBox() {
			this.box = this.$refs.box
			this.boxH = this.box.offsetHeight
		},
		_initSlot(mainDom) {
			this.slot = mainDom
			this.slot.style.position = 'absolute'
			this.slotH = mainDom.offsetHeight
		},
		_initLine() {
			this.line = this.$refs.line
			this.line.style.height = Math.floor((this.slotH / this.boxH) * this.lineSpace) + 'px'
			this.line.addEventListener('mousedown', e => {
				this.box.addEventListener('mousemove', this._move)
			})
		},
		_mousewheel(e) {
			let t = this.line.offsetTop + Math.floor(e.deltaY / 10)
			this._scrollT(t)
		},
		_scrollT(t) {
			if (t <= this.min) t = 0
			if (t >= this.max) t = this.max
			this.line.style.top = t + 'px'
			this.lineT = t
		},
		_move(e) {
			console.log(e)
			let t = this.line.offsetTop + e.movementY
			this._scrollT(t)
		}
	},
	watch: {
		lineT(n, o) {
			let p = parseInt((n / this.max) * 100)
			let total = this.slotH - this.boxH
			this.slot.style.top = -(total * p / 100) + 'px'
		}
	}
}	
</script>

<style>
.scroll-box {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding-right: 15px;
}

.line {
	position: absolute;
	top: 0;
	right: 0;
	box-sizing: border-box;
	width: 12px;
	padding: 2px;
}

.inside {
	width: 100%;
	height: 100%;
	background: #585858;
	border-radius: 4px;
}
</style>
