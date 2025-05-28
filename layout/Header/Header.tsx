import {HeaderProps} from './Header.props';
import {JSX} from "react";
import {Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return (
		<>
			<Navbar bg="light" className="navbar navbar-light bg-light static-top" data-bs-theme="light">
				<Container>
					<Link className="navbar-brand" href="/">
						<Image src={"/logo.svg"} alt={"logo"} width={40} height={40}/>
						RangeRay
					</Link>


					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">

						<Nav >
							<Link  className="nav-item nav-link active" href="/about">
								О нас
							</Link>

							<Link className="nav-item nav-link" href="/contacts">
								Контакты
							</Link>

							<Link className="nav-item nav-link" href="/projects">
								Проекты
							</Link>
						</Nav>

					</div>
				</Container>
			</Navbar>
		</>
);
};