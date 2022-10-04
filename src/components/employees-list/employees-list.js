import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data , onDelete , onToggleIncrease , onToggleLike}) => {
    let elements = data.map(item => {
        const {id , ...others} = item
        return <EmployeesListItem {...others} key={id} onDelete={() => onDelete(id)}  onToggleIncrease={() => onToggleIncrease(id)} 
        onToggleLike={() => onToggleLike(id)}/>
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;