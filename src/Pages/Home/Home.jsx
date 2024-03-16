import React, { useState } from 'react';
import SideMenu from '../../Components/SideMenu/SideMenu';



const Home = ({ component: Component }) => {

  const [inactive, setinactive] = useState(false);

  return (
    <div>
      <div>
        <SideMenu onCollapse={(inactive) => {
          setinactive(inactive);
        }} />
      </div>
      <div className={`Container ${inactive ? 'Con_inactive' : ""} `} >
        {Component && <Component />}
      </div>

    </div>

  )
}

export default Home