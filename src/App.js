import Header from './components/Header'
import Layout from './components/Layout'
import Tab from './components/Tabpanel'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Horizontal from './components/Horizontal'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
    <div style={{backgroundColor: '#f8f8f8'}}>
    <Layout/>
    <Tab/>
    <Gallery/>
    <FAQ/>
    <Horizontal/>
    </div>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
