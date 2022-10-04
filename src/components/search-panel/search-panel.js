import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_text:""
        }
    }
    onUpdatedSearch = (e) => {
        let search_text = e.target.value
        this.setState({search_text})
        this.props.onUpdatedSearch(search_text)
    }
    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdatedSearch}
                    />
        )
    }

}

   


export default SearchPanel;