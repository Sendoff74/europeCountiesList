import s from "./DragAndDropItem.module.css"
import {sortableElement} from 'react-sortable-hoc';

const DragAndDropItem = sortableElement(({el}) =>
    <div className={s.countryCard}>
        <p>{el.name}</p>
        <img src={el.flag} alt={'No flag for this country'}/>
        <span>Total area:</span>
        <div className={s.textDiv}>{el.area} sq.km</div>
        <span>Population:</span>
        <div className={s.textDiv}>{el.population}</div>
    </div>);


export default DragAndDropItem


