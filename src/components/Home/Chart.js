
import ReactApexChart from 'react-apexcharts'

function Chart({data}){
    const chartData = {
        series: data,
          options: {
            chart: {
              height: 350,
              width: 1250,
              type: 'area',          
              toolbar: {
                show:false,
              },
            },
            dataLabels:{
                enabled:false
            },
            colors:['#eaaf49', '#4d90e0', '#b417d7'],
            stroke: {
              curve: 'smooth'
            },
            legend: {
                labels:{
                    colors: 'white'
                }
            },
            xaxis: {
              type: 'datetime',
              labels: {
                  style:{
                      fontSize:'15px',
                      colors:'grey'
                  },
                  format:'yy/MM'
              },
              categories: ["2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07"],
            },
            yaxis: {
                labels:{
                    style:{                    
                      fontSize:'15px',
                      colors:'grey'
                    }
                }
            },
            tooltip: {
              x: {
                format: 'yy/MM'
              },
              theme:'dark'
            },
        }
    }
    return (
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={chartData.options.chart.height} width={chartData.options.chart.width}/>
    )
}
export default Chart;
