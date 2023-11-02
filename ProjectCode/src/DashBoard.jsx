import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

import profileImage from './love.jpg';

const DashBoard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="position-absolute top-0 end-0 m-3 overlayDash">
            <div
                className="position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isDropdownOpen && (
                    <ul className="dropdown-menu dropdown-menu-start show" style={{ position: 'absolute', top: '100%', right: 0, zIndex: 1 }}>
                        <li><a className="dropdown-item" href="#">DashBoard</a></li>
                        <li><a className="dropdown-item" href="#">Private Rooms</a></li>
                        <li><a className="dropdown-item" href="#">Update Details</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                    </ul>
                )}
                <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '60px', height: '60px', objectFit: 'cover', cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export { DashBoard }; // Export DashBoard as a named export
