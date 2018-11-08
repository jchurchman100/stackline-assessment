import React, { Component } from 'react'

const ProductDetail = (props) => {    

    console.log(props.item);
    const imageUrl = props.item.image;
    const title = props.item.title;
    const sub = props.item.subtitle;
    
    return (
        <div className = "col-md-3">
            <ul className = "detail list-group">
                <li className = "list-group-item info" >
                    <img src = {imageUrl}/>
                    <h3>{title}</h3>
                    <p>{sub}</p>
                </li>

                <li className = "btn-group-sm list-group-item">
                    <button className = "btn">Pantry</button>
                    <button className = "btn">Obsolete</button>
                    <button className = "btn">Blender</button>
                    <button className = "btn">Lightning Deal</button>
                </li>

                <li className = "list-group-item">
                    <h4>Overview</h4>
                    <h4>Sales</h4>
                </li>
            </ul>
            <div className = "col-md-1" />
        </div>
    );
}

export default ProductDetail;
