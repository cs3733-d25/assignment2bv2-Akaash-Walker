import Title from "./title.tsx";
import './App.css';
import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";

function App() {
    return (
        <>
            <Title/>
            <Intro name1={"Akaash"} name2={"Owen"}/>
            <Hobby1 name1={"Akaash"} name2={""}/>
        </>
    );
}

export default App;