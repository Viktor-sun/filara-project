import React, { Component } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import RegistrationForm from "./components/ContactForm";
import Carousel from "./components/Carousel";
import DataList from "./components/DataList";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ModalInfoOn from "./components/ModalInfoOn";
import "./App.css";
import * as info from "./info/infoByWorkers";

class App extends Component {
  state = {
    hasAccount: false,
    toggleRegistrationForm: true,
    showModal: false,

    getInfo: null,

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

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  handleOpenOverlay = (e) => {
    this.toggleModal();
    const infoFrom = e.target.id;
    this.setState({ getInfo: infoFrom });
  };

  handleCloseOverlay = () => {
    this.toggleModal();
    this.setState({ getInfo: null });
  };

  render() {
    const {
      toggleRegistrationForm,
      hasAccount,
      showModal,
      getInfo,
    } = this.state;
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

            <h1 className="heroTite">Работнички &#128516;</h1>
            <section className="App">
              <div className="name-wrapper name-wrapper__viktor">
                <button
                  type="button"
                  id="InfoFromViktor"
                  className="App__button-info"
                  onClick={this.handleOpenOverlay}
                >
                  тык
                </button>
                <h2 className="App__title">Витёчек &#128526;</h2>

                <p className="App__count">{nameViktor.length} часов</p>
                <Button
                  variant="primary"
                  id="viktor"
                  className="App__button"
                  onClick={this.handleOnClick}
                >
                  Добавить час
                </Button>
                <DataList name={nameViktor} />
              </div>

              <div className="name-wrapper name-wrapper__anna">
                <button
                  type="button"
                  id="InfoFromAnna"
                  className="App__button-info"
                  onClick={this.handleOpenOverlay}
                >
                  тык
                </button>
                <h2 className="App__title">Анчик &#128584;</h2>
                <p className="App__count">{nameAnna.length} часов</p>
                <Button
                  variant="primary"
                  id="anna"
                  className="App__button"
                  onClick={this.handleOnClick}
                >
                  Добавить час
                </Button>
                <DataList name={nameAnna} />
              </div>

              <div className="name-wrapper name-wrapper__andre">
                <button
                  className="App__button-info"
                  type="button"
                  id="InfoFromAndre"
                  onClick={this.handleOpenOverlay}
                >
                  тык
                </button>
                <h2 className="App__title">Андрюша &#128540;</h2>
                <p className="App__count">{nameAndre.length} часов</p>
                <Button
                  variant="primary"
                  id="andre"
                  className="App__button"
                  onClick={this.handleOnClick}
                >
                  Добавить час
                </Button>
                <DataList name={nameAndre} />
              </div>
            </section>
            <Footer />
            {showModal && (
              <Modal onCloseModal={this.handleCloseOverlay}>
                <ModalInfoOn
                  info={
                    getInfo === "InfoFromViktor"
                      ? info.infoByViktor
                      : getInfo === "InfoFromAnna"
                      ? info.infoByAnna
                      : info.infoByAndre
                  }
                />
              </Modal>
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
