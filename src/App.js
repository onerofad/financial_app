import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createMedia } from '@artsy/fresnel';
import { Home } from './desktop/Home';
import { About } from './desktop/About';
import { Business } from './desktop/Business';
import { Investment } from './desktop/Investment';
import { Mortgage } from './desktop/Mortgage';
import { Contact } from './desktop/Contact';
import { HomeMobile } from './mobile/HomeMobile';
import { AboutMobile } from './mobile/AboutMobile';
import { BusinessMobile } from './mobile/BusinessMobile';
import { InvestmentMobile } from './mobile/InvestmentMobile';
import { MortgageMobile } from './mobile/MortgageMobile';
import { ContactMobile } from './mobile/ContactMobile';
import { Login } from './desktop/Login';
import { Register } from './desktop/Register';
import { UserDashboard } from './common/UserDashboard';
import { LocalTransfer } from './common/LocalTransfer';

function App() {
  const {MediaContextProvider, Media} = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024
    }
  })
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeMobile />} />
            <Route path='/about' element={<AboutMobile />} />
            <Route path='/business' element={<BusinessMobile />} />
            <Route path='/investment' element={<InvestmentMobile />} />
            <Route path='/mortgage' element={<MortgageMobile />} />
            <Route path='/contact' element={<ContactMobile />}/>
            <Route path='/login' element={<Login mobile />} />
            <Route path='/register' element={<Register mobile />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/local' element={<LocalTransfer />} />

          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path='/about' element = {<About />} />
            <Route path='/business' element = {<Business />} />
            <Route path='/investment' element = {<Investment />} />
            <Route path='/mortgage' element = {<Mortgage />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/local' element={<LocalTransfer />} />
          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider>
  );
}

export default App;
