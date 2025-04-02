import {Name} from "./types.ts";
import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

function Hobby2(props: Name) {
    return (
        <div>
            <img src="/AI guitarist.jpeg" width="400px" height="400px"/>
            <p>My name is {props.name2} and I enjoy playing guitar. I learned to play on acoustic, with a heavy emphasis
                on bar chords and finger picking. I love playing the Beatles and classic rock ballads. More recently, I
                have started learning to play grunge like Pearl Jam on electric guitar.</p>
            <List2/>
            <Table2/>
            <Form2/>
        </div>
    );
}

export default Hobby2;