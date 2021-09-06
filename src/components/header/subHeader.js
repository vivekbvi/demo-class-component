import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {} from 'bootstrap';
import classes from "./subHeader.module.css";

const SubHeader = () => {
  return (
    <React.Fragment>
      {/* css module classes and bootstrap classes used together */}
      <h6 className={`text-center pt-2 pb-2 mb-0 ${classes.bgLightBlue}`}>
        Due to Covid'19. We Are Facing A Some Fluctuation In Data. Thank You For Your
        Patience And UnderStanding.
      </h6>
    </React.Fragment>
  );
};

export default SubHeader;
