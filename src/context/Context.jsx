import { createContext, useContext, useEffect, useState } from "react";
import { FetchApi } from "../utils/Api";


const MyContext = createContext();

//this function for subscription
function subsStorage(){
 let data=JSON.parse(localStorage.getItem('subscription'));
 if(!Array.isArray(data)){
    return []
 }
 else{
    return data
 }
};

//this function for savedVideos
function saveVidStorage(){
  let data =JSON.parse(localStorage.getItem('savedVideos'));
  if(!Array.isArray(data)){
    return []
  }else{
    return data
  }
}

function getRandomWord(){
  const natureWords=[ 'norway drone hd view', 'kerala drone hd view', 'finland drone hd view', 'Greece drone hd view', 'landscape', 'italy drone hd view']
  const word=Math.floor(Math.random()*natureWords.length)
  return natureWords[word];
}

export const ContextProvider = ({ children }) => {
    //this is for home page
    const [category, setCategory] = useState(getRandomWord());
    const [videos, setVideos] = useState([]);    

    //this is for Search page
    const [search, setSearch] = useState('');
    const [srhVideos, setSrhVideos] = useState([]);

    //this is for  subscription - i have not access of database thats why subscriber can not increase you can only save in subscription page
    const [subs,setSubs]=useState(subsStorage());
    useEffect(()=>{
        localStorage.setItem('subscription',JSON.stringify(subs));
    },[subs])

    //this is for savedVideos
    const[saveVideos,setSaveVideos]=useState(saveVidStorage());
    useEffect(()=>{
     localStorage.setItem('savedVideos',JSON.stringify(saveVideos))
    },[saveVideos])

    //this useEffect for home page
    useEffect(() => {
        FetchApi(`search?part=snippet&q=${category.length == 0 ? 'peaceful place' : category}`)
            .then((obj) => setVideos(obj.data ? obj.data.items :[]))
    }, [category]);


    //this useEffect for Search page
    useEffect(() => {
        FetchApi(`search?part=snippet&q=${search.length == 0   ? '4k drone view' : search}`)
            .then((obj) => setSrhVideos(obj.data ? obj.data.items : [] ))
    }, [search]);



    return (
    <MyContext.Provider 
    value={{subs,setSubs, category, setCategory, videos, search, setSearch, srhVideos,saveVideos,setSaveVideos}}>
        {children}
    </MyContext.Provider>
    )

}

//custom hook for use context data
export const UseApi = () => {
    return useContext(MyContext)
}


