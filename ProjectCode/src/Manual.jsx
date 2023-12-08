import React, { useState } from 'react';
import "./Manual.css";
import movementImage from './movement.png';
import teleportImage from "./teleport.png";
import exploreImage from "./exploring.png";
import interactingImage from "./interacting.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import the instruction manual icon
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

export default function Manual() {
    const [showManual, setShowManual] = useState(false);

    const toggleManual = () => {
        setShowManual(!showManual);
    };

    return (
        <div className='con'>
            <button onClick={toggleManual} className="instruction-button">
                <FontAwesomeIcon icon={faBook} className="icon" /> Instruction Manual
            </button>

            {showManual && (
                <div className="carousel-container">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={movementImage} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={exploreImage} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h5>To Explore</h5>
                                    <p>While exploring the campus, hover the pointer cursor on the building to know its details</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={teleportImage} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h5>Teleport</h5>
                                    <p>Use the blue rings to enter/exit any building/room.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={interactingImage} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h5>Interacting with objects</h5>
                                    <p>For Name - Hover the pointer on the object to get the name.</p>
                                    <p>For Details - Click the pointer on the object to get the details.</p>
                                    <p>To rotate - Press ESC and then use the cursor to rotate the object.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
