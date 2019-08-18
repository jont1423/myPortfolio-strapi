import React from "react";
import Sidebar from "react-sidebar";
import './navbar.css';

const styles = {
  content: {
    padding: "0 0 25vh 0",
    color: "#b31e1f",
    background: "#3F284F",
    width: "7vw",
  },
  content_middle: {
  	padding: "0 0 50vh 0",
    color: "#b31e1f",
    background: "#5A5A5A",
    width: "7vw",
  },
  content_bottom: {
  	padding: "0 0 25vh 0",
    color: "#b31e1f",
    background: "#3F284F",
    width: "7vw",
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={
        	<div>
        		<div style={styles.content}></div>
        		<div style={styles.content_middle}></div>
        		<div style={styles.content_bottom}></div>
        	</div>
    
    }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
      </Sidebar>
    );
  }
}

export default App;
