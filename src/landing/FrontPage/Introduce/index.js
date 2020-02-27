import React, { Component } from 'react';
import './style.scss';

class Introduce extends Component{
    render() {
        return(
            <div className='introduce'>
                <div className='introduce-header'>
                    Swivel is an eCommerce platform that merges the needs of the Sellers and Buyers in one place
                </div>
                <div className='introduce-detail'>
                    Products, Orders, Customers and insights all in one place.
                </div>
            </div>
        )
    }
}

export default Introduce
