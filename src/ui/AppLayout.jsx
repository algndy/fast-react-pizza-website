import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation);

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]  ">
      {isLoading && <Loader />}
      <Header />

      <main className="mx-auto h-fit w-full max-w-3xl overflow-y-auto ">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
