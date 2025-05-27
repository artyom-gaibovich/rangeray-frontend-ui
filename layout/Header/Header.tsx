import {HeaderProps} from './Header.props';
import {JSX} from "react";
import {Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import Link from "next/link";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return (
		<>
			<Navbar bg="light" className="navbar navbar-light bg-light static-top" data-bs-theme="light">
				<Container>
						<Link className="navbar-brand"  href="/">
							RangeRay
						</Link>

					<Nav className="me-auto">
							<Link href="/about">
								О нас
							</Link>

							<Link href="/contacts">
								Контакты
							</Link>

							<Link href="/projects">
								Проекты
							</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};