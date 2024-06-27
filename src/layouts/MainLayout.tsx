import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Naviagtion/Navigation'
import '../scss/app.scss'

type PropType = {
	children: ReactNode
}

const MainLayout: React.FC<PropType> = ({ children }) => {
	return (
		<div className="main">
			<Header />
			<div className="wrapper">
				<Navigation />
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default MainLayout
