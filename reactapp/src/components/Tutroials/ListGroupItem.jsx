import React, { useEffect, useState } from 'react';
import TutorialContent from './TutorialContent';

const ListGroupItem = (props, onSelectItem) => {
    const [selectItem, setSelectItem] = useState(0)

    function handleClick(item, content) {
        props.onSelectItem(item, content);
    }
    return (
        <div>
            <nav className="mt-10 max-h-100 overflow-y-auto">
                <ul>
                    {props.products && props.products.map((record, index) => (
                        <li key={record.pk}
                            className={selectItem === index ? "block py-2.5 px-4 text-gray-100" : "block py-2.5 px-4 text-gray-800"}
                            onClick={() => {
                                setSelectItem(index);
                                handleClick(record.fields.title, record.fields.content);
                            }}
                        >{record.fields.title}- {record.pk}</li>
                    ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default ListGroupItem