import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$79' },
    { id: 2, name: 'Jacket', description: 'Running Jacket', price: '$109' },
    { id: 3, name: 'Shoes', description: 'Trekking Shoes', price: '$109' },
    { id: 4, name: 'Gloves', description: 'Downhill Riding Gloves', price: '$39' },
    { id: 5, name: 'Water Bottle', description: 'Reusable Recyclable Water Bottle', price: '$29' },
];

const Products = () => {

    return(
        <main>
            <Grid container justify="center" spacing = {4}>
                {
                    products.map((product) => 
                    (
                        <Grid item key = {product.id} xs = {12} sm = {6} md ={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))}
            </Grid>
        </main>
    )
}

export default Products;