import React from "react";
import { Link } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const ReviewerDashboard = () => {

  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    /*<div>
      <h1>Welcome Reviewer</h1>
    <div>
      <Link className="button" to={`/auth/user/reviewer/research`}>
        Review Reasearch Papers
      </Link>
    </div>
    <div>
      <Link className="button1" to={`/auth/user/reviewer/workshop`}>
        Review Workshop Proposals
      </Link>
    </div>
  </div>
);
};*/
<div className="drawer">


  
  <button class="openbtn" onClick={toggleDrawer}>&#9776; Reviewer Dashboard</button>
  <h2>*Once You Approved a document it will be published in the system.</h2>
  
  <h2>*Once You rejected a document it will be deleted from the system.</h2>
  <div className="draw">
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>

               
           
        
<br/>
<br/>
<br/>
<br/>

  
  <a ><Link className="button" to={`/auth/user/reviewer/research/approve`}>Approved Reasearch Papers</Link> </a>
  <a ><Link className="button" to={`/auth/user/reviewer/workshop/approve`}>Approved Workshop Proposals</Link> </a>
  <a ><Link className="button1" to={`/auth/user/reviewer/research/pending`}>Research Papers to be Reviewed</Link> </a>
  <a ><Link className="button1" to={`/auth/user/reviewer/workshop/pending`}>Workshop Proposals to be Reviewed</Link> </a>
  <a ><Link className="button2" to={`/auth/user/reviewer/research/reject`}> Rejected Research Papers</Link> </a>
  <a ><Link className="button2" to={`/auth/user/reviewer/workshop/reject`}> Rejected Workshop Proposals</Link> </a>

  
</Drawer>
</div>


</div>
  );
};
export default ReviewerDashboard;