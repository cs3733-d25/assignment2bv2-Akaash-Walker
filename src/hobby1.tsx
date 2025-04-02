import {Name} from "./types.ts";
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form from "./form.tsx";

function Hobby1(props: Name) {
    return (
        <div>
            <img src="public/IMG_6276.HEIC.jpeg" alt="Samsung 65 TV I got for free" width={500}/>
            <p>My name is {props.name1} and one of my hobbies is second hand shopping.
                I like to search for good deals on second hand items using sites
                like Facebook Marketplace and eBay. Buying used is a great way
                to not only save money but also give a second life to items that
                otherwise would have been thrown out. </p>
            <List1/>
            <Table1/>
            <Form/>
        </div>
    );
}

export default Hobby1;