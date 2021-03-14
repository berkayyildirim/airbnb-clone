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
                    src="https://a0.muscache.com/im/pictures/b36f5864-2a51-4882-b4f9-43671a8b64d2.jpg?im_w=720"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/90c831e7-937a-4144-9336-c1a7efc8234b.jpg?im_w=720"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/bde14700-94c1-4107-85f9-c0ae3abb3140.jpg?im_w=720"
                    title="Entire Homes"
                    description="Comfortable private places with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/f7d720cf-37d5-4766-9639-d4283416ad43.jpg?im_w=720"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="£130/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/35c294e8-3c8e-4f99-8052-0b8322ad9739.jpg?im_w=720"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/f54c23f4-1677-432c-9d48-9a5666144d08.jpg?im_w=720"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
            </div>
        </div>
    )
}

export default Home;
