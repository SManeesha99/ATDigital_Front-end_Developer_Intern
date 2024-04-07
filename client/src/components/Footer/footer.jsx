import React from 'react';
import logo from '../../images/Logo.png';

function Footer() {
  return (
    <footer style={{ background: '#6B3CC9', color: '#fff', paddingTop: '20px', paddingBottom: '50px', marginTop:'30px', textDecoration:'none' }}>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col mb-8">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src={logo} alt="" />
            </a>
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>
          <div className="col mb-3" style={{ textAlign: 'right' }}>
            <h5>Our Technologies</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light">ReactJS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light">Gatsby</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light">NextJS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light">NodeJs</a></li> 
            </ul>
          </div>
            <div className="col mb-3" style={{ textAlign: 'right' }}>
                <h5>Our Service</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light" >Social media Marketing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light" >Web & Mobile App Development</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light" >Data & Analytics</a></li>
                </ul>
            </div>     
        </div>
        <div>
            <hr />
            <p className="text-center">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
