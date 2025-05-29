import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
			<footer className="footer mt-auto">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 h-100 text-center text-lg-start my-auto">
							<ul className="list-inline mb-2">
								<li className="list-inline-item">
									<a href="#!" className={styles.footerLink}>О нас</a>
								</li>
								<li className="list-inline-item">⋅</li>
								<li className="list-inline-item">
									<a href="#!" className={styles.footerLink}>Контакты</a>
								</li>
								<li className="list-inline-item">⋅</li>
								<li className="list-inline-item">
									<a href="#!" className={styles.footerLink}>Политика конфиденциальности</a>
								</li>
							</ul>
							<p className={`${styles.footerText} small mb-4 mb-lg-0`}>
								&copy; 2020 - {format(new Date(), 'yyyy')} Все права защищены
							</p>
						</div>

						<div className="col-lg-6 h-100 text-center text-lg-end my-auto">
							<ul className="list-inline mb-0">
								<li className="list-inline-item me-4">
									<a href="#!" className={styles.iconLink}>
										<i className={`bi bi-facebook fs-3 ${styles.facebook}`}></i>
									</a>
								</li>
								<li className="list-inline-item me-4">
									<a href="#!" className={styles.iconLink}>
										<i className={`bi bi-twitter fs-3 ${styles.twitter}`}></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="#" className={styles.iconLink}>
										<i className={`bi bi-instagram fs-3 ${styles.instagram}`}></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

	);
};