import React from "react";

const Topbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-2">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="bp3-icon bp3-icon-code" icon="code" style={{fontSize: "25px", marginRight: "10px"}}/>

          <span className="font-semibold text-xl tracking-tight">
            SILVER MAN
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow" />
          <div />
        </div>
      </nav>
    </div>
  );
};
export default Topbar;
