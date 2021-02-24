import React from 'react';
import s from './DragAndDropContainer.module.css'
import { sortableContainer } from 'react-sortable-hoc';
import DragAndDropItem from "../Card/DragAndDropItem";

const DragAndDropContainer = sortableContainer(({items}) => {
    return (
        <div className={s.countryList}>
            {items.map((el, index) => (
                <DragAndDropItem key={el.numericCode} index={index} el={el} />
            ))}
        </div>
    );
})


export default DragAndDropContainer;