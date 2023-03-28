import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";

function Main() {
    return (
        <div className={ms.Main}>
            <Features/>
            <CostHistory/>
        </div>
    );
}

export default Main;