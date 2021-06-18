import Navbar from '../../components/Header';
import MainContent from '../../components/Main';
import SectionOne from '../../components/SectionOne';
import SectionTwo from '../../components/SectionTwo';
import SectionThree from '../../components/SectionThree';
import SectionFour from '../../components/SectionFour';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import CreatedGlobalStyle from '../../styles/GlobalStyles';


export default function Home() {
  return (
    <> 
<CreatedGlobalStyle />
<Navbar />
    <MainContent />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <Contact />
    <Footer />
    </>
 
  
  )
}
