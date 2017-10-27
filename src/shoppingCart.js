import React, { Component } from 'react';
import './shoppingCart.css';
import dishes from './dishes'

const Dish = ({src, price}) => {
	return (
		<li className='selected-products-list'>
			<a className='view-selected-items'>
				<img className='currentDish' src={src} alt='dish'/>
			</a>
			<span className='selected-image-price'>
				<span>1</span>x<span>{price}</span>
			</span>
		</li>
	)
}

const ShoppingCart = ({dishes}) => {
	const dishesList = dishes.map((dish, index) =>{
		return(
			<Dish 
				key={index}
				src={dish.image}
				price={dish.price}
			/>
		)
	})
	return (
		<section id='pre-content'>
			<div>
				<div id='shop-info'>
					<ul data-role='listview' className='k-widget k-listview'>
						{dishesList}
					</ul>
					<div id='shopping-cart'>
						<h3>your<br />shopping cart</h3>
						<p className='total-price'>$21.00</p>
						<a id='empty-cart'>empty cart</a>
						<a id='checkout'>checkout</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart;