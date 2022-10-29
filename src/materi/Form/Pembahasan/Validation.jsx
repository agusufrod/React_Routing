import React from 'react';
import * as Validator from 'validatorjs';

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label> {label}: </label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: 'red', marginLeft: '-20px' }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

const style = {
  width: '400px',
  margin: '100px auto 0',
  border: '1px solid black',
  padding: '10px',
};

class Validation extends React.Component {
  state = {
    email: '',
    password: '',
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    let message = [];

    let data = { email, password };

    let rules = {
      email: 'required|email',
      password: 'min:8|required',
    };

    let Validation = new Validator(data, rules);
    Validation.passes();
    message = [...Validation.errors.get('email'), ...Validation.errors.get('password')];

    if (message.length > 0) {
      this.setState({ errors: message });
    } else {
      alert(`
    nama: ${this.state.email}
    jurusan: ${this.state.password}
    `);
      this.setState({ errors: [] });
    }

    // let message = [];
    // if (email.length === 0) {
    //   message = [...message, 'Email tidak boleh kosong'];
    // }

    // if (password.length === 0) {
    //   message = [...message, 'Password tidak boleh kosong'];
    // }

    // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if re(!re.test(String(email).toLowerCase())) {
    //   message = [...message, 'email tidak valid']
    // }

    // if (password.length < 8) {
    //   message = [...message, 'password terlalu pendek']
    // }
    // if (message.length > 0) {
    //   this.setState(
    //     {
    //       errors: message,
    //     },
    //     () => console.log(this.state.errors)
    //   );
    // }
    // else {
    //   alert(`
    // nama: ${this.state.email}
    // jurusan: ${this.state.password}
    // `);

    //   this.setState({
    //     errors: []
    //   })

    // }
  };

  render() {
    return (
      <div style={style}>
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h4>Login Page</h4>
        <form onSubmit={this.handleSubmit}>
          <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
