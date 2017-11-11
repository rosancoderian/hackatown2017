// @flow

import {Component} from 'react'
import firebase from 'firebase'

const iconStyle = {
  marginRight: '10px',
}

export default class FbLoginButton extends Component {
  state: {
    user: Object,
  }
  login: () => mixed
  logout: () => mixed
  constructor(props: Object) {
    super(props)
    this.state = {
      user: {},
    }
    this.login = async () => {
      let provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('public_profile')
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      let result = await firebase.auth().signInWithPopup(provider)
      this.setState({
        user: result.user
      })
    }
    this.logout = async () => {
      await firebase.auth().signOut()
      this.setState({
        user: {},
      })
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        })
      }
    })
  }
  render () {
    return <div>
      { !this.state.user.displayName ?
      <button type="button" class="btn btn-primary" style={{cursor: 'pointer'}} onClick={this.login}>
        <i class="fa fa-facebook-official" style={iconStyle}></i>Login With Facebook
      </button>
      :
      <div>
        <span style={{marginRight: '10px'}}>{this.state.user.displayName}</span>
        <button type="button" class="btn btn-primary" style={{cursor: 'pointer'}} onClick={this.logout}>
          Logout
        </button>
      </div>
      }
    </div>
  }
}
