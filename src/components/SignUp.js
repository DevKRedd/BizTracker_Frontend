import React, { Component } from "react";
import { Button, Form, Grid, Header, Image } from 'semantic-ui-react'

export default class SignUp extends Component {

    state = {
        
        firstName: '',
        lastName: '',
        email: '', 
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                    bio: '',
                    avatar: 'https://images.creativemarket.com/0.1.0/ps/270552/1360/906/m1/fpnw/wm1/ywsqng3enzx0tnc7usiamfdrfkkfdjomensdxbh8tkljzkkdh0ezvqnicbjjuttp-.jpg?1418479999&s=9207a2e80236dbd5dff8493556726e37',
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    company_name: ''
                }
            })
        }
        fetch('http://localhost:3000/api/v1/signup', reqObj)
        .then(r => r.json())
        .then(data => {
            // debugger
                console.log(data)
                localStorage.setItem("token", data.jwt)
                this.props.setUser(data.user)
                this.props.changeView('login')
            }) 
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 800 }}>
            <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> SignUp With Us
                </Header>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group unstackable widths={2}>
                <Form.Input label='First name' placeholder='First name' name='firstName' onChange={e => this.handleChange(e)} />
                <Form.Input label='Last name' placeholder='Last name' name="lastName" onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Form.Group widths={2}>
                <Form.Input label='Email' placeholder='Email' name='email' onChange={e => this.handleChange(e)}/>
                <Form.Input  
                                    fluid
                                    label='Password'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password' 
                                    name='password'
                                    onChange={e => this.handleChange(e)}/>
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Button color='teal' fluid size='large' type='submit'>Submit</Button>
            </Form>
            </Grid.Column>
            </Grid>
        );
    }
}
