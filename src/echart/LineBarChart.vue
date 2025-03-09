<script setup lang="ts">
import { reactive } from 'vue';
import Echarts from './Index.vue'

const option = reactive({
    tooltip: {
      // 图列提示框，默认不显示
      show: true,
      color: "red",
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#fff",
        },
      },
    },
    grid: {
      //调整图表位置
      show: false, //是否显示直角坐标系网格
      top: "15%", // 一下数值可为百分比也可为具体像素值
      right: "5%",
      bottom: "10%",
      left: "10%",
    },
    legend: {
      top: "5%",
      data: [
        {
          name: "柱子名称",
          textStyle: {
            color: "#A9DDEE", // 单独设置某一个图列的颜色
          },
        },
        {
          name: "折线名称",
          textStyle: {
            color: "#A9DDEE", // 单独设置某一个图列的颜色
          },
        },
      ],
    },
    xAxis: [
      {
        type: "category",
        data: ["A类", "B类", "C类", "D类", "E类", "F类", "G类", "H类"],
        axisPointer: {
          type: "shadow",
        },
        axisLine: {
          show: false, //横轴样式
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#85B0C4",
          },
        },
        axisTick: {
          show: false, //隐藏刻度线
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // min: 0,
        // max: 250,
        // interval: 50, // y轴 两刻度之间的差值
        barWidth: "35%",
        splitLine: {
          show: true,
          lineStyle: {
            color: ["#08426D"],
            width: 1,
            type: "solid",
          },
        },
        axisLabel: {
          // y轴 数据格式和颜色
          formatter: "{value} 个",
          show: true,
          textStyle: {
            color: "#85B0C4",
          },
        },
      },
    ],
    series: [
      {
        name: "柱子名称",
        type: "bar",
        barWidth: "20%",
        tooltip: {
          valueFormatter: function (value:any) {
            return value + " 个";
          },
        },
        data: [40, 50, 60, 65, 54, 65, 60, 50],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 1, // 下
            x2: 0, // 左
            y2: 0, // 上
            colorStops: [
              {
                offset: 0,
                color: "#192F68", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#18E0FD", // 90% 处的颜色
              },
            ],
          },
        },
        label: {
          show: true, // 开启显示
          position: "top", // 在上方显示
          distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
          verticalAlign: "middle",
          textStyle: {
            // 数值样式
            color: "#F4EC03",
            fontSize: 12,
          },
        },
      },
      {
        name: "折线名称",
        type: "line",
        // yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value:any) {
            return value + " 个";
          },
        },
        data: [35, 62, 84, 52, 44, 96, 78, 66],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 1, // 下
            x2: 0, // 左
            y2: 0, // 上
            colorStops: [
              {
                offset: 0,
                color: "#18E0FD", // 0% 处的颜色
              },
              {
                offset: 0.9,
                color: "#18E0FD", // 90% 处的颜色
              },
            ],
          },
        },
      },
    ],
});
</script>

<template>
  <div :style="{ width: '1230px', height: '350px' }">
    <Echarts :option="option" />
  </div>
</template>
