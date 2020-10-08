import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage () {
    return (
        <>
        <Menu />
        <SelectedMovieContent />
        </>
    )
  }

export default SelectedMoviePage;
