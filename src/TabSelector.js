import React, { Component } from 'react';

class TabSelector extends Component {


  render() {
    console.log(this.props)
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
