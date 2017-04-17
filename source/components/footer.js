import React from 'react';
import SocialNav from './social-nav';
const date = new Date();

const Footer = ({})=>{
    return <footer className="c-footer">
		<div className="c-footer__top o-footer-grid">
			<h2 className="c-footer__title">OLD IRONY</h2>
			<SocialNav />
		</div>
		<div className="c-footer__bottom">
				<p>All rights reserved - © {date.getFullYear()} - Oldirony.cc</p>
				<p>Portfolio source code on <a href="https://github.com/oldirony/portfolio" target="_blank">Github</a></p>
		</div>
	</footer>
};

export default Footer;