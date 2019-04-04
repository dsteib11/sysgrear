import React, { Component } from 'react';

export default class CartBtn extends Component {
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
			<a href="#" className="cart-link">
				cart
				<span>
					<i className="fab fa-opencart fa-sm">4</i>
				</span>
			</a>
		);
	}
}
