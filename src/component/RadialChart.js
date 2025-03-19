import React from 'react'
import Chart from "react-apexcharts";

const RadialChart = () => {
    const options = {
        chart: {
            type: "donut",
            background: "transparent",
            events: {

            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                },
            },
        },
        colors: ["#6D4AFF", "#9d6dd5", "#8048e7", "#303030"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
    };

    const series = [50, 20, 20, 13]
    return (
        <div className='radial-chart'>
            <Chart options={options} series={series} type="donut" width="300" height="300" />
            <svg
                width="300"
                height="300"
                style={{
                    position: "absolute",
                    top: 20,
                    pointerEvents: "none",
                }}
            >
                <circle r="91.2" cx="150" cy="150" fill="#281a4d"></circle>
            </svg>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                }}
            >
                73%
            </div>
        </div>
    )
}

export default RadialChart