import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyFavoriteContent from '../Elements/MyFavoriteContent'
import Menu from '../Elements/Menu'

function MyFavoritePage () {
    return (
        <>
        <Menu />
        <MyFavoriteContent />
        </>
    )
  }

export default MyFavoritePage;
