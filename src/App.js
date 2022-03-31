import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Header from './components/header/Header'
import Card from './components/card/Card'
import GlobalStyles from './components/styles/Global'
import { theme } from './components/styles/theme'
import { content } from './content'
import Footer from './components/footer/Footer'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map(item => (
						<Card key={item.id} item={item} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	)
}

export default App
