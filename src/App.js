import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar.component';
import { Sidebar } from './components/Sidebar/Sidebar.component';
import { Tile } from './components/Tiles/Tiles.component';
import { Switcher } from './components/ContentSwitcher/Switcher.component';
import { Table } from './components/Table/Table.component';
import { Message } from './components/Message/Message.component';
import './css/main.css';
import './index.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
        <Navbar title="Aurecon">
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
              <Link to="/NewsEvents">News and Events</Link>
            </li>
          </ul>
        </Navbar>
        </header>
        <Route exact path="/" component={Portfolio} />
        <Route path="/newsevents" component={NewsEvents} />
      </Router>
    </div>
  );
}
function generateRow(i) {
  let name = 'Business';

  return {
    key: i,
    name,
    number: `${Math.floor(Math.random() * 20)}`,
  };
}
const tableRows = [];
for (let i = 0; i < 20; i += 1) {
  tableRows.push(generateRow(i));
}


  const tableHeaders = [
    { key: 'name', name: 'Category' },
    { key: 'number', name: '# of projects' },
  ];

function Portfolio() {
  return (
    <main className="columns">
        <aside className="container column">
          <div className="level">
            <div className="level-item">
            <Switcher
        items={['Programme', 'Region', 'Project']}
        onSelectItem=""
      />
            </div>
          </div>
        <Table rows={tableRows}
        headers={tableHeaders}
        pageSize={5}
        />
        <div className="level">
          <div className="level-item">
            <Tile  type="expandable"><h2>Up Coming Activities/Events</h2></Tile>
          </div>
        </div>
        <div className="level">
          <div className="level-item">
          <Tile type="expandable">
              <h2>Conversations</h2>
              <Message name="Alan McDonald" sentDateTime="30 minutes ago" profileImgSrc="./components/Message/avatar.jpg">First line of conversation from the thread here...</Message>
          </Tile>
          </div>
          
        </div>
        <div className="level">
          <Tile className="level-item" type="expandable"><h2>Documents</h2></Tile>
        </div>
        </aside>
        <div className="container column earth">
          <h2>map</h2>
        </div>  
      </main>
  )
}

function NewsEvents() {
  return (
    <main>
      <aside className="section">
        <div className="level">
          <h1>News and Events</h1>
        </div>
      </aside>
    </main>
  )
}

export default App;
