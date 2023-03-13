import { RecoilRoot } from 'recoil';
import MainRouter from './router';

import { createGlobalStyle } from 'styled-components';
import Theme from './theme';
import devices from './utils/devices';

const GlobalStyle = createGlobalStyle`
  body {
	margin: auto;
	font-family: 'Poppins', sans-serif;
	background-color: black;
  }

  html {
	@media (min-width: 0px) {
        font-size: 5px;
	}
	@media ${devices.mobileS} {
        font-size: 6px;
	}
	@media ${devices.mobileM} {
        font-size: 7px;
	}
	@media ${devices.mobileL} {
        font-size: 9px;
	}
	@media ${devices.tablet} {
        font-size: 10px;
	}
	@media ${devices.laptop} {
        font-size: 12px;
	}
	@media ${devices.laptopL} {
        font-size: 14px;
	}
	@media ${devices.desktop} {
        font-size: 16px;
	}
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
