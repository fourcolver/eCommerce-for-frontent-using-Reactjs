import React, { Component } from 'react';
import { Input, Select } from 'antd';
import './style.scss';
const { Option } = Select;
const children = [];

class Condition extends Component{
  constructor(props) {
    super(props)
    this.state = {
      option: props.option,
      index: props.index
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.option !== this.props.option) {
      this.setState({
        option: this.props.option,
      });
    }
  }

  handleChange = (value) => {
    this.props.updateSubOption(this.state.index, value)
  }
  render() {
    const { option, index } = this.state;
    return(
      <div className='condition'>
        <div className='condition__head'>Option {index}</div>
        <div className='condition__body'>
          <Input onChange={(e) => this.props.updateOption(index, e)} value={option.option} className='col-3 mr-5'/>
          <Select value={option.sub_options} className='col-8' mode="tags" style={{ width: '100%' }}
                  placeholder="sub options" onChange={this.handleChange}>
          </Select>
        </div>
      </div>
    )
  }
}

export default Condition
