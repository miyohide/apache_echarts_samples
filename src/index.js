import * as echarts from "echarts";
import axios from "axios";

const index = echarts.init(document.getElementById("main"));

axios
  .get("http://localhost:8080/data.json")
  .then(function (response) {
    const option = {
      title: {
        text: "Hello ECharts",
      },
      tooltip: {},
      legend: {
        data: ["sales"],
      },
      xAxis: {
        data: response.data.categories,
      },
      yAxis: {},
      series: [
        {
          name: "sales",
          type: "bar",
          data: response.data.values,
        },
      ],
    };

    index.setOption(option);
  })
  .catch(function (error) {
    console.log(error);
  });
