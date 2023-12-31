import "./Costs.css"

import Costitem from "./Costitem";
import Card from "./Card";

const Costs = (props) => {
    return (
        <Card className="costs">
            <Costitem
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount} />
            <Costitem
                date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount} />
            <Costitem
                date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount} />
        </Card>
    )
}

export default Costs;