import React, { Component } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import RegistrationForm from "./components/ContactForm";
import Carousel from "./components/Carousel";
import DataList from "./components/DataList";

class App extends Component {
  state = {
    hasAccount: false,
    toggleRegistrationForm: true,

    exitsToJob: [],
  };

  componentDidMount() {
    const db = firebase.database();
    db.ref("exits").on("value", (elem) => {
      if (elem) {
        this.setState({ exitsToJob: Object.values(elem.val()) });
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ hasAccount: true });
      } else {
        // No user is signed in.
      }
    });
  }

  submitForm = (data) => {
    const { email, password } = data;

    if (this.state.toggleRegistrationForm) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.setState({ hasAccount: true }))
        .catch((e) => alert(e));
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.setState({ hasAccount: true }))
        .catch((e) => alert(e));
    }
  };

  handleOnClick = (e) => {
    const name = e.target.id;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const db = firebase.database();
    db.ref("exits").push({
      id: shortid.generate(),
      name,
      date: `Добавленно: ${time} ${date}`,
    });
  };

  getFilterByName = (name) => {
    if (this.state.exitsToJob) {
      return this.state.exitsToJob.filter((e) => e.name === name);
    }
  };

  handleToggleRegistrationButton = () => {
    this.setState((prevState) => {
      return { toggleRegistrationForm: !prevState.toggleRegistrationForm };
    });
  };

  render() {
    const { toggleRegistrationForm, hasAccount } = this.state;
    const nameViktor = this.getFilterByName("viktor");
    const nameAnna = this.getFilterByName("anna");
    const nameAndre = this.getFilterByName("andre");

    return (
      <>
        {!hasAccount ? (
          <>
            <Button
              variant="primary"
              onClick={this.handleToggleRegistrationButton}
            >
              {!toggleRegistrationForm ? "Зарегистрироваться" : "Войти"}
            </Button>
            <RegistrationForm
              onSubmit={this.submitForm}
              title={toggleRegistrationForm ? "Зарегистрироваться" : "Войти"}
            />
          </>
        ) : (
          <>
            <Carousel />
            <section>
              <div>
                <h2>Витёчек</h2>
                <p>{nameViktor.length}</p>
                <DataList name={nameViktor} />
                <Button
                  variant="primary"
                  id="viktor"
                  onClick={this.handleOnClick}
                >
                  Secondary
                </Button>
              </div>

              <div>
                <h2>Анчик</h2>
                <p>{nameAnna.length}</p>
                <DataList name={nameAnna} />
                <Button
                  variant="primary"
                  id="anna"
                  onClick={this.handleOnClick}
                >
                  Secondary
                </Button>
              </div>

              <div>
                <h2>Андрюша</h2>
                <p>{nameAndre.length}</p>
                <DataList name={nameAndre} />
                <Button
                  variant="primary"
                  id="andre"
                  onClick={this.handleOnClick}
                >
                  Secondary
                </Button>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

export default App;
