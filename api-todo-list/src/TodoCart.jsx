import React from "react";

const TodoCart = (props) => {
    const {todo} = props
const { title, completed } = todo;
console.log(title);
return(
          <div>
            <h4>{title}</h4>
            <h6>{`Completed ${completed}`}</h6>
          </div>
);
};

export default TodoCart;