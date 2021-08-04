import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    accessToken: '',
  }

  componentClicked = () => {
    console.log('clicked');
  }

  responseFacebook = (response) => {
    // console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      accessToken: response.accessToken,
      picture: response.picture.data.url,
      email: response.email
    })
    console.log(this.state);
  }

  render() {
    let fbContent;

    if (!this.state.isLoggedIn) {
      fbContent = (
        <FacebookLogin
          appId="4258156350889899"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />
      )
    } else {
      fbContent = (
        <div style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px"
        }}>
          <img src={this.state.picture} alt={this.state.name}/>
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      )
    }
    return (
      <div>{fbContent}</div>
    )
  }
}