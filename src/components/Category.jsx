import React, {Component} from 'react'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

export default class Category extends Component {
    render(){
        const {categories, addCategory,selectcategory } = this.props
        return (
            <div>                
                <CategoryForm  onSubmit={addCategory}/>
                <CategoryList selectcategory={selectcategory} categories={categories} />
            </div>
        )
    }
}