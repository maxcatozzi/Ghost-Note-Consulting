import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        email: '',
        phoneNumber: ''
    }
  }

  handleChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(
      change
      , () => {
        console.log('name:', this.state.name);
        console.log('email:', this.state.email);
        console.log('phone number:', this.state.phoneNumber);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const message = {message: `This person would like you to get in contact with them! 
      Name: ${this.state.name} 
      Email: ${this.state.email} 
      Phone Number: ${this.state.phoneNumber}`};
    axios.post('http://localhost:5000/emails/send', message)
      .then(res => {
        alert('Your message was sent!');
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className='contactContent'>
        <h1>Shoot Me An Email!</h1>
        <form onSubmit={this.handleSubmit}>
          <div><input name='name' value={this.state.name} type='text' placeholder='Your Name' onChange={this.handleChange}></input></div>
          <div><input name='email' value={this.state.email} type='text' placeholder='Your Email' onChange={this.handleChange}></input></div>
          <div><input name='phoneNumber' value={this.state.phoneNumber} type='text' placeholder='Your Phone Number' onChange={this.handleChange}></input></div>
          <div><button type='submit'>Submit</button></div>
        </form>
      </div>

    );
  }
}

export default Contact;
