import Course from './components/Course/Course'
import Navigation from './components/Naviagtion/Navigation'
import './scss/app.scss'

function App() {
	return (
		<div className="wrapper">
			<Navigation />
			<Course />
		</div>
	)
}

export default App
