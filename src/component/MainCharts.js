import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import RadialChart from "./RadialChart";

const MainCharts = () => {
    return (
        <div className="chart">
            <div className="chart-flex">
                <LineChart />
                <BarChart />
            </div>
            <RadialChart />
        </div>
    );
};

export default MainCharts;
