import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import Card from '../components/Card';
import { BestSeller, NewProduct } from '../components/FeaturedProducts';


const HomePage = () => {

  return (
    <div className='home'>
      <div className='bans'>
        <div className='ban-1'>
          <div className='ban-t1'>
            <div>
              <h2>
                Incredible Prices
                on All Your
                Favorite Clothes
              </h2>
              <Link to='/products'>
                <button type="button" className="btn btn-warning" data-mdb-ripple-color="light">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='best-s'>
        <h3>New Arrival</h3>
        <BestSeller />
      </div>
      <hr className='h-line' />
      <div className='p-cats'>
        <h3>Best Seller</h3>
        <NewProduct />
      </div>

    </div>
  );
}

export default HomePage;
