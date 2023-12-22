import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Contact Form</Link>
            </li>
            <li>
              <Link to="/contactList">Contact List</Link>
            </li>
          </ul>
        </nav>

        {/* <hr /> */}

        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contactList" element={<ContactList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
