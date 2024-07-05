import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './Contacts.css';
import Result from './result';
import './result.css';

const decreaseBudget = () => {
  var budgetInput = document.getElementById("budget");
  var currentValue = parseInt(budgetInput.value) || 0;
  if (currentValue >= 100) { // Ensure the budget doesn't go below 0
    budgetInput.value = currentValue - 100; // Decrease by 100 (you can change this value as needed)
  }
}

const increaseBudget = () => {
  var budgetInput = document.getElementById("budget");
  var currentValue = parseInt(budgetInput.value) || 0;
  budgetInput.value = currentValue + 100; // Increase by 100 (you can change this value as needed)
}

const Home = () => (
  <div>
    <h4></h4>
    <h7>Build a plan in minutes...</h7>
    <div className="search-section">
      <h3>Select Direction</h3>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "#4caf50", color: "white" }} // Apply inline styles here
        >
          Select direction...
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">North</a></li>
          <li><a className="dropdown-item" href="#">South</a></li>
          <li><a className="dropdown-item" href="#">East</a></li>
          <li><a className="dropdown-item" href="#">West</a></li>
          <li><a className="dropdown-item" href="#">Central</a></li>
        </ul>
      </div>
      <h3>Budget</h3>
    </div>
    <div className="budget-section">
      <div className="budget-group">
        <button className="budget-button" onClick={decreaseBudget}>-</button>
        <input type="number" className="budget-input" id="budget" placeholder="Enter budget" />
        <button className="budget-button" onClick={increaseBudget}>+</button>
      </div>
    </div>
    <h3>Places To Visit</h3>
    <div className="checkbox-box">
      <div className="checkbox-container">
        <label><input type="checkbox" name="category" value="monuments" /> Monuments</label>
        <label><input type="checkbox" name="category" value="parks" /> Parks</label>
        <label><input type="checkbox" name="category" value="malls" /> Malls</label>
        <label><input type="checkbox" name="category" value="eating-outlets" /> Eating Outlets</label>
        <label><input type="checkbox" name="category" value="amusement-parks" /> Amusement Parks</label>
        <label><input type="checkbox" name="category" value="markets" /> Markets</label>
        {/* Add more checkboxes for additional categories */}
      </div>
    </div>
    <Link to="/result" className="results">Get Results</Link>
    
    
    <div className="destination-container">
    <br></br>
    <br></br>
    <br></br>
 
      <h2>Popular Destinations</h2>
      <div className="destination-row">
        <div className="destination-item">
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/11/full/1696998619-2089.jpg?im=FeatureCrop,size=(826,465)" alt="Destination 1" />
          <div className="destination-details">
            <h3>Akshardham</h3>
            <p>Price: <span className="price">Rs. 170</span></p>
            <p>Time spent: <span className="price">3-4 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="destination-item">
          <img src="https://lh3.googleusercontent.com/p/AF1QipOlgROHOBKwGoSZB7szzH5HctToxs-tfFBqf3ZK=s1360-w1360-h1020" alt="Destination 2" />
          <div className="destination-details">
            <h3>Lotus Temple</h3>
            <p>Price: <span className="price">Free</span></p>
            <p>Time spent: <span className="price">1-1.5 hour</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        {/* Additional Destinations */}
        <div className="destination-item">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/76/86/bc/fb-img-1470844421516.jpg?w=1200&h=1200&s=1" alt="Destination 3" />
          <div className="destination-details">
            <h3>Raj Ghat</h3>
            <p>Price: <span className="price">Free</span></p>
            <p>Time spent: <span className="price">2-3 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="destination-item">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d5/51/a1/sculpture-gallery.jpg?w=1200&h=-1&s=1" alt="Destination 4" />
          <div className="destination-details">
            <h3>National Museum</h3>
            <p>Price: <span className="price">Rs. 20</span></p>
            <p>Time spent: <span className="price">2-3 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        {/* End of Additional Destinations */}
      </div>
    </div>
    {/* Additional Rows */}
    <div className="destination-container">
      <div className="destination-row">
        <div className="destination-item">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/e0/7b/c2/picture-clicked-at-the.jpg" alt="India Gate" />
          <div className="destination-details">
            <h3>India Gate</h3>
            <p>Price: <span className="price">Free</span></p>
            <p>Time spent: <span className="price">1-2 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="destination-item">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=1200&h=1200&s=1" alt="Qutub Minar" />
          <div className="destination-details">
            <h3>Qutub Minar</h3>
            <p>Price: <span className="price">Rs. 35</span></p>
            <p>Time spent: <span className="price">1-2 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="destination-item">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c9/39/b3/humayun-s-tomb.jpg?w=1200&h=1200&s=1" alt="Humayun's Tomb" />
          <div className="destination-details">
            <h3>Humayun's Tomb</h3>
            <p>Price: <span className="price">Rs. 35</span></p>
            <p>Time spent: <span className="price">1-2 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="destination-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/India_Delhi_Jantar_Mantar_observatory_1.jpg/800px-India_Delhi_Jantar_Mantar_observatory_1.jpg" alt="Jantar Mantar" />
          <div className="destination-details">
            <h3>Jantar Mantar</h3>
            <p>Price: <span className="price">Rs. 35</span></p>
            <p>Time spent: <span className="price">1-2 hours</span></p>
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
    {/* End of Additional Rows */}
    <div className="newsletter">
      <div className="boxi">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest travel news and offers.</p>
        <input type="email" className="email" placeholder="Enter your email" />
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <header>
        <h1>Travel Companion</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
