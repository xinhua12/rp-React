import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../views/Login.jsx'
import Register from '../views/Register.jsx'

import App from '../App.js'
import List from '../views/List.jsx'
import Edit from '../views/Edit.jsx'
import Means from '../views/Means.jsx'

const BaseRouter = () => (
	<Router>
		<Routes>
			<Route path='/' element={ <App /> }>
				<Route path='/list' element={ <List /> }></Route>
				<Route path='/means' element={ <Means /> }></Route>
				<Route path='/edit' element={ <Edit /> }></Route>
			</Route>
			
			<Route path='/login' element={ <Login /> }></Route>
			<Route path='/register' element={ <Register /> }></Route>
		</Routes>
	</Router>
)

export default BaseRouter