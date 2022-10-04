import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import id from "react-id-generator"

import './app.scss';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [
        {name: 'Jonh' , salary: 500 , increase:false , like:false , id:id()} ,
        {name: 'Alex' , salary: 1500 , increase:true  , like:false , id:id() } ,
        {name: 'Adam' , salary: 700 , increase:false , like:false , id:id()}
      ] ,
      search_text:"" ,
      filter_name:"all"
    }
  }

  onFilter = (data , filter_name) => {
      switch(filter_name) {
        case "all":
          return data
        case "increase":
          return data.filter(item => item.increase )
        case "moreThan1000":
          return data.filter(item => item.salary > 1000)
        default:
          return data
      }
  }

  onDelete = (id) => {
      this.setState(({data}) => ({
       data:data.filter((item) => item.id !== id)
      }))
  }

  onSubmit = (e , name , salary) => {
      e.preventDefault()
      this.setState(({data}) => ({
        data: [...data , {name , salary , increase:false , like:false , id:id() } ]
      }))
  }

  onToggleIncrease = (id) => {
      this.setState(({data}) => ({
        data: data.map((item) => {
            if(item.id === id) {
              return {...item , increase: !item.increase}
            }
            return item
        })
      }))
  }

  onSearch = (data , search_text) => {
    if(!search_text) {
      return data
    }

    return data.filter(item => item.name.indexOf(search_text) > -1)
  }

  onUpdatedSearch = (search_text) => {
    this.setState({search_text})
  }

  onToggleLike = (id) => {
    this.setState(({data}) => ({
      data: data.map((item) => {
          if(item.id === id) {
            return {...item , like: !item.like}
          }
          return item
      })
    }))
}
  onToggleFilter = (filter_name) => {
    this.setState({
      filter_name
    })
  }

  render() { 
    const {search_text , data , filter_name} = this.state
    const employeesCount = data.length 
    const likeEmployeesCount = data.filter(item => item.like).length
    const filredData =  this.onSearch( this.onFilter( data  , filter_name ) , search_text) 
    return (
      <div className="app">
          <AppInfo employeesCount={employeesCount} likeEmployeesCount={likeEmployeesCount} />
  
          <div className="search-panel">
              <SearchPanel onUpdatedSearch={this.onUpdatedSearch}/>
              <AppFilter onToggleFilter={this.onToggleFilter} filter_name={filter_name}/>
          </div>
          
          <EmployeesList data = {filredData} onDelete={this.onDelete} onToggleIncrease={this.onToggleIncrease} onToggleLike={this.onToggleLike}/>
          <EmployeesAddForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default App;
