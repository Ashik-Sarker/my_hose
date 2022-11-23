
import Guest from "./components/AuthUser/Guest";
import Auth from "./components/AuthUser/Auth";
import { createContext, useState } from "react";
export const mainContext = createContext();

function App() {
  // const {getToken} = AuthUser();
  const [isLogin, setIsLogin] = useState(false);
  // console.log('from app', isLogin);

  if (isLogin === false){
      return (
        <mainContext.Provider value={{setIsLogin}}>
          <Guest/>
        </mainContext.Provider>
      )
  }
  return (
    <mainContext.Provider value={{setIsLogin}}>
      <Auth/>
    </mainContext.Provider>
  );
}


// function App() {
//   return (
//     <div className=" ">
//       <AuthUser/>
//     </div>
//   );
// }

export default App;
