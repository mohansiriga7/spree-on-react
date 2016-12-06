import React, { Component } from 'react';

import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
import ProductList from './product-list';
import HomeSlider from './home-slider';
import Loader from './shared/loader';
import Layout from './layout';

class HomePage extends Component {

  componentDidMount() {
    this.props.triggerInitialSetup(this.props.router.location.pathname);
  }

  render() {
    return (
      <Layout>
        <div className="home-page row">
          <HomeSlider />
          <div className={this.props.displayLoader ? "product-loader" : 'hide'}>
            <Loader displayLoader={this.props.displayLoader} />
          </div>

          <div className="row">
            <div className="col-md-12">
              <FilterBarConnector />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ProductList productList={ this.props.products }
                           loadMore={this.props.loadMore}
                           pageCount={this.props.pageCount}
                           currentPage={this.props.currentPage} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePage;
