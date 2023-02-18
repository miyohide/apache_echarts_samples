import * as echarts from "echarts";

const chartDom = document.getElementById("main");
const myChart = echarts.init(chartDom);

// データ表示用のランダムなデータを設定する
const data = [];
for (let i = 0; i < 5; i++) {
  data.push(Math.round(Math.random() * 2000));
}

const option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: "category",
    data: ["A", "B", "C", "D", "E"],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 4
  },
  series: [
    {
      realtimeSort: true,
      name: "X",
      type: "bar",
      data: data,
      label: {
        show: true,
        position: "right",
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: "linear",
  animationEasingUpdate: "linear"
};

function run() {
  for (let i = 0; i < data.length; i++) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: "bar",
        data
      }
    ]
  });
}

setTimeout(function() {
  run();
}, 0);
setInterval(function() {
  run();
}, 3000);

option && myChart.setOption(option);
