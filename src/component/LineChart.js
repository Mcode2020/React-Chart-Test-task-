import React from 'react'
import Chart from "react-apexcharts";


const LineChart = () => {
    const lineChartOptions = {
        chart: { type: "line", background: "transparent", toolbar: { show: false } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#805AD5"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct"],
            labels: { style: { colors: "#FFFFFF" } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { min: 25, max: 29, tickAmount: 4, labels: { style: { colors: "#FFFFFF" } } },
        legend: { show: false }
    };

    const lineChartSeries = [{
        name: "Data", data: [26, 26.5, 27.8, 26.3, 26.9, 26.1, 28, 27, 26.4, 26.7]
    },
    { name: "Data", data: [26.2, 27, 26.3, 28.2, 26.5, 26.9, 26.1, 27.3, 26.8, 26.6] }];
    return (
        <div className="line-chart">
            <Chart options={lineChartOptions} series={lineChartSeries} type="line" width="500" height="350" />
        </div>
    )
}

export default LineChart