import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import TeamMembers from '../TeamMembers/TeamMembers';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div className='mx-[128px]'>
            <Banner></Banner>
            <Offers></Offers>
            <TeamMembers></TeamMembers>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;