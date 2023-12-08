import React, { useState } from 'react';
import "./Menu.css"
import movementImage from './movement.png';
import teleportImage from "./teleport.png";
import exploreImage from "./exploring.png";
import interactingImage from "./interacting.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import the instruction Menu icon
export default function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div>
            <button onClick={toggleMenu} className="instruction-button" >
                <FontAwesomeIcon icon={faBook} className="icon" /> Instruction Menu
            </button>

            {showMenu && (
                <div className="carousel-container">
                <div id="carouselExampleCaptions" class="carousel slide" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={movementImage} class="d-block w-100 " alt="..." />

                        </div>
                        <div class="carousel-item">
                            <img src={exploreImage} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <h5>To Explore</h5>
                                <p>While exloring the campus, Hover the pointer cursor on the building to know its details</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={teleportImage} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <h5>Teleport</h5>
                                <p>Use the blue rings to enter/exit any building/room.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={interactingImage} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <h5>Interacting with objects</h5>
                                <p>For Name - Hover the pointer on the object to get the name.</p>
                                <p>For Details - Click the pointer on the object to get the Details.</p>
                                <p>To rotate - Press ESC and then use the cursor to rotate the object.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
             

            )}
       </div>
)
}


