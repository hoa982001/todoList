import React, {  } from "react";

function TodoItem({id, item, onCheck}){
    return(
        <div>
            <li onClick={() => {onCheck(id)}}>
                {item}
            </li>
        </div>
    )
}

export default TodoItem;