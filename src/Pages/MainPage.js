import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage () {
    return (
        <>
            <Menu />
            <MainContent />
        </>
    )
  }

export default MainPage;
