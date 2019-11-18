import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Category from './components/Category'

import { addCategory,selectcategory } from './reducers/Categorias'
import { addNews } from './reducers/Noticias'

import { reset } from 'redux-form'
import News from './components/News'
class App extends Component {

  render(){
    const {
        categories,
        news,
        addCategory, 
        selectcategory,
        selected,
        addNews
      } = this.props
    return (
      <div className="App">
       
         <Category 
          selectcategory = {selectcategory} 
          addCategory    = {addCategory} 
          categories     = {categories}/>

         <News addNews={addNews} selectedCategory={selected} news={news}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  const {Categorias : {data: categories,selected}} = state;
  const {Noticias : {data: news}} = state;

  return {
    categories,
    news : news.filter(x => x.categoryId === selected),
    selected,
  }
}
const mapDispatchToProps = dispatch => ({
  addCategory : payload => 
  {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectcategory : payload => dispatch(selectcategory(payload)),
  addNews: payload=> {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
