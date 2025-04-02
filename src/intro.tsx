import {Name} from "./types.ts";

function Intro(props: Name) {
    return (
        <div>
            <p>My name is {props.name1} and I am a sophomore at WPI. I like to play
                volleyball and I am excited to learn React!</p>
            <p>My name is {props.name2} and I am a sophomore at WPI. I like to sail and ski and I am excited to master git!</p>
        </div>
    );
}

export default Intro;