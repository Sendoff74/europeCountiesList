import React from 'react';
import Select from 'react-select'
import {useDispatch} from "react-redux";
import {sortByName} from "../redux/countriesSlice";
import s from '../SortSelector/SortSelector.module.css'

function SortSelector() {
    const options = [{value: 'AZ', label: 'A to Z'},
        {value: 'ZA', label: 'Z to A'}]
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(sortByName(e.value))
    }

    return (
        <Select className={s.selector} placeholder={'Choose the sorting method'} onChange={handleChange}
                options={options}/>
    );
}

export default SortSelector;