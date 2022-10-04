import "./app-info.scss";

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников:{props.employeesCount}</h2>
            <h2>Премию получат: {props.likeEmployeesCount}</h2>
        </div>
    )
}

export default AppInfo;