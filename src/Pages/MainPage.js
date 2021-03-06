import React, { useState } from 'react';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage(props) {
    const [totItems, setTotItems] = useState(0)
    let { list, setList,
          page, setPage,
          setMovieId,
          setMovieEl,
          setCountModal,
          countModal
        } = props

    return (
        <>
            <Menu />
            <MainContent
                list={list}
                setList={setList}
                totItems={totItems}
                setTotItems={setTotItems}
                page={page}
                setPage={setPage}
                setMovieId={setMovieId}
                setMovieEl={setMovieEl}
                setCountModal={setCountModal}
                countModal={countModal}
            />
        </>
    )
}

export default MainPage;
