import React, { Component, useState, useEffect, useRef, Fragment, createContext, useContext } from 'react'
import { connect } from 'react-redux'

/**   class 组件
 
		export default class App extends Component {
			state = {
				arr: ['张三', '李四', '王五'],
				num: 1
			}
			setNum() {
				this.setState({
					num: this.state.num + 1
				}, () => { // 回调可获取到更新后的值
					console.log(`累加后的num`, this.state.num)
				})
			}
			render() {
				const { arr, num } = this.state
				return (
				<>
					<ul className="App">{arr.map((val,index) => <Fragment key={ index }> <li>{ val }</li> </Fragment>)}</ul>
					<div>当前num为 { num } <button onClick={ this.setNum.bind(this) }>累加</button></div>
				</>
				)
			}
		}
*/

/**
 * 1.useState定义函数式组件的状态 接受状态初始值 返回值是一个数组[当前状态, 设置状态的函数]
 * 2.useEffect 模拟特定时间内执行的操作
 *  - 第二个参数如果是空数组 等价于componentDidMount 只在函数创建的时候执行一次
 *  - 第二个参数不存在 等价于componentDidMount + componentDidUpdate 
 *    在函数创建和更新（只要调用useState的更新函数）时都会执行
 *  - useEffect 第一个参数的返回函数 等价于 componentWillUnment 组件卸载之前执行
 *  - useEffect(func): 传空，类似于componentDidMount 和 componentDidUpdate一起的生命周期，
 *    在组件的每次render执行的时候，func都会执行
 * 3.useRef 获取dom 获取子组件 值不会跟着组件状态更新会保留用户存储的值
 */
/**   
 *     函数式组件
 */
const myContext = createContext() // 实现隔代传参
function App(props) {
	const [arr, setArr] = useState(['张三', '李四', '王五'])
	const [num, setNum] = useState(1)
	// const timer = useRef(null); // 值不会跟着组件状态更新会保留用户存储的值
	const element = useRef(null); // = 获取 dom 元素 
	const myspan = useRef(null); // = 获取 dom 元素 
	const handleSetNum = () => {
		setNum( num + 1 )  // 直接拿新值覆盖初始值
		// setNum( (num) => num + 1 )  // 拿新值覆盖旧值
	}
	const handleGetUl = () => {
		console.log(element, 'ul元素')
		myspan.current.innerHTML = `已获取 ${element.current} ，请查看控制台`
	}
  return (
		<Fragment>
			<ul className="App" ref={ element }>{arr.map((val,index) => <Fragment key={ index }> <li>{ val }</li> </Fragment>)}</ul>
			<div>当前num为 { num } <button onClick={ handleSetNum }>累加</button></div>
			<p><button onClick={ handleGetUl }>获取 ul </button> <span ref={ myspan }></span> </p>
			{/* 子组件：实现子组件改变父组件的值  父组件传值传方法 */}
			<Sun num={ num } handleSetNum={ handleSetNum }/>
			{/* 实现隔代传参：  爷组件传值传方法 */}
			<myContext.Provider value={ { num, handleSetNum } }> {/* 也可以这样传 value={ [num, handleSetNum] }  */}
				<Child /> {/* Child 是第二层 Grandson 是第三层  */}
			</myContext.Provider>
			{/* 实现 redux  */}
			<div>当前redux的storeMsg为 { props.storeMsg } 
					<button onClick={ props.handleChangeStoreMsg }>改变storeMsg</button>
			</div>
		</Fragment>
  );
}
// 子组件
function Sun(props){ // 父子传参
	return <div>当前父组件传过来的num为 { props.num } 
						<button onClick={ props.handleSetNum }>让父组件num累加</button>
				 </div>
}
// 父组件 App是爷爷组件
function Child(){ // 隔代传参
	return <Grandson />
}
// 孙子组件
function Grandson(){ // 隔代传参
	const { num, handleSetNum } = useContext(myContext)
	return (
		<>
			{/* 方法一： */}
			<div>当前爷爷组件传过来的num为 { num } <button onClick={ handleSetNum }>让爷爷组件num累加</button></div>
			{/* 方法二：
				<myContext.Consumer>
					{
						( { num, handleSetNum } ) => { // 参数是爷爷传过来的，用对象结构还是数组结构，取决于爷爷怎么传的
							return	<>
									<div>当前爷爷组件传过来的num为 { num } <button onClick={ handleSetNum }>让爷爷组件num累加</button></div>
							</>
						}
					}
				</myContext.Consumer>
			*/}
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		storeMsg: state.storeMsg
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeStoreMsg() {
			const action = {
				type: 'CHANGE_STORE_MSG',
				payload: 'Hello World'
			}
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
