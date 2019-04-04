const initialState = {
	cartPopupOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
	switch (key) {
		case 'OPEN_CART':
			newState = Object.assign({}, state, {
				cartPopupOpen: true
			});
			break;

		default:
			return state;
			break;
	}
};
