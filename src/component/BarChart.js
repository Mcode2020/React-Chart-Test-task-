import React from 'react';
import Chart from "react-apexcharts";

const BarChart = () => {
    const barChartOptions = {
        chart: { type: "bar", background: "transparent", toolbar: { show: false } },
        plotOptions: {
            bar: {
                columnWidth: "75%",
                borderRadius: 8
            }
        },
        xaxis: {
            categories: ["2021", "2020", "2019"],
            labels: { style: { colors: "#FFFFFF", fontSize: "14px" } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { labels: { show: false } },
        grid: { show: false },
        dataLabels: { enabled: false }
    };

    const barChartSeries = [
        {
            name: "Values",
            data: [
                { x: "2021", y: 30, fillColor: "#a6a6a6" },
                { x: "2020", y: 50, fillColor: "#7044ea" },
                { x: "2019", y: 15, fillColor: "#a6a6a6" }
            ]
        }
    ];

    return (
        <div className="bar-chart">
            <Chart options={barChartOptions} series={barChartSeries} type="bar" width="250" height="280" />
        </div>
    );
};

export default BarChart;
