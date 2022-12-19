import React from 'react';
import image from '../../assets/Traveller1.png'
import image1 from '../../assets/Boat.jpeg'
import Card from './Card'
import NavBar from '../Navbar';

function Blog() {
    return (
        <>
            <div>
                <NavBar />
                <Card
                    img={image}
                    tag1="Hill"
                    tag2='Travell'
                    title="How it feels when the hills call you ?"
                    dateTime="Nov 14, 2022 "
                    blogger="Chris Solerieu"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
                <Card
                    img={image1}
                    tag1='River'
                    tag2='Holy'
                    title="The Holy Days."
                    dateTime="Oct 10, 2022 "
                    blogger="Chris Evans"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
            </div>
        </>

    )
}
export default Blog;