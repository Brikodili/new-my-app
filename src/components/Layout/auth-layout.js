import React from 'react';
import Footer from 'components/Footer';

export default function(props) {
    return (
        <>
            <header>
                <ul></ul>
            </header>
            {props.children}
            <Footer />
        </>
    )
}
