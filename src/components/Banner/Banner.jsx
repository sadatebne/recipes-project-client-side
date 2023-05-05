import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className='c-img'>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1681227222904-999593a56956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white fs-1'>Welcome To Recipe Burn Website</h3>
                        <p className='text-white fs-3'>If You are Glutton, We are here to serve delicious Recipe.. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.everydayhealth.com/images/healthy-dishes-to-order-at-indian-restaurants-1440x810.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className=' fs-1'>Best Indian Chefs</h3>
                        <p className='fs-3'>Here You can found Best Indian Chefs Recipes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/chicken-tikka-masala.jpg?quality=82&strip=1"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white fs-1'>Chicken Tikka Masala Most popular</h3>
                        <p className='text-white fs-3'>
                            Login Quick and Get Best Food Recipes
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;