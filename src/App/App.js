import s from './App.module.css'
import CountryList from "../SortableList/CountryList";


function App() {

    return (

        <div className={s.container}>
            <CountryList/>
        </div>
    );
}

export default App;
