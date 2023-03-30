import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { getCart, getPrice } from './cartHelper';
import CartCard from './CartCard';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setItems(getCart());
        totalPrice();
    }, []);

    const showItems = items => {
        return (
            <div className='row'>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                  <CartCard key={i} product={product} />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/products">Continue shopping</Link>
        </h2>
    );

    const totalPrice = async () => {
        setTotal(await getPrice())
    }

    return (
        <Layout
            title="Shopping Cart"
        >
          <div className='container mt-5 mb-5'>
                {
                    total !== 0 && <button className='btn btn-warning mb-2'>Proceed to Checkout</button>
                }

                <h5>Total Price <span>{total}</span></h5>
            {items.length > 0 ? showItems(items) : noItemsMessage()}
          </div>
        </Layout>
    );
};

export default Cart;
