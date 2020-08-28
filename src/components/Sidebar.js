import React from 'react';
import './Sidebar.css';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Green Rains</h2>
          <h3>
            <FiberManualRecordIcon />
            Sandeep Chopra
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
