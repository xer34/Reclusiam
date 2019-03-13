import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import TodoForm from "./battletimerForm";
import TodoList from "./battletimerList";

import todoItems from "./items";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

// 'Fancy' theme - boilerplate styles for all components, as seen on our demo:
import "./styles.css";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
    console.log(this.state);
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }

  render() {
    const { auth } = this.props;
    //if not authorized redirect
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      //   <div className="container">
      //     <form className="white" onSubmit={this.handleSubmit}>
      //       <h5 className="grey-text text-darken-3">Create a New Project</h5>
      //       <div className="input-field">
      //         <input type="text" id='title' onChange={this.handleChange} />
      //         <label htmlFor="title">Project Title</label>
      //       </div>
      //       <div className="input-field">
      //         <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
      //         <label htmlFor="content">Project Content</label>
      //       </div>
      //       <div className="input-field">
      //         <button className="btn pink lighten-1">Create</button>
      //       </div>
      //     </form>
      //   </div>
      <div>
        <br />
        <Accordion accordion={false} className="container">
          <AccordionItem>
            <AccordionItemTitle className="pregame">
              <h5 className="white-text text-darken-3">PreGame</h5>
            </AccordionItemTitle>

            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>

          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="movement">
              <h5 className="white-text text-darken-3">Movement</h5>
            </AccordionItemTitle>

       <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="psychic">
              <h5 className="white-text text-darken-3">Psychic</h5>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>{" "}
          <AccordionItem>
            <AccordionItemTitle className="shooting">
              <h5 className="white-text text-darken-3">Shooting</h5>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="charge">
              <h5 className="white-text text-darken-3">Charge</h5>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="fight">
              <h5 className="white-text text-darken-3">Fight</h5>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="morale">
              <h5 className="white-text text-darken-3">Morale</h5>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div id="main">
                <TodoList
                  items={todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                />
                <TodoForm addItem={this.addItem} />
              </div>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
