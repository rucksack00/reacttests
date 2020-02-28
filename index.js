import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styl.module.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      użytkownik: '',
      wiek: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "wiek") {
      if (val !="" && !Number(val)) {
        err = <strong className={styles.wrong}>Wiek musi być liczbą</strong>;
      }
	  else { if (val !="" && Number(val)){
		err = <strong className={styles.ok}>Dzięki</strong>;
	  }}
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Witam {this.state.użytkownik} {this.state.wiek}</h1>
      <p>Wpisz swoje imię:</p>
      <input
        type='txt'
        name='użytkownik'
        onChange={this.myChangeHandler}
      />
      <p>Wpisz swój wiek:</p>
      <input
        type='text'
        name='wiek'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));