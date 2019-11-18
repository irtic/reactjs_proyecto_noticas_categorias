import React, {Component} from 'react'


export default class CategoryList extends Component {
    handleClick = id =>() => {
        const {selectcategory} = this.props
        selectcategory(id)
    }
    render(){
        const { categories,selectcategory } = this.props
        return(
            <ul>
                {categories.map(x => <li onClick={this.handleClick(x.id)} key={x.id}> {x.name} </li>)}
            </ul>
        )
    }
}

