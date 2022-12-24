import Home from "./pages/Home";
import ProductItem from "./pages/ProductItem";
import Cart from "./pages/Cart";
import config from "./config";

export const routes = [
    { path: config.home, component: Home },
    { path: config.product, component: ProductItem },
    { path: config.cart, component: Cart },
]