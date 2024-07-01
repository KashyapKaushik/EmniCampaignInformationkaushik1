// import * as React from 'react';
// import { useState } from 'react';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
// // import CampaignInformation from './components/Campaign/CampaignInformation';
// // import Contact from './components/Contact/Contact';
// import Category from './components/Category/Category';
// import CampaignInformation from './components/Campaign/CampaignInormation';
// import Contact from './components/ContactInformation/contact';

// const App: React.FC = () => {
//     const [selectedMenu, setSelectedMenu] = useState<string>('Campaign Information');
//     let sidebarObj: SidebarComponent | null = null;
//     let btnObj: ButtonComponent | null = null;
//     const type: SidebarType = 'Push';

//     const onCreate = (): void => {
//         if (sidebarObj) {
//             sidebarObj.element.style.visibility = '';
//         }
//     };

//     const btnClick = (): void => {
//         if (btnObj && sidebarObj) {
//             if (btnObj.element.classList.contains('e-active')) {
//                 btnObj.content = 'Close';
//                 btnObj.iconCss = 'e-icons burg-icon';
//                 sidebarObj.show();
//             } else {
//                 btnObj.content = 'Open';
//                 btnObj.iconCss = 'e-icons burg-icon';
//                 sidebarObj.hide();
//             }
//         }
//     };

//     const closeClick = (): void => {
//         if (sidebarObj && btnObj) {
//             sidebarObj.hide();
//             btnObj.content = 'Open';
//         }
//     };

//     const renderContent = (): JSX.Element => {
//         switch (selectedMenu) {
//             case 'Campaign Information':
//                 return <CampaignInformation/>;
//             case 'Contact':
//                 return <Contact/>;
//             case 'Category':
//                 return <Category/>;
//             default:
//                 return <CampaignInformation />;
//         }
//     };

//     return (
//         <div className="control-section">
//             <div id="wrapper">
//                 <SidebarComponent
//                     id="default-sidebar"
//                     enablePersistence={true}
//                     ref={(Sidebar) => (sidebarObj = Sidebar)}
//                     style={{ visibility: 'hidden' }}
//                     created={onCreate}
//                     type={type}
//                     width="280px"
//                 >
//                     <div className="title">Menu</div>
//                     <ul>
//                         <li onClick={() => setSelectedMenu('Campaign Information')}>Campaign Information</li>
//                         <li onClick={() => setSelectedMenu('Contact')}>Contact</li>
//                         <li onClick={() => setSelectedMenu('Category')}>Category</li>
//                     </ul>
//                     <div className="center-align">
//                         <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
//                     </div>
//                 </SidebarComponent>
//                 <div id="head">
//                     <ButtonComponent
//                         id="toggle"
//                         ref={(scope) => {
//                             btnObj = scope;
//                         }}
//                         iconCss="e-icons burg-icon"
//                         isToggle={true}
//                         onClick={btnClick}
//                         className="e-btn e-info"
//                     >
//                         Open
//                     </ButtonComponent>
//                 </div>
//                 <div id="maincontent" className="content">
//                     {renderContent()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;

import { ChangeEventArgs, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import CampaignInformation from './components/Campaign/CampaignInormation';
import { Link } from 'react-router-dom';
import Loginpage from './components/LoginPage/Loginpage';
import Homepage from './components/Homepage/Homepage';
import Signuppage from './components/Signuppage/Signuppage';
import Category from './components/Category/Category';
import Contact from './components/ContactInformation/contact';
import Account from './components/Account2/Account2';
// import UserExpense from './components/UserExpense/UserExpense';



function App() {
    let sidebarObj: SidebarComponent;
    const buttonclick= () => {
        sidebarObj.toggle();
    }

   

    return (
        <>
        <Router>
      <div className=''>
      <div className="App">
            <div className='header' style={{width : '100%'}}>
                <span style={{float : 'left'}}>
                    <ButtonComponent className='custom-btn' iconCss='e-icons e-menu' onClick={buttonclick}> 

                    </ButtonComponent>
                </span>
                {/* <span>Header</span> */}
                
            </div> 
            <SidebarComponent  ref={Sidebar => sidebarObj = Sidebar as SidebarComponent}  width="250px" position='Left' type='Over'>
            <div className='sidebar-content'>
                <ul>
                   <Link  style={{textDecoration: "none"}} to={'/campaign'}> <li>Campaign Information</li></Link>
                   <Link style={{textDecoration: "none"}} to={'/contact'}> <li>Contact</li></Link>
                   <Link style={{textDecoration: "none"}} to={'/category'}> <li>Category</li></Link> 
                   <Link style={{textDecoration: "none"}} to={'/account'}> <li>Account</li></Link>
                   <Link style={{textDecoration: "none"}} to={'/account2'}> <li>Account2</li></Link>   
                   <Link style={{textDecoration: "none"}} to={'/user'}> <li>UserExpense</li></Link>     


                    </ul>
            </div>   
            </SidebarComponent>
            <div className="main-content">
                {/* <CampaignInformation/> */}
            </div>
     </div>
      <Routes>
        {/* <Route path='/' element={<Loginpage/>} />  */}
         <Route path='/campaign' element={<CampaignInformation/>} /> 
         <Route path='/category' element={<Category/>} /> 
         <Route path='/contact' element={<Contact/>} /> 
         {/* <Route path='/account' element={<Account/>} />  */}
         <Route path='/account2' element={<Account/>} /> 

         {/* <Route path='/user' element={<UserExpense/>} />  */}

      </Routes>

      </div>
    </Router> 
        
       
            </>
                
        
    )
}
export default App;

// import React from 'react';
// import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

// import './App.css';

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Loginpage from "./components/LoginPage/Loginpage";
// import Homepage from './components/Homepage/Homepage';
// import Signuppage from './components/Signuppage/Signuppage';
// import Account from './components/Account/Account';
// import UserExpense from './components/UserExpense/UserExpense';



// const App:React.FC= () =>{
//   return (
//     <>
//     <UserExpense/>
   
//       {/* <Router>
//       <div className='container'> 
//       <Routes>
//         <Route path='/' element={<Loginpage/>} /> 
//         <Route path='/home' element={<Homepage/>} />
//          <Route path='/sign' element={<Signuppage />} /> 
          

//       </Routes>
//       </div>
//     </Router>  */}
     
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
// import './App.css';  // Ensure you have your CSS file imported

// const App: React.FC = () => {
//   return (
//     <div className="app-container">
//       <SidebarComponent type="Push" width="250px">
//         <div className="menu-items">
//           <a href="#home">Home</a>
//           <a href="#services">Services</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </SidebarComponent>
//       <div className="content">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// }

// export default App;
