import id from "react-id-generator"
import "./app-filter.scss";

const  AppFilter  = (props) =>   {
    
    let buttonsData = [

        {name:"all"  , text:'Все сотрудники'} ,
        {name:"increase"  , text:'На повышение'} ,
        {name:"moreThan1000"  , text:'З/П больше 1000$'}
    ]

    let buttons = buttonsData.map(({name , text}) => {
        let active = props.filter_name === name
        let clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
            className={`btn ${clazz}`} name={name} onClick={() => props.onToggleFilter(name)} key={id()}>
            {text}
            </button>
        )
    })
    
 
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
}

export default AppFilter;