import React from 'react'
import menusArray from '../../temp/menus.json'

const Menus = () => {
    console.log(menusArray.menus);
  return (
    <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
      <nav className="mainmenu__nav hidden-xs hidden-sm">
          <ul className="main__menu">

              {menusArray.menus.length > 0 && menusArray.menus.map(menu => (
                  <li key={menu.id} className={menu.class}>
                    <a href={menu.link}>
                        {menu.text}
                    </a>
                
                <ul className="dropdown">
                    {menu.dropdown.length >0 && menu.dropdown.map(dropdownProps => (
                        <li key={dropdownProps.id} className={dropdownProps.class}> 
                            <a href={dropdownProps.link}>{dropdownProps.text}</a>
                        </li> 
                
                  ))}
                </ul>
                </li>
              ))}

             
              </ul> 
          </nav>
                               
  </div>
  )
}

export default Menus;