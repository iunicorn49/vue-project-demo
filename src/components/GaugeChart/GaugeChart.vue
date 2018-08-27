<template>
	<div class="wrapper">
    <div class="container" ref="gauge"></div>
  </div>
</template>

<script>
var echarts = require("echarts")

export default {
  data() {
    return {
      myChart: null,
      gaugeValue: 50
    };
  },
  computed: {
    chartData() {
      return [{ value: this.gaugeValue, name: '成功率'}]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.$nextTick(() => {
        this.myChart = echarts.init(this.$refs.gauge, 'light')
        this.setData()
      })
    },
    setData() {
      this.myChart.setOption({
        series: [
          {
						type: "gauge",
            splitNumber: 5, // 分段数
            radius: '100%', // 外圈大小
            title: { // 标题, 成功率
              fontSize: 10,
              offsetCenter: [0, '32%'],
              color: '#585858'
            },
            axisLine: { // 仪表盘轴线配置
              lineStyle: { 
                color: [[0.2, '#66E0E3'], [0.8, '#37A2DA'], [1, '#FB7193']], // 轴线颜色
                width: 20, // 轴线宽度
              }
            },
            axisLabel: { // 轴线文字
              distance: 8, // 文字 与 刻度线 的距离
              formatter: function(value) {
                switch(value)
                {
                  case 20:
                    return '差'
                  case 40:
                    return '中'
                  case 60:
                    return '良'
                  case 80:
                    return '优'  
                  default: 
                    return ''
                }
              },
              fontSize: 10
            },
            pointer: { // 指针样式
              length: '60%',
              width: 6,
            },
            detail: { // value 样式
              formatter: "{value}%",
              fontSize: 18,
              offsetCenter: [0, '50%']
            },
            data: this.chartData,
          }
        ]
      })
    }
  },
  watch: {
    gaugeValue() {
      this.initChart()
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 250px;
  height: 250px;
  background: #eee;
  padding: 15px;
}

.container {
  width: 100%;
  height: 100%;
}
</style>
