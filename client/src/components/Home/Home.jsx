import React, { useState } from 'react';
import './Home.css';
import image from '../../images/image 2.png';
import image1 from '../../images/image 1.png';

function Home() {
    const [active, setActive] = useState(null);

    const toggle = (e) => {
        if (active === e) {
            return setActive(null);
        }
        setActive(e);
    };

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <div className="card-body">
                            <h5 className="card-title">Web & Mobile App Development</h5>
                            <p className="card-text">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{ marginTop: '50px' }}>
                <div className="row g-0">
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title">Digital Strategy Consulting</h5>
                            <p className="card-text">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={image1} className="img-fluid rounded-start" alt="..." style={{ float: 'right' }} />
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '50px', width: '846px' }}>
                <p className="title">Frequently asked questions</p>
                <div className="accordion">
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(1)}>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                            <span>{active === 1 ? '-' : '+'}</span>
                        </div>
                        <div className={`content ${active === 1 ? 'show' : ''}`}>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(2)}>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                            <span>{active === 2 ? '-' : '+'}</span>
                        </div>
                        <div className={`content ${active === 2 ? 'show' : ''}`}>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(3)}>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                            <span>{active === 3 ? '-' : '+'}</span>
                        </div>
                        <div className={`content ${active === 3 ? 'show' : ''}`}>
                            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
