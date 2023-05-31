import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../assets/images/logo.png';
import { NavbarItemLists } from '../../utils';
const NavbarItem = ({ title, classProps }) => {
	return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = React.useState(false);
	return (
		<nav
			className='
			w-full flex md:justify-center justify-between 
			items-center p-4'
		>
			<div
				className='
				md:flex-[0.5] flex-initial 
				justify-center itens-center'
			>
				<img src={Logo} alt='logo' className='w-32 cursor-pointer' />
			</div>
			<ul
				className='
				text-white md:flex hidden list-noneflex-row
				justify-between items-center flex-initial'
			>
				{NavbarItemLists.map((elem, index) => (
					<NavbarItem key={elem + index} title={elem} />
				))}
				<li
					className='
					text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
					focus:ring-blue-300 font-medium rounded-full list-none	text-sm py-2 px-7 
					mx-4text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
					dark:focus:ring-blue-800 cursor-pointer
				'
				>
					Login
				</li>
				<li
					className='
					text-white hover:bg-white-800 focus:outline-none focus:ring-4 font-medium 
					rounded-full text-sm border border-1 border-white-700 list-none	text-sm 
					py-2 px-7 mx-4 text-center mr-2 mb-2 cursor-pointer
				'
				>
					Sign up
				</li>
			</ul>
			<div className='flex relative'>
				{toggleMenu ? (
					<AiOutlineClose
						fontSize={28}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(!toggleMenu)}
					/>
				) : (
					<HiMenuAlt4
						fontSize={28}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(!toggleMenu)}
					/>
				)}

				{toggleMenu && (
					<ul
						className='
						z-10 fixed top-0 right-0 p-7
						w-[70vw] h-screen shadow-2xl md:hidden list-none 
						flex flex-col justify-start items-end rounded-md 
						blue-glassmorphism text-white animate-slide-in'
					>
						<li className='text-xl w-full my-2'>
							<AiOutlineClose
								// fontSize={28}
								// className='text-white md:hidden cursor-pointer'
								onClick={() => setToggleMenu(!toggleMenu)}
							/>
						</li>
						{NavbarItemLists.map((elem, index) => (
							<NavbarItem key={elem + index} title={elem} classProps='my-2 text-lg' />
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
