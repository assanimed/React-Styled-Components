import Context, { products } from "./ProductContext";


const Provider = ({children}) => {
    return <Context.Provider value={{products}}>
        {children}
    </Context.Provider>
}


export default Provider;