import React, { Component } from 'react';
import Pagination from 'react-pagination-bootstrap';

 
export default class Paginate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 5
        };
    }
  
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
  
    render() {
        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={10}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}
 
 