import dynamic from "next/dynamic";

const DynamicMainMap = dynamic(() => import("./MapSearch"), {
    ssr: false,
    loading: ()=> <div>loading</div>,
  });

  export default function DynamicMapSearch(){
     return (
     <DynamicMainMap />
    
     )
  }