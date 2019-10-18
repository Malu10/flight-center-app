import React from 'react';

import './NavigationItem.css';

import NavigationList from '../NavigationList';

const navigationItem = ( props ) => {

    let subMenu = '';
    const menuItem = NavigationList.map((data, index) => {
        // subMenu = data.subMenu.map((menu, id) => {
        //     // const link = "/"+ {menu.value};
        //     return (
        //         <ul>
        //             <li
        //                 key = {menu.id}
        //             >
        //                 <a href={"/" + menu.value}>
        //                     {menu.value}
        //                 </a>
        //             </li>
        //         </ul>
        //     )
        // })

        return (
            <li
                key = {data.id}
                className="NavigationItem"
            >
                <a
                    href={"/" + data.value}
                    onClick={props.handleMenuItemClick}
                    title = {data.value}
                >
                    {data.value}
                </a>
            </li>
        )
    });

    return (
        <div>
            {menuItem}
            {subMenu}
        </div>
    )
};

export default navigationItem;