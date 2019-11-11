import React, {Component} from 'react'
import {reduxForm, Field } from 'redux-form'

export default class CategoryList extends Component {
    render(){
        const { categories } = this.props
        return(
            <ul>
                {categories.map(x => <li key={x.id}> {x.name} </li>)}
            </ul>
        )
    }
}

