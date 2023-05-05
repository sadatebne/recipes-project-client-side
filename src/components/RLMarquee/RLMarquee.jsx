import React from 'react';
import Marquee from "react-fast-marquee";

const RLMarquee = () => {
    return (
        <div className='my-5'>
            <h2 className='my-5 fw-bold text-center'>SPECIAL RECIPES</h2>
            <Marquee style={{ height:"200px", width:"100%"}}>
              <div>
              <img className='mx-3' src="https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg" alt="" style={{ height:"200px", width:"200px"}}/>
                <img src="https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg" alt="" style={{ height:"200px", width:"200px"}}/>
                <img className='mx-3' src="https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg" alt=""style={{ height:"200px", width:"200px"}}/>
                <img src="https://2.bp.blogspot.com/-boLikIePgQo/TcMPSUD8sSI/AAAAAAAAE7Q/8rt_2f8QwPc/w1200-h630-p-k-no-nu/_MG_2546.jpg" alt="" style={{ height:"200px", width:"200px"}} />
                <img className='mx-3' src="https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg" alt=""style={{ height:"200px", width:"200px"}}/>
                <img src="https://holycowvegan.net/wp-content/uploads/2021/01/best-chana-masala-recipe-homemade-delicious.jpg" alt=""style={{ height:"200px", width:"200px"}}/>
                
              </div>
            </Marquee>
        </div>
    );
};

export default RLMarquee;