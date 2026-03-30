import React, { useState } from "react";
import Form from "./Molecules/form/FormSearch";
import SectionBlock from "./Sections/SectionBlock";
import SectionBlockItem from "./Sections/SectionBlockItem";
import Watch from "./Molecules/Watch/Watch";

const USID = require("usid");
const usid = new USID();

const offset = 3; //смещение часового пояса, для местного времени +3 часа(СПб)

const propsWatch1 = { id: "123", time: "Moskow", timeZone: "3", offset };
const propsWatch2 = { id: "321", time: "Tokio", timeZone: "9", offset };

const moskow = new Watch(propsWatch1);
const tokio = new Watch(propsWatch2);

const TimePanel = (data) => {
  const [watches, setWatches] = useState([moskow, tokio]);

  const handleAdd = (watch) => {
    let copyWatches = [...watches];

    let idx = copyWatches.findIndex((i) => i.date === watch.time);
    if (idx === -1) {
      setWatches((prev) => [...prev, watch]);
    }
  };

  const handleRemove = (id) => {

    setWatches((prev) => prev.filter((o) => o.id !== id));
  };

  const props = {
    childData: data,
    offset: offset,
    onAdd: handleAdd,
  };
  return (
    <>
      <div className="timepanel-container">
        <Form key={usid.rand()} data={props}></Form>
        <SectionBlock
          key={usid.rand()}
          className="watches"
          handleRemove={handleRemove}
        >
          {watches.map((item) => {
            return <SectionBlockItem key={usid.rand()} {...item} className={"watch"} onRemove={handleRemove}/>
          })}
          
        </SectionBlock>
      </div>
    </>
  );
};
export default TimePanel;
/*/*<Watch key={usid.rand()} {...item} />*/