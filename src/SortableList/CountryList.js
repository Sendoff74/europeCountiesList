import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import arrayMove from "array-move";
import DragAndDropContainer from "../CardList/DragAndDropContainer";
import {changePosition, fetchCountries, selectCountries} from "../redux/countriesSlice";
import SortSelector from "../SortSelector/SortSelector";

function CountryList() {
    const countryList = useSelector(selectCountries)
    const dispatch = useDispatch()
    const countryState = useSelector(state => state.countries)

    useEffect(() => {
        if (countryState.status === 'sleeping') {
            dispatch(fetchCountries())
        }
    }, [dispatch])
    const onSortEnd = ({oldIndex, newIndex}) => {
        dispatch(changePosition([...arrayMove(countryList, oldIndex, newIndex)]))
    }
    return (
        <>
            {countryState.status === 'ready' ?
                <>
                    <SortSelector/>
                    <DragAndDropContainer axis={'xy'} pressDelay={100} onSortEnd={onSortEnd}
                                          items={countryList}/> </> : countryState.error ? <p>Произошла ошибка</p> :
                    <p>Loading...</p>}
        </>
    );
}

export default CountryList;