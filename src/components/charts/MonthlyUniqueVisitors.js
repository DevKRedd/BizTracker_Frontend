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
      value: 1,
    },
    {
      key: 'Quarter 2',
      text: 'Quarter 2',
      value: 2,
    },
    {
      key: 'Quarter 3',
      text: 'Quarter 3',
      value: 3,
    },
    {
      key: 'Quarter 4',
      text: 'Quarter 4',
      value: 4,
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
  
  const quartermonthOptions = {
    1:[{
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
      }] ,
    2:[{
        key: 'Apr',
        text: 'Apr',
        value: 'Apr'
      },
      {
        key: 'May',
        text: 'May',
        value: 'May',
      },
      {
        key: 'Jun',
        text: 'Jun',
        value: 'Jun',
      }] ,
    3:[{
        key: 'Jul',
        text: 'Jul',
        value: 'Jul'
      },
      {
        key: 'Aug',
        text: 'Aug',
        value: 'Aug',
      },
      {
        key: 'Sep',
        text: 'Sep',
        value: 'Sep',
      }] ,
    4:[{
        key: 'Oct',
        text: 'Oct',
        value: 'Oct'
      },
      {
        key: 'Nov',
        text: 'Nov',
        value: 'Nov',
      },
      {
        key: 'Dec',
        text: 'Dec',
        value: 'Dec',
      }]
  }
  export default class MonthlyUniqueVisitors extends Component {
      
      state = {
          selectedQuarter: 'Quarter 1',
          quarter: '',
          month: '',
          year: '',
          uniqueVisitors: 0,
          displayType: '',
          newGraph: false,

      }
      handleChange = (e) => {
          
          this.setState({ [e.target.name]: e.target.value})
        }

      
      onDropdownChange = (e, { name, value }) => {
        let tempQuarter = (name === 'quarter'? value: this.state.selectedQuarter);
        value = (name === 'newGraph'? !this.state.newGraph : value);
        this.setState({ [name]: value, selectedQuarter: tempQuarter });
      }

      handleClick = (e) => {
        e.preventDefault()
        if (this.state.newGraph === true){
            let reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.token
                },
                body: JSON.stringify({
                    user_dashboards: {
                        dashboard_title: "Monthly Unique Visitors",
                        chart_type: this.state.displayType ,
                        quarter_number: this.state.quarter, 
                        user_id: 1
                    }
                })
            }
            fetch('http://localhost:3000/addData', reqObj)
            .then(r => r.json())
            .then(data => {
                    console.log(data)
                           
                });
        }
        

            // KPI fetch
            let hashMap = {
                "Jan":0, "Feb":1, "Mar":2, "Apr":3, "May":4, "Jun":5, "Jul":6, "Aug":7, "Sep":8, "Oct":9, "Nov":10, "Dec":11
            }

            let reqObj2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.token
                },
                body: JSON.stringify({
                    kpi_data: {
                        kpi: "Monthly Unique Visitors",
                        data_point: this.state.uniqueVisitors ,
                        date: new Date(this.state.year, hashMap[this.state.month], 1), 
                        user_id: 1
                    }
                })
            }
            fetch('http://localhost:3000/addKpiData', reqObj2)
            .then(r => r.json())
            .then(data => {
                    console.log(data)
                           
                })


      }

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
                            name='quarter'
                            onChange = {this.onDropdownChange}
                            />
                        <h4>Select Month</h4>
                        <Dropdown 
                            className= "muv_month_dropdown_container"
                            label= "Select Month"
                            placeholder='Month'
                            fluid
                            selection
                            options={quartermonthOptions[this.state.selectedQuarter]}
                            name='month'
                            onChange = {this.onDropdownChange}
                            />
                        <Form.Field className= "muv_month_dropdown_container">
                            <h4>Input Year</h4>
                            <input placeholder='Year' onChange= {this.handleChange} name= "year"/>
                        </Form.Field>
                        
                        <Form.Field>
                            <h4>Number of Unique Visitors This Month</h4>
                            <input placeholder='Unique Visitors' onChange= {this.handleChange} name= "uniqueVisitors" type= "number"/>
                        </Form.Field>
                    
                            <h4> Display Graph </h4>
                        <Form.Group widths='equal'>
                        <Form.Field>
                        Display Type: <b>{this.state.displayType}</b>
                        </Form.Field>
                        <Form.Field>
                        <Checkbox
                            radio
                            label='Bar Chart'
                            name='displayType'
                            value='Bar'
                            checked={this.state.displayType === 'Bar'}
                            onChange={this.onDropdownChange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <Checkbox
                            radio
                            label='Line Chart'
                            name='displayType'
                            value='Line'
                            checked={this.state.displayType === 'Line'}
                            onChange={this.onDropdownChange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <Checkbox
                            radio
                            label='Number'
                            name='displayType'
                            value='Number'
                            checked={this.state.displayType === 'Number'}
                            onChange={this.onDropdownChange}
                        />
                        </Form.Field>
                        </Form.Group>
                        <Form.Group>
                        <Form.Field>
                        <Checkbox
                            radio
                            label='Dont Display Graph'
                            name='displayType'
                            value='No Graph'
                            checked={this.state.displayType === 'No Graph'}
                            onChange={this.onDropdownChange}
                        />
                        </Form.Field>
                        </Form.Group>

                        <h4> This </h4>
                        <Form.Field>
                        <Checkbox
                            toggle
                            label='Create Graph'
                            name='newGraph'
                            checked={this.state.newGraph}
                            onChange={this.onDropdownChange}
                        />
                        </Form.Field>
                        
                        <Button onClick= {this.handleClick}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
