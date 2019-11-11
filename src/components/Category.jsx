import React, {Component} from 'react'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

export default class Category extends Component {
    render(){
        const {categories } = this.props
        return (
            <div>                
                <CategoryForm  />
                <CategoryList categories={categories} />
            </div>
        )
    }
}