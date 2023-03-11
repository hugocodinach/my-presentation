import { RecoilRoot } from 'recoil';
import MainRouter from './router';

import { createGlobalStyle } from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
	margin: auto;
	font-family: 'Poppins', sans-serif;
	background-color: black;
  }
`

function App() {
	return (
		<RecoilRoot>
			<Theme>
				<GlobalStyle />
				<MainRouter />
			</Theme>
		</RecoilRoot>
	)
}

export default App
