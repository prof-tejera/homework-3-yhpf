import "./Pager.css";
import Panel from "components/Panel/Panel";
import PagerComp from "components/Pager/PagerComp";

const Pager = () => {
  return(
    <Panel>
      <PagerComp numberOfPages="10"></PagerComp>
    </Panel>
  )
};

export default Pager;
