import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App(){
    let sidebarObj: SidebarComponent;
    let type: SidebarType = "Push";
    let showBackdrop: boolean = true;
    function onCreate(): void  {
        sidebarObj.element.style.visibility='';
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick(): void {
        sidebarObj.toggle();
    }
    // Close the Sidebar
    function closeClick(): void {
        sidebarObj.hide();
    }

    return (
        <div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar as SidebarComponent} style={{visibility:"hidden"}} created={onCreate} showBackdrop={showBackdrop}  type={type} width="280px">
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title">
                        Click the button to close the Sidebar.
                        </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div>
                    <div className="title">Main content</div>
                    <div className="sub-title"> Click the button to open/close the Sidebar.</div>
                    <div className="center-align">
                        <ButtonComponent onClick={toggleClick} id="toggle" className="e-btn e-info">Toggle Sidebar</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
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



// const App:React.FC= () =>{
//   return (
//     <>
   
//      <Router>
//       <div className='container'> 
//       <Routes>
//         <Route path='/' element={<Loginpage/>} /> 
//         <Route path='/home' element={<Homepage/>} />
//          <Route path='/sign' element={<Signuppage />} /> 
          

//       </Routes>
//       </div>
//     </Router> 
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
