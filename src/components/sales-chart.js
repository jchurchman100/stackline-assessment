import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
import React from 'react';

const SalesChart = (props) => {
    if(!props.data){
        return <div>Loading</div>
    }

    const retails = props.data.map(sale => sale.retailSales)

    return (
        <div className = "sales-chart col-md-8">
            <Sparklines title = "Retail Sales" height = {350} width = {1000} data = {retails}>
                <SparklinesLine color = "blue" />
            </Sparklines>
        </div>
    )
}

export default SalesChart;