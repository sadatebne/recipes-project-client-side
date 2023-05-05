import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const RecipeCategory = () => {
    return (
        <Container>
            <Row>
                <h2 className='my-5 fw-bold text-center'>Recipe Categories</h2>
              <Col lg={3}>
                <Image src="https://holycowvegan.net/wp-content/uploads/2021/01/best-chana-masala-recipe-homemade-delicious.jpg" roundedCircle style={{ height:"200px", width:"200px"}}/>
                </Col>
                <Col lg={3}>
                <Image src="https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg" roundedCircle style={{ height:"200px", width:"200px"}}/>
                </Col>
                <Col lg={3}>
                <Image src="https://2.bp.blogspot.com/-boLikIePgQo/TcMPSUD8sSI/AAAAAAAAE7Q/8rt_2f8QwPc/w1200-h630-p-k-no-nu/_MG_2546.jpg" roundedCircle style={{ height:"200px", width:"200px"}}/>
                </Col>
                <Col lg={3}>
                <Image src="https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg" roundedCircle style={{ height:"200px", width:"200px"}}/>
                </Col>
                
            </Row>
        </Container>
    );
};

export default RecipeCategory;