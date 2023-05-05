      //>>>>>>>>...........Another Option..........<<<<<<<<<<<<<<<<<

import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowRecipes from '../ShowRecipes/ShowRecipes';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const LoadRecipes = () => {
    const recipes = useLoaderData();
    const { id } = useParams();
    //console.log(id)

    const [viewChefs, setViewChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chefs')
        .then(res => res.json())
        .then(data => setViewChef(data))
        .catch(error => console.log(error))
    }, []);

    const v = viewChefs.length > 0 ? viewChefs.find(viewChef => parseInt(viewChef.chefId) === parseInt(id)) : null;

    return (
        <Container>
            <div style={{backgroundColor:'lightblue'}} className='mt-3'>
                {
                    // Conditionally render chef info based on whether v is truthy
                    v ? (
                    <div className='d-flex flex-column flex-lg-row justify-content-lg-around align-items-lg-center gap-4'>
                        <>
                          <img src={v.chefPicture} style={{ height: "400px", width: "100%" }}/>
                        </>
                      <div className='text-center'>
                          <h2 className='p-2'>{v.chefName}</h2>
                          <h5 className='p-2'>Number of Recipe: {v.numRecipes}</h5>
                           <p><span className='fw-bold'>Bio : </span>{v.bio}</p>
                           <p className=''><span className='fw-bold'>Experience: </span> {v.yearsOfExperience} years
                           </p>
                         <p className=''> <span className='fw-bold'>Likes:</span> {v.likes} <FontAwesomeIcon icon={faThumbsUp} beat style={{color: "#005cfa",}} /></p>
                      </div>
                    </div>
                    ) : (
                      <p>No chef found with ID {id}</p>
                    )
                }
            </div>
            <div className='mt-5 '>
                <h1 className='text-center'>Chef Delicious Recipes</h1>
             {
                recipes.map(recipe=><ShowRecipes key={recipe.recipeId} recipe={recipe}></ShowRecipes>)
             }
            </div>
            
        </Container>
    );
};

export default LoadRecipes;



// .......................Error....................................

// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import ShowRecipes from '../ShowRecipes/ShowRecipes';

// const LoadRecipes = () => {
//     const recipes=useLoaderData();
//     const { Id }=useParams();
//     console.log(Id)

//     //............
//     const [viewChefs, setViewChef]=useState([])

//     useEffect(()=>{
//         fetch('http://localhost:3000/chefs')
//         .then(res=>res.json())
//         .then(data=>setViewChef(data))
//         .catch(error=>{console.log(error)})
//     },[])

//     const v = viewChefs.length > 0 ? viewChefs.find(viewChef => parseInt(viewChef.chefId) === parseInt(Id)) : null;

//     // const {recipeId, recipeName, ingredients, instructions, imageURL}=recipes
//     //console.log(recipes)
//     return (
//         <div>
//             <div>
//                 {         
//                        // Conditionally render chef info based on whether v is truthy
//                         v ? (
//                           <>
//                             <h2>{v.chefName}</h2>
//                             <img src={v.chefImgUrl} />
//                             <p>{v.chefBio}</p>
//                           </>
//                         ) : (
//                           <p>No chef found with ID {Id}</p>
//                         )
                       
                     
//                 }
//             </div>
//             {
//                 recipes.map(recipe=><ShowRecipes key={recipe.recipeId} recipe={recipe}></ShowRecipes>)
//             }
//         </div>
//     );
// };

// export default LoadRecipes;
