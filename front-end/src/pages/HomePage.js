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

      <section id="features">
        <div class="row features">
            <div class="fea col-lg-4">
                <i class="icon fa-solid fa-check fa-4x"></i>
                <h3>Easy to use</h3>
                <p>So easy to use, its only take seconds</p>
            </div>
            <div class="fea col-lg-4">
                <i class="icon fa-solid fa-shirt fa-4x"></i>
                <h3>Stylish</h3>
                <p>All kinds of styles are avalible</p>
            </div>
            <div class="fea col-lg-4">
                <i class="icon fa-solid fa-money-check-dollar fa-4x"></i>
                <h3>Money back Guarantee</h3>
                <p>You can return our products in 48 hours</p>
            </div>
        </div>
    </section>

      <div className='best-s'>
        <h3>New Arrival</h3>
        <BestSeller />
      </div>
      <hr className='h-line' />
      <div className='p-cats'>
        <h3>Best Seller</h3>
        <NewProduct />
      </div>

      <section id="cta">

      <h3 class="find" style={{color: "black"}}>Screw fast fashion, <br /> shop secondhand</h3>
      <Link to='/products'>
      <button type="button" class="btn btn-dark">Shop now</button>
      </Link>
      </section>
    </div>
  );
}

export default HomePage;
