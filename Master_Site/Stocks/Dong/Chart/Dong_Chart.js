// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var Line = {
  type: 'line',
  data: {
      labels: [],
      datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [],
      }],
  },
  options: {
      scales: {
          xAxes: [{
              time: {
                  unit: 'date'
              },
              gridLines: {
                  display: false
              },
              ticks: {
                  maxTicksLimit: 7
              }
          }],
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 40000,
                  maxTicksLimit: 5
              },
              gridLines: {
                  color: "rgba(0, 0, 0, .125)",
              }
          }],
      },
      legend: {
          display: false
      }
  }
}

var myLineChart = new Chart(ctx, Line);

function update (){
  myLineChart.update();
}

setInterval(update, 1000);



dbService.collection('Sam_Chart').doc('Pie').set()
















/*
window.onload = function(){
  document.getElementById("button").onclick = function() {
      var Price = document.getElementById("1").value;
      Line.data.labels.push('data'+Line.data.labels.length)
      var dataset = Line.data.datasets;
      for(var i=0; i<dataset.length; i++){
        dataset[i].data.push(Math.floor(Math.random() * Price));
      }
      myLineChart.update();

  };
};*/
/*
config.data.labels.splice(-1,1);
config.data.datasets.forEach(function(dataset) {
  dataset.data.pop();
});
myChart.update();*/