import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, className }) {
  const style = "text-sm text-blue-500 hover:text-blue-900 hover:underline";

  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={style + " " + className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={style + " " + className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
