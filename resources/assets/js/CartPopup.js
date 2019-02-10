import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="cart-popup">
				<div className="cart-title">
					<div className="title">my cart</div>
				</div>
				<div className="cart-items">
					<div className="cart-container">
						<div className="item-container">
							<div className="item">
								<img
									src="/img/products/nike-foamposite-pro-black.png"
									alt="item"
								/>
								<div className="delete-btn">
									<div className="circle">X</div>
								</div>
							</div>
						</div>
						<div className="item-container">
							<div className="item">
								<img
									src="/img/products/nike-foamposite-pro-black.png"
									alt="item"
								/>
								<div className="delete-btn">
									<div className="circle">X</div>
								</div>
							</div>
						</div>
						<div className="item-container">
							<div className="item">
								<img
									src="/img/products/nike-foamposite-pro-black.png"
									alt="item"
								/>
								<div className="delete-btn">
									<div className="circle">X</div>
								</div>
							</div>
						</div>
						<div className="item-container">
							<div className="item">
								<img
									src="/img/products/nike-foamposite-pro-black.png"
									alt="item"
								/>
								<div className="delete-btn">
									<div className="circle">X</div>
								</div>
							</div>
						</div>
					</div>
					<div className="product-total">
						<div className="group">
							<div className="title">total</div>
							<div className="number">x4</div>
						</div>
					</div>
					<div className="price-total">
						<div className="group">
							<div className="title">total</div>
							<div className="number">$350</div>
						</div>
					</div>
					<div className="checkout">
						<div className="checkout-btn">checkout</div>
						<div>
							<i className="fab fa-opencart fa-lg" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const CartPopupRoot = document.getElementById('CartPopupRoot');

ReactDOM.render(<CartPopup />, CartPopupRoot);
