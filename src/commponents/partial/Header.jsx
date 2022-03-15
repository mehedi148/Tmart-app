import React from 'react'
import Menus from '../Menus'
import MenuExtra from '../Menus/MenuExtra'
import logo from '../../assets/images/logo/logo.png'



export const Header = () => {
  return (
    <header id="header" className="htc-header header--3 bg__white">
            {/* <!-- Start Mainmenu Area --> */}
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>

                        {/* <!-- Start Main menu Areas --> */}
                        <Menus />
                        {/* <!-- End Main menu Areas --> */}
                        
                        <MenuExtra />
                    </div>

                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* // <!-- End Mainmenu Area --> */}
        </header>
  )
}

export default Header;