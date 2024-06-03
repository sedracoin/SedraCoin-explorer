import { createContext } from "react";


const PriceContext = createContext({'price': 0});
PriceContext.displayName = "SdrPrice";

export default PriceContext;
