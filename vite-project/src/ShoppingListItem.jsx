import PropTypes from "prop-types";

function ShoppingListItem({item, quantity, completed}){

    const styles = {
        color: i.completed ? "grey" : "red",
        textDecoration: completed ? "line-through" : "none",
    }
    return (
        <li style={style}>
            {item}-{quantity}
        </li>
    )
}

export default ShoppingListItem;

ShoppingListItem.PropTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool,
}