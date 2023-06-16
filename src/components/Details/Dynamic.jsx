import dynamic from "next/dynamic";

const DynamicMainMap = dynamic(() => import("./MapLocation"), {
    ssr: false,
    loading: ()=> <div>loading</div>,
  });

  export default function Dynamic(){
     return (
     <DynamicMainMap />
    
     )
  }