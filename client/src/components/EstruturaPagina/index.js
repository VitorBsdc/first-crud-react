import React from "react";
import Header from '../Header';
import Footer from '../Footer';
//import'bootstrap/dist/css/bootstrap.min.css';

const EstruturaPagina = (props) => {
    return (
        <section>
            <Header />
            {props.children}
            <Footer />
        </section>
    );
};

export default EstruturaPagina;