import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';




export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }

  
  handleClose() { 
    this.setState({open: false}) 
  };

  handleToggle() {
    this.setState({open: !this.state.open})
  };

  render() {
    return (
      <div>
        <RaisedButton
          label="Menu"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>HOME</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>ABOUT</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>WORK</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>EDUCATION</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>SKILLS</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>PORTFOLIO</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>REFERENCES</MenuItem>
        </Drawer>
      </div>
    );
  }
}