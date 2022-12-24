import React from "react";

export const ProgressTracker = (props) => {
  let { progress, checkpoints } = props;
  return (
    <div className="container flex align-center justify-center">
        <div className="cp -skew-x-12 my-auto h-auto w-min mx-1">{progress < 25? "Confirming order":"Order Confirmed!"}</div>
        <div className="connector my-auto bg-black mx-0 h-2 w-24"></div>
        <div className="cp -skew-x-12 my-auto h-auto w-min mx-1">{progress < 50? "Chef is preparing":"Order Prepared!"}</div>
        <div className="connector my-auto bg-black mx-0 h-2 w-24"></div>
        <div className="cp -skew-x-12 my-auto h-auto w-min mx-1">{progress < 75? "Rider is out for delivery":"Almost thrtr!"}</div>
        <div className="connector my-auto bg-black mx-0 h-2 w-24"></div>
        <div className="cp -skew-x-12 my-auto h-auto w-min mx-1">Rider will be contacting you soon  </div>
    </div>
  );
};
