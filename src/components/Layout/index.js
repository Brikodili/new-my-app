import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function(props) {
  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
