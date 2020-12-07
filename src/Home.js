import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg" alt=""/>
        
    
            <div className="home__row">
                    <Product 
                    id="21351351531"
                    title="The body: a guide for occupants" 
                    image="https://m.media-amazon.com/images/I/51LMZBNahWL._SY346_.jpg" 
                    price={15.99} 
                    rating={4} 
                    />

                    <Product 
                    id="6544685465"
                    title="Simple Mobile Samsung Galaxy A10e 4G LTE Prepaid Smartphone (Locked) - Black - 32GB" 
                    image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UY218_.jpg" 
                    price={86.99} 
                    rating={5} 
                    />

            </div>

            <div className="home__row">
                    <Product 
                    id={1}
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display" 
                    image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg" 
                    price={464.99} 
                    rating={4} 
                    />

                    <Product 
                    id="456465468"
                    title="BalanceFrom Colored Neoprene Coated Dumbbell Set with Stand" 
                    image="https://images-na.ssl-images-amazon.com/images/I/41dztshKZtL._AC_US160_.jpg" 
                    price={238.99} 
                    rating={5} 
                    />

                    <Product 
                    id={1}
                    title="X-PROTECTOR Premium Two Colors Pack Furniture Pads 133 Piece! " 
                    image="https://m.media-amazon.com/images/I/615UpUdraWL._AC_UL320_.jpg" 
                    price={19.99} 
                    rating={5} 
                    />

            </div>
            <div className="home__row">
                    <Product 
                    id="15564164"
                    title='LG 77" Class ZX Series OLED 8K UHD Smart webOS TV with Amazon Smart Plug' 
                    image="https://m.media-amazon.com/images/I/91m-5dlKF0L._AC_UY218_.jpg" 
                    price={3499.99} 
                    rating={5} 
                    />

            </div>

            


        
        </div>
    )
}


export default Home
