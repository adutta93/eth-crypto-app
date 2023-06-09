import { Navbar, Transaction, Welcome, Footer, Services } from './Components';

function App() {
	return (
		<>
			<div className='min-h-screen'>
				<div className='gradient-bg-welcome'>
					<Navbar />
					<Welcome />
				</div>
				<Services />
				<Transaction />
				<Footer />
			</div>
		</>
	);
}

export default App;
