import React from 'react';

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
              <button type="button" class="btn btn-warning" data-mdb-ripple-color="light">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='best-s'>
        <div>
          <h3>Best Sellers</h3>
          <div className='best-its'>
            {/* will be updated after product request handled */}
            <div className='best-it'>
              <div className='best-it-image'></div>
              <p className='best-it-name'></p>
              <p className='best-it-price'></p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-cats'>
        <div>
          <h3>Shop by Category</h3>
          <div className='c-its'>
            {/* will be updated after category request handled */}
            <div className='c-it'>
              <div className='c-it-image'></div>
              <p className='c-it-name'></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
