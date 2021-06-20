import React from 'react';
// components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

// import Input from '../components/Input';

import {Link} from 'react-router-dom';



export default function Home() {
    return (
        <React.Fragment>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            
        </React.Fragment>
    )
}
