import { Flex } from '../styles/Flex.styled'
import { Container } from '../styles/Container.styled'
import logo from '../../images/logo_white.svg'
import { StyledFooter } from './Footer.styled'
import SocialIcons from '../socialIcons/SocialIcons'

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<img src={logo} alt='logo' />
				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</li>
						<li>+1-543-123-4567</li>
						<li>example@huddle.com</li>
					</ul>
					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>

					<ul>
						<li>Career</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>
					<SocialIcons />
				</Flex>
				<p>© 2021 Huddle. All rights reserved.</p>
			</Container>
		</StyledFooter>
	)
}
