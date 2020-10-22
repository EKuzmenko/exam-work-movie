import React from 'react';
import {
    Link
} from "react-router-dom";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import DeathStarImg from '../Img/DeathStarImg.png';


function Menu() {
    return (
        <div className='menu'>
            <div>
                <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
                <Link to="/">Movies</Link>
            </div>
            <DropdownButton id="dropdown-basic-button" title="My Account">
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item href="/MyFavoritePage">My Favorite</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Menu;
