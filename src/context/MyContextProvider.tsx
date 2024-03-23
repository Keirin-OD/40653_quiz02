import MyContext, {Product} from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
    products: Product[];
    step: number;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children, products, step }) => {
    
    return (
      <MyContext.Provider value={{ products, step}} >
         {children}
      </MyContext.Provider>
    );
  };