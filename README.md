### 注意！！！
	项目中有两个src文件夹
		- 一个是基础语法复习  如若复习基础语法，只需将` src - 基础语法复习 `文件夹名称改为` src `
		- 一个是一个项目  如若查看项目，只需将` src - 项目构建 `文件夹名称改为` src `
	配置都一样，直接改` src `名称即可
### 基础语法复习
	1.空标签适用于class组件也适用函数式组件（简单复习了class组件）
	2.hooks
		- useState定义函数式组件的状态 接受状态初始值 返回值是一个数组[当前状态, 设置状态的函数]
		- useEffect 模拟特定时间内执行的操作
		- 第二个参数如果是空数组 等价于componentDidMount 只在函数创建的时候执行一次
		- 第二个参数不存在 等价于componentDidMount + componentDidUpdate 在函数创建和更新（只要调用useState的更新函数）时都会执行
		- useEffect 第一个参数的返回函数 等价于 componentWillUnment 组件卸载之前执行
		- useEffect(func): 传空，类似于componentDidMount 和 componentDidUpdate一起的生命周期，在组件的每次render执行的时候，func都会执行
		- useRef 获取dom 获取子组件 值不会跟着组件状态更新会保留用户存储的值
	3.子组件改变父组件的值
		<Sun num={ num } handleSetNum={ handleSetNum }/>
	4.隔代传参
		createContext
	5.store 创建仓库 redux react-redux
	
### 项目构建
	1.路由搭建
	2.配置less `[less配置](https://blog.csdn.net/qq_39223195/article/details/106287522)`
	3.登录注册页面
	4.layout布局
