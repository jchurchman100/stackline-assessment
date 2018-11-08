import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

import ProductDetail from './product-detail';
import SalesChart from './sales-chart';
import SalesTable from './sales-table';

class App extends Component {
componentDidMount() {
  this.props.fetchData();
}

render() {
    const salesData = this.props.item.sales;

    return (
      <div>
        <ProductDetail item = {this.props.item}  />
        <SalesChart data = {salesData} />
        <SalesTable data = {salesData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { item : state.item };
}

export default connect(mapStateToProps, { fetchData })(App);