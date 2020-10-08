import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Menu() {
    return (
        <div className='menu'>
            <Link to="/">Movie</Link>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Account
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/">Main page</a>
                    <a class="dropdown-item" href="/myFavorite">My favorite</a>
                </div>
            </div>
        </div>
    )
}

export default Menu;
