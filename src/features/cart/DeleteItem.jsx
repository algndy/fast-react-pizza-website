import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
