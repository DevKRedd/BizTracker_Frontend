import React, { Component } from 'react'
import { 
    Dropdown, 
    Button,
    Checkbox,
    Form,
} from 'semantic-ui-react'
const quarterOptions = [
    {
      key: 'Quarter 1',
      text: 'Quarter 1',
      value: 'Quarter 1',
    },
    {
      key: 'Quarter 2',
      text: 'Quarter 2',
      value: 'Quarter 2',
    },
    {
      key: 'Quarter 3',
      text: 'Quarter 3',
      value: 'Quarter 3',
    },
    {
      key: 'Quarter 4',
      text: 'Quarter 4',
      value: 'Quarter 4',
    },
  ]

  
  const monthOptions = [
    {
      key: 'Jan',
      text: 'Jan',
      value: 'Jan'
    },
    {
      key: 'Feb',
      text: 'Feb',
      value: 'Feb',
    },
    {
      key: 'Mar',
      text: 'Mar',
      value: 'Mar',
    },
  ]

export default class TotalUsers extends Component {
     
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

  render() {
      return (
          <div>
              <div className= "muv_data_container">
                  <Form>
                  <h4>Select Quarter</h4>
                      <Dropdown
                          className= "muv_quarter_dropdown_container"
                          label= "Select Quarter"
                          placeholder='Quarter'
                          fluid
                          selection
                          options={quarterOptions}
                          />
                      <h4>Select Month</h4>
                      <Dropdown 
                          className= "muv_month_dropdown_container"
                          label= "Select Month"
                          placeholder='Month'
                          fluid
                          selection
                          options={monthOptions}
                          />
                      <Form.Field className= "muv_month_dropdown_container">
                          <h4>Input Year</h4>
                          <input placeholder='Year' />
                      </Form.Field>
                      
                      <Form.Field>
                          <h4>Total Users This Month</h4>
                          <input placeholder='Unique Visitors' />
                      </Form.Field>
                  
                          <h4> Display Graph </h4>
                      <Form.Group widths='equal'>
                      <Form.Field>
                      Display Type: <b>{this.state.value}</b>
                      </Form.Field>
                      <Form.Field>
                      <Checkbox
                          radio
                          label='Bar Chart'
                          name='checkboxRadioGroup'
                          value='Bar'
                          checked={this.state.value === 'Bar'}
                          onChange={this.handleChange}
                      />
                      </Form.Field>
                      <Form.Field>
                      <Checkbox
                          radio
                          label='Line Chart'
                          name='checkboxRadioGroup'
                          value='Line'
                          checked={this.state.value === 'Line'}
                          onChange={this.handleChange}
                      />
                      </Form.Field>
                      <Form.Field>
                      <Checkbox
                          radio
                          label='Number'
                          name='checkboxRadioGroup'
                          value='Number'
                          checked={this.state.value === 'Number'}
                          onChange={this.handleChange}
                      />
                      </Form.Field>
                      </Form.Group>
                      <Form.Group>
                      <Form.Field>
                      <Checkbox
                          radio
                          label='Dont Display Graph'
                          name='checkboxRadioGroup'
                          value='No Graph'
                          checked={this.state.value === 'No Graph'}
                          onChange={this.handleChange}
                      />
                      </Form.Field>
                      </Form.Group>
                      
                      <Form.Field control={Button}>Submit</Form.Field>
                  </Form>
              </div>
          </div>
      )
  }
}
