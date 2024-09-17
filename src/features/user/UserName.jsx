import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function UserName() {
  const username = useSelector(getUsername);
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold uppercase md:block">
      {username}
    </div>
  );
}

export default UserName;
