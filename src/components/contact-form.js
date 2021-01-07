import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/f/mqkgwqpa" method="POST" className="contact-form">
        <div className="form-group">
          <label for="#form-email">Email:</label>
          <input type="email" name="email" placeholder="you@example.com" className="form-control" id="form-email"/>
        </div>
        <div className="form-group">
          <label for="#form-message">Message:</label>
          <textarea id="form-message" name="message" cols="30" rows="10" className="form-control" placeholder="Write Away..."></textarea>
        </div>
        {status === "SUCCESS" ? <p className="success-text">Message Sent!</p> : <button className="btn btn-outline-warning form-control">Submit</button>}
        {status === "ERROR" && <p className="error-text">Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
