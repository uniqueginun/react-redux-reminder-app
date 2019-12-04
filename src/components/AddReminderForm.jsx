import React, { Component } from "react";
import { addReminder } from "../actions";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";

class AddReminderForm extends Component {
  state = {
    title: "",
    due: "",
    done: false,
    show: false
  };

  syncFormData = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.due === "" || this.state.title === "") {
      alert("all fields are required");
      return;
    }
    this.props.addReminder(this.state);
    setTimeout(() => {
      this.setState({ title: "", due: "", show: true });
    }, 50);
  };

  render() {
    return (
      <div
        style={{ fontFamily: "Mukta" }}
        className="row justify-content-center"
      >
        <SweetAlert
          show={this.state.show}
          title="Success"
          text="Reminder has been inserted successfully"
          onConfirm={() => this.setState({ show: false })}
        />

        <div className="card">
          <div className="card-body">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              className="form-inline"
            >
              <div className="form-group mb-2  mr-2">
                <label className="mr-1">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.syncFormData.bind(this)}
                />
              </div>
              <div className="form-group mb-2  mr-2">
                <label className="mr-1">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="due"
                  value={this.state.due}
                  onChange={this.syncFormData.bind(this)}
                />
              </div>
              <button type="submit" className="btn btn-success mb-2">
                Create Reminder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addReminder })(AddReminderForm);
