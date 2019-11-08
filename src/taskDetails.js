import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios'
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';

export default class TaskDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      tasks: [],
      tasksList:[]
		}
		// To use the 'this' keyword, we need to bind it to our function
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ taskName: e.target.value });
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getTaskData();
  }

  //Function to get the tasks Data from json
  getTaskData() {
    axios.get('assets/samplejson/taskslist.json').then(response => {
      this.setState({ tasks: [...response.data] })
    })
  };
  
  onSubmit(event) {
    if (!this.state.taskName) {return }
    event.preventDefault()
    this.setState({
      taskName: this.state.taskName,
      tasks: [ ...this.state.tasks, this.state.taskName]
    });
    this.setState({
      taskName: '',
    });
  }

  render() {
    return (
    <div className="taskdetails">
      <Panel bsStyle="info" className="">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Team To-Do List</Panel.Title>
            <h5 className="subtitle">Fri 09 November</h5>  

        </Panel.Heading>
          <Panel.Body>
            {
          this.state.tasks.map((item, index) =>
            <div className="individualTask">
              <input className="individualTaskCheckBox" key={index} type="checkbox" />
              <span className="taskName">{item}</span>
                <FaTrashAlt className="deleteIcon" onClick={() => {
                  let array = [...this.state.tasks];
                  let index = array.indexOf(item);
                  if (index !== -1) {
                    array.splice(index, 1);
                    this.setState({ tasks: array });
                  }
                }} />
            </div>
          )
        }
        <form className="addTaskForm" onSubmit={this.onSubmit}>
          <div className="addTask">
                <FaPlusCircle className="plusIcon" onClick={this.onSubmit}/>
            <input className="addTaskInput" value={this.state.taskName} placeholder ="Add a to-do" onChange={this.onChange} />
          </div>
        </form>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
