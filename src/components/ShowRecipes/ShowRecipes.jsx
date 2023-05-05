import React, { useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';


const ShowRecipes = ({ recipe }) => {

    const [fav, setFav] = useState(false)

    const handleFav = () => {
        setFav((fav) => !fav)
        toast("Wow so it's your favorite recipe !");
    }

    const { recipeId, recipeName, ingredients, instructions, imageURL, rating } = recipe
    //console.log(recipe)
    return (
        <Container >
            {/* <div className='d-flex flex-column flex-md-row gap-4 mt-4'>
               <div>
                    <img src={imageURL} alt="" style={{ height: '300px', width: '350px' }} />
                </div>
                <div>
                    <h2>Recipe Name: {recipeName}</h2>
                    <h3>Recipe Id: {recipeId}</h3>
                    <p>Ingredients: {ingredients}</p>
                    <p>Instructions: {instructions}</p>
                    <Button onClick={handleFav} variant="outline-success" disabled={fav} >Favorite <FontAwesomeIcon icon={faHeart} beat size="lg" style={{color: "#ff0000",}} />
                    </Button>

                </div> 
            </div> */}
            <CardGroup>
                <Card className='mt-5'>
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{recipeName}</Card.Title>
                        <h6>Ingredients</h6>
                        <Card.Text>
                            {ingredients}
                        </Card.Text>
                        <h6>Cooking Methods</h6>
                        <Card.Text>
                            {instructions}
                        </Card.Text>
                        <Card.Text>
                           Rating: {rating}
                        </Card.Text>
                        <Card.Text>
                        <Button onClick={handleFav} variant="outline-success" disabled={fav} >Favorite <FontAwesomeIcon icon={faHeart} beat size="lg" style={{color: "#ff0000",}} />
                    </Button>
                        </Card.Text>
                    </Card.Body>
                    
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default ShowRecipes;