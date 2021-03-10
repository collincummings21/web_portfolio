/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import ContactItem from '../Components/ContactItems';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5974.699394834738!2d-74.23228255837272!3d41.51836521315205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcd5edf541c9a7%3A0x68e5e43747a47d17!2s248%20Goodwill%20Rd%2C%20Montgomery%2C%20NY%2012549!5e0!3m2!1sen!2sus!4v1612481733068!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+845-231-3614'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'collin.cummmings@cortland.edu'} text2={'cjcummings248@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'248 Goodwill Rd, Montgomery NY'} text2={'United States'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;