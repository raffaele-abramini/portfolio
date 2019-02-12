import React from 'react';
import SocialNav from './social-nav';
const date = new Date();

const Footer = ({})=>{
    return <footer className="c-footer">
		<div className="c-footer__top o-footer-grid">
			<h2 className="c-footer__title">Raffaele Abramini</h2>
			<SocialNav />
		</div>
		<div className="c-footer__bottom">
				<p>All rights reserved - © {date.getFullYear()} - Raff.ae</p>
				<p>Portfolio source code on <a href="https://github.com/raffaele-abramini/portfolio" target="_blank">Github</a></p>
		</div>
	</footer>
};

export default Footer;
