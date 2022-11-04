import In from "../components/In";
import "../styles/style.css";





function MyApp({ Component, pageProps }) {


  return (<>
  <div className="bg-gray-500 h-screen">
     <In />
   <Component {...pageProps} />
  </div>
  
    
  </>
  
  );
}

export default MyApp;
