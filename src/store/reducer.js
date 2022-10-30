const defaultState = {
	storeMsg: '你好世界'
}

const reducer = (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(defaultState))
	switch (action.type) {
		case "CHANGE_STORE_MSG":
			newState.storeMsg = action.payload
			break;
		default:
			break;
	}
	return newState
}
export default reducer