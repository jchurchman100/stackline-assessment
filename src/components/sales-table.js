import React from 'react';

function renderRow(sale) {
    const weekEnding = sale.weekEnding;
    const retailSales = sale.retailSales;
    const wholesaleSales = sale.wholesaleSales;
    const unitsSold = sale.unitsSold;
    const retailerMargin = sale.retailerMargin;

    // const {weekEnding, retailSales, 
    //     wholesaleSales, unitsSold, retailerMargin} = sale;

    return (
        <tr key = {weekEnding}>
            <td>{weekEnding}</td>
            <td>${retailSales}</td>
            <td>${wholesaleSales}</td>
            <td>{unitsSold}</td>
            <td>{retailerMargin}</td>
        </tr>
    )
}

const SalesTable = (props) => {
    if(!props.data){
        return <div>Loading</div>
    }

    return(
        <div className = "sales-table col-md-8">
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>WEEK ENDING</th>
                        <th>RETAIL SALES</th>
                        <th>WHOLESALE SALES</th>
                        <th>UNITS SOLD</th>
                        <th>RETAILER MARGIN</th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map(renderRow)}
                </tbody>
            </table>
        </div>
    )
}

export default SalesTable;