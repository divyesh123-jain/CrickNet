import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <nav className="navbar">
            <div className="logo">CrickNet</div>
            <ul className="nav-links">
              <li>Home</li>
              <li>Products</li>
              <li>Resources</li>
            </ul>
            <div className="nav-actions">
              <button className="signup-btn">Sign Up</button>
              <button className="demo-btn">Book a Demo</button>
            </div>
          </nav>

          <header className="hero-section">
            <div className="content">
              <p className="badge-text">Cricket Match is now live!</p>
              <h1>Cricket embodies unity, passion, perseverance, and joy.</h1>
              <br />
              <br />
              <br />
              <br />

              <div className="cta-buttons">
                <button className="start-btn">Start for Free</button>
                <button className="talk-btn">Talk to Sales</button>
              </div>
              <br />

              <div className="trusted">
                <a href="#love-notes">Love Notes from Customers</a>
              </div>
            </div>

            <div className="card">
              <h3>Qualified</h3>
              <div className="card-details">
                <p>Interest in your products</p>
                <p className="price">$2,000</p>
                <p className="group">The Jackson Group</p>
                <div className="tags">
                  <span className="tag">Product</span>
                  <span className="tag">Information</span>
                </div>
                <div className="opportunities">
                  <h4>Delta PC: 10 Computer Desks</h4>
                  <p>$35,000</p>
                  <div className="actions">
                    <span className="status">Planned</span>
                    <button className="activity-btn">Call Jimmy</button>
                    <span className="due-date">Due in 2 days</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Home;
