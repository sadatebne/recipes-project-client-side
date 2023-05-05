import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ViewChefs from '../ViewChefs/ViewChefs';
import Banner from '../Banner/Banner';
import RLMarquee from '../RLMarquee/RLMarquee';
import RecipeCategory from '../RecipeCategory/RecipeCategory';

const Chefs = () => {
    
    const [viewChefs, setViewChef]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/chefs')
        .then(res=>res.json())
        .then(data=>setViewChef(data))
        .catch(error=>{console.log(error)})
    },[])

    return (
        <Container>
            <Banner></Banner>
            <RecipeCategory></RecipeCategory>
            <h2 className='text-center fw-bold my-5'>OUR CHEFS</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                 {
                    viewChefs.map(viewChef=><ViewChefs key={viewChef.chefId} viewChef={viewChef}></ViewChefs>)
                 }
            </Row>
            <RLMarquee></RLMarquee>
        </Container>
    );
};

export default Chefs;