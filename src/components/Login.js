import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends Component {

    state = {
        email: '', 
        password: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeToSignUp = () => {
        this.props.changeView('signup')
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
                    password: this.state.password
                }
            })
        }
        fetch('http://localhost:3000/api/v1/login', reqObj)
        .then(r => r.json())
        .then(data => {
                console.log(data)
                localStorage.setItem("token", data.jwt)
                localStorage.setItem("user", JSON.stringify(data.user))
                this.props.setUser(data.user)
                this.props.changeView('dashboard')                
            })
        }
            // debugger
            
    

    render() {
        console.log(this.props)
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => this.handleChange(e)} name='email'/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={e => this.handleChange(e)}
                        name= 'password'
                    />

                    <Button color='teal' fluid size='large' onClick= {this.handleSubmit} >
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a onClick={this.changeToSignUp} href='#'>Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
        )
    }
}
