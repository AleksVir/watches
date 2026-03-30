import React from "react";
import { Link, Button } from "../Atoms/Atoms";
import Watch from "../Molecules/Watch/Watch";

const USID = require("usid");
const usid = new USID();

const SectionBlockItem = (props) => {
  console.log(props, 'secI')
  return (
    <div key={usid.rand()} className={props.className + "-card"}>
      <div key={usid.rand()} className={props.className + "-header"}>
       
        <Link
          key={usid.rand()}
          {...props}
          text={props.time}
          tag="h5"
          className={props.className + "-title"}
        ></Link>
       
        <div className={props.className + "__button-block"}>
          <Button
            id={props.id}
            key={usid.rand()}
            name={"X"}
            className={props.className + "-close"}
            onClick={props.onRemove}
          />
        </div>
      </div>
      <div key={usid.rand()} className={props.className + "-content"}>
        <Watch key={usid.rand()} {...props}/>
      </div>
    </div>
  );
};

export default SectionBlockItem;

