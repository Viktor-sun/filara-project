import React, { Component } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";
// import RegistrationForm from "./components/ContactForm";
import Carousel from "./components/Carousel";
import DataList from "./components/DataList";

class App extends Component {
  state = {
    registration: null,
    exitsToJob: [
      { id: shortid.generate(), name: "viktor", date: "10.02.2021" },
      { id: shortid.generate(), name: "viktor", date: "11.02.2021 " },
      { id: shortid.generate(), name: "anna", date: "14.02.2021 " },
      { id: shortid.generate(), name: "andre", date: "14.05.2021 " },
      { id: shortid.generate(), name: "andre", date: "14.03.2021 " },
    ],
  };

  submitForm = (data) => {
    this.setState({ registration: data });
  };

  handleOnClick = (e) => {
    const name = e.target.id;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    this.setState((prevState) => {
      return {
        exitsToJob: [
          ...prevState.exitsToJob,
          {
            id: shortid.generate(),
            name,
            date: `Добавленно: ${time} ${date}`,
          },
        ],
      };
    });
  };

  getFilterByName = (name) => {
    if (this.state.exitsToJob) {
      return this.state.exitsToJob.filter((e) => e.name === name);
    }
  };

  render() {
    const nameViktor = this.getFilterByName("viktor");
    const nameAnna = this.getFilterByName("anna");
    const nameAndre = this.getFilterByName("andre");

    return (
      <>
        {/* <RegistrationForm onSubmit={this.submitForm} /> */}
        <Carousel />
        <section>
          <div>
            <h2>Витёчек</h2>
            <p>{nameViktor.length}</p>
            <DataList name={nameViktor} />
            <Button variant="primary" id="viktor" onClick={this.handleOnClick}>
              Secondary
            </Button>
          </div>

          <div>
            <h2>Анчик</h2>
            <p>{nameAnna.length}</p>
            <DataList name={nameAnna} />
            <Button variant="primary" id="anna" onClick={this.handleOnClick}>
              Secondary
            </Button>
          </div>

          <div>
            <h2>Андрюша</h2>
            <p>{nameAndre.length}</p>
            <DataList name={nameAndre} />
            <Button variant="primary" id="andre" onClick={this.handleOnClick}>
              Secondary
            </Button>
          </div>
        </section>
      </>
    );
  }
}

export default App;
