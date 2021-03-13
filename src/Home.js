import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets to do "rfce"

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/18cf5f05-0318-430a-8c0d-7e8b4a056c7c.jpg?im_w=1440"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/18cf5f05-0318-430a-8c0d-7e8b4a056c7c.jpg?im_w=1440"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/18cf5f05-0318-430a-8c0d-7e8b4a056c7c.jpg?im_w=1440"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts."
                />
            </div>
            <div className="home__section">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home;
