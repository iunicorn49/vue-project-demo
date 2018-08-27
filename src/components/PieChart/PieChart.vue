<template>
	<div class="wrapper">
		<div :id="id" class="chart"></div>
	</div>
</template>

<script>
import echarts from 'echarts'

export default {
	name: 'pie-chart',
	props: {
		id: {type: String, default: 'pie'},
		title: {type: String, default: 'title'},
		pieData: {type: Array, default () {return []}}
	},
	data () {
		return {
			charts: null // echarts 对象预设
		}
	},
	mounted () {
		for (let i = 0; i < 15; i++) {
			this.pieData.push({
				name: `第${i + 1}项-字数补丁${i + 1}`,
				value: Math.floor((Math.random() * 100))
			})
		}

		this.$nextTick(() => {
			this.charts = echarts.init(document.getElementById(this.id), 'light')
			this.setOption()
		})
	},
	methods: {
		setOption () {
			if (!this.charts) this.charts = echarts.init(document.getElementById(this.id))
			this.charts && this.charts.setOption({
				title: {
					text: this.title,
					top: 50,
					left: 'center'
				},
				tooltip: {
					trigger: 'item',
       		formatter: "{b} : {c} ({d}%)"
				},
				legend: {
					bottom: 0,
					left: 'center',
					data: this.pieData.map(item => item.name)
				},
				series: [
					{
						type: 'pie',
						radius: '45%',
						center: ['50%', '50%'],
						selectedMode: 'single',
						data: this.pieData,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			})
		}, // setOption 
	} // methods
}
</script>

<style lang="stylus" scoped>
.chart {
	height: 550px;
	width: 574px;
	background #fff;
}
</style>
