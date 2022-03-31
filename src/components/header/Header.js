import { StyledHeader, Nav, Logo, Image } from './Header.styled'
import { Container } from '../styles/Container.styled'
import logo from '../../images/logo.svg'
import { Button } from '../styles/Button.styled'
import { Flex } from '../styles/Flex.styled'
import image from '../../images/illustration-mockups.svg'

export default function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src={logo} alt='logo' />
					<Button>Try it Free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>
						<Button bg='#ff0099' color='#fff'>
							Get Started for free
						</Button>
					</div>
					<Image src={image} alt='illustration' />
				</Flex>
			</Container>
		</StyledHeader>
	)
}
