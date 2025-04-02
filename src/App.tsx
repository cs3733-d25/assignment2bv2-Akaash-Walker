import Title from "./title.tsx";
import './App.css';
import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";
import Hobby2 from "./hobby2.tsx";

function App() {
    return (
        <>
            <Title/>
            <Intro name1={"Akaash"} name2={"Owen"}/>
            <Hobby1 name1={"Akaash"} name2={""}/>
            <Hobby2 name1={""} name2={"Owen"}/>
        </>
    );
}

export default App;