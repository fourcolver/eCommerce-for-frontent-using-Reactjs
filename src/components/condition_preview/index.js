import React, { Component } from 'react';
import { Input } from "antd";
import './style.scss';

class ConditionPreview extends Component{
  constructor(props) {
    super(props);
    this.state = {
        variants: props.variants
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.variants !== this.props.variants) {
      this.setState({
        variants: this.props.variants
      })
    }
  }

  render() {
    const { variants } = this.state;
    return(
      <div className='c_preview'>
        <table>
          <thead>
            <th>Variant</th>
            <th>Price</th>
            <th>Quality</th>
            <th>SKU</th>
            <th></th>
          </thead>
          <tbody>
            {
              variants.map((variant, index) => {
                return (
                  <tr key={index}>
                    <td className='c_preview__variant'>
                      {
                        variant.map((v, index) => {
                          return(
                            <span key={index}>
                              {
                                index !== 0 && (
                                  <span>/</span>
                                )
                              }
                              {v}
                            </span>
                          )
                        })
                      }
                    </td>
                    <td>
                      <Input size="small"/>
                    </td>
                    <td>
                      <Input size="small"/>
                    </td>
                    <td>
                      <Input size="small"/>
                    </td>
                    <td></td>
                  </tr>
                 )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ConditionPreview