import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import TaskDetails from './taskDetails'
import Avatar from 'react-avatar';

export default class TODO extends Component {

  render() {
    return (<div className="addmargin">
      <div className="col-md-3">
          <Panel bsStyle="info" className="centeralign">
            <div className="avtarPanel"><Avatar name="Eeswar Kv" size={50} round="50px"/>
              <Panel.Title className="panel-title" componentClass="h3">Eeswar Krishnavarjula</Panel.Title>
            </div>
            <Panel.Body>
              <Button bsStyle="info" className="todobutton">
                Team To-Do List
              </Button>
            </Panel.Body>
          </Panel>
      </div>
      <div className="col-md-4">
        <TaskDetails/>
      </div>
    </div>)
  }

}
