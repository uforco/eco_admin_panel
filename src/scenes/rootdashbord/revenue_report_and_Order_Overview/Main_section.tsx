import React from 'react';
import CircelCharts from './CircelCharts/CircelCharts';
import './revenue_report.scss'

const Main_section = () => {
    return (
        <div className=' reportSection  ' >
            {/* <CircelCharts></CircelCharts> */}
            <div className=' border  lineChart   ' ></div>
            <CircelCharts></CircelCharts>
        </div>
    );
};

export default Main_section;