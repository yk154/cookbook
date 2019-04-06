import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import "./signup.css"
import Navbar from "../navbar/navbar"

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
      token
      user {
        id
        username
        name
        email
      }
    }
  }
`

class SignUP extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    username: ""
  }

  render() {
    return (
      <div>
        <Mutation mutation={SIGNUP}>
          {signup => {
            return (
              <div>
                <form
                  className="signup-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    try {
                      const { data } = await signup({
                        variables: {
                          email: this.state.email,
                          password: this.state.password,
                          name: this.state.name,
                          username: this.state.username
                        }
                      })
                      localStorage.setItem("token", data.signup.token)
                      localStorage.setItem(
                        "username",
                        data.signup.user.username
                      )
                      this.props.history.push(`/`)
                    } catch (error) {
                      localStorage.removeItem("token")
                      localStorage.removeItem("username")
                    }
                  }}
                >
                  <div>
                    <Navbar history={this.props.history} className="navbar" />
                  </div>
                  <h1> Create an account </h1>
                  <div>
                    <input
                      id="name"
                      placeholder="name"
                      type="text"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      id="username"
                      placeholder="username"
                      type="text"
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      id="email"
                      placeholder="email"
                      type="text"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      placeholder="password"
                      type="password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>

                  <button type="submit" className="SubmitAccountButton">
                    Submit
                  </button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SignUP
