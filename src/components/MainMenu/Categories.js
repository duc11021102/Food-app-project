import React from 'react';
import styles from './Categories.module.css';
// hiện danh sách categories 
const Categories = (props) => {
  return (
    <div className={`${styles['btn-container']}`}>
      {props.categories.map((category, index) => {
        return (
          <button type="button" className={`${styles['filter-btn']}`} key={index} 
          onClick={() => props.filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
