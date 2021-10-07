import React from 'react';
import coding from '../../images/coding.svg'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Developer = () => {
    return (
        <section className="col-lg-5 col-md-8 col-10 mx-auto" style={{ marginTop: 80, marginBottom: 100 }}>
            <img className="img-fluid" src={coding} alt="" />
            <p className="mt-4">Hi! My name is ARNOB and I am a Computer Science student . I used React Js and React Bootstrap to build this application. This is a simple course based app where users are meant to do courses by adding them to their class list. The Application is fully responsive for all devices and I also tried to implement some User Centred Design ideas to build an application with good UI/UX.</p>
            <small className="text-center fw-bold">#SoftwareEnthusiast</small>
            <br />

            

        </section>
    );
};

export default Developer;