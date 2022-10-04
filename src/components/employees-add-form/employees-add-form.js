import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends  Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "" ,
            salary:""
        }
    }
    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    reset = () => {
        this.setState({
            name:"" ,
            salary:""
        })
    }
   render() {
    const {name , salary} = this.state
    const {onSubmit} = this.props
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex" onSubmit={(e) => {
                            e.preventDefault()
                            if(name && salary) {
                                onSubmit(e , name , salary)
                                this.reset()
                            }
                        }}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" name='name' value={name} onChange={this.onChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" name='salary' value={salary} onChange={this.onChange}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
   }
}

export default EmployeesAddForm;