import React from 'react';
import CircelCharts from './ordersOverviewPeiCharts/CircelCharts';
import './revenue_report_orders_overview.scss'
import RevenueReport from './revenueReport_AreaCharts/RevenueReport';

const Main_section = () => {
    return (
        <div className=' reportSection  ' >
            {/* <CircelCharts></CircelCharts> */}
            <RevenueReport></RevenueReport>
            <CircelCharts></CircelCharts>
        </div>
    );
};

export default Main_section;