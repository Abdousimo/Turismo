import dynamic from "next/dynamic";

const DynamicMainMap = dynamic(() => import("./Map"), {
    ssr: false,
    loading: ()=> <div>loading</div>,
  });

  export default function DynamicMap(){
     return <DynamicMainMap/>
  }
