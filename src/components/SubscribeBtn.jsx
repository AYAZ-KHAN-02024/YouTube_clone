import React, { useEffect, useState } from "react";
import { UseApi } from "../context/Context";

function SubscribeBtn({ currentInfo }) {
   const [subscribe, setSubscribe] = useState("");
   const { subs, setSubs } = UseApi();

   useEffect(() => {
      if (currentInfo.id && !subs.find((val) => val.id === currentInfo.id)) {
         setSubscribe("Subscribe");
      } else {
         setSubscribe("UnSubscribe");
      }
   }, [currentInfo]);

   function subsClick() {
      if (currentInfo.id && !subs.find((val) => val.id === currentInfo.id)) {
         setSubs([...subs, currentInfo]);
         setSubscribe("UnSubscribe");
      }
      if (currentInfo.id && subs.find((val) => val.id === currentInfo.id)) {
         setSubs(subs.filter((val) => val.id !== currentInfo.id));
         setSubscribe("Subscribe");
      }
   }

   return (
      <button
         onClick={() => currentInfo.id && subsClick()}
         className="text-white shadow-sm shadow-slate-600 text-xs lg:text-sm bg-red-500 p-2 rounded-2xl"
      >
         {subscribe}
      </button>
   );
}

export default SubscribeBtn;
