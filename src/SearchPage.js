import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays •  26 august to 30 august • 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of Place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    TRooms and Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/a1a20d4b-200d-454d-ba5b-77260da1deca.jpg?im_w=960"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description= "1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/a1a20d4b-200d-454d-ba5b-77260da1deca.jpg?im_w=960"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description= "1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/a1a20d4b-200d-454d-ba5b-77260da1deca.jpg?im_w=960"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description= "1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
        </div>
    )
}

export default SearchPage
