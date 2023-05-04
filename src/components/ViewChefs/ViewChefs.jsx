import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const ViewChefs = ({ viewChef }) => {

    const { chefId, chefName, yearsOfExperience, numRecipes, likes, chefPicture, recipeId } = viewChef

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={chefPicture} style={{ height: '400px', objectFit: 'cover' }}/>
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                          Id: {chefId}
                        </Card.Text>
                        <Card.Text>
                          Experience: {yearsOfExperience} years
                        </Card.Text>
                        <Card.Text>
                          Number of Recipes: {numRecipes}
                        </Card.Text>
                        <Card.Text>
                          Likes: {likes}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/chefs/${chefId}`}><Button >View Recipes <FontAwesomeIcon icon={faRightLong} shake size="xl" /></Button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default ViewChefs;