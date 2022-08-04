import React from "react";
import './styles/App.css';
import PostItem from "./componenets/PostItem";
import {useState} from "react";
import PostList from "./componenets/PostList";
import MyInput from "./componenets/UI/input/MyInput";
import MyButton from "./componenets/UI/button/MyButton";
import FindForm from "./componenets/FindForm";
import axios from "axios";
import Car from "./componenets/Car";
import CarList from "./componenets/CarList";

function App() {
    function secret(){alert("Иди нахуй!")}
    const [posts, setPosts] = useState([
        {id: 1, title: "js", body:"js - яп1"},
        {id: 2, title: "js2", body:"js - яп2"},
        {id: 3, title: "js3", body:"js - яп3"},
    ]);

    const [cars, setCars] = useState([
        {url: "1", img : "https://auto.ru/cars/used/sale/bmw/3er/1116322768-e81655de/", name : "BMW", other: "1 info wefjewifewifnewufewufbuweyfe wyefduyfuywfuy hdvwuy vuf"},
        {url: "2", img : "https://dailystorm.ru/hayp/mercedes-benz-predstavil-prototip-mashiny-budushchego", name : "Mersedes", other: "2 info hfbwehfb uwebu hebwf uw buwebf h bwfjwefv wejjwefbj"},
    ]);


    const findByParams = (urlParams) => {
        console.log(urlParams);
    }

    async function get_main(){
        const ans = await axios.post("https://fpmiautoparser.herokuapp.com/getCarsByParams/",
            {"url" : "https://auto.ru/cars/bmw/all/"})
        console.log(ans.data)
        console.log(ans.data[0])
    }

    async function get_example(){
        const ans = await axios.get("https://jsonplaceholder.typicode.com/posts/")
        console.log(ans.data)
        console.log(ans.data[0])
    }

//https://jsonplaceholder.typicode.com/
//https://fpmiautoparser.herokuapp.com/


    return (
        <div className="App">
            <MyButton onClick={get_example}>get_example</MyButton>
            <MyButton onClick={get_main}>get_main</MyButton>
            <MyButton onClick={secret}>PUSH ME!</MyButton>
            <FindForm takeParams={findByParams}/>
            <CarList cars={cars} title="Car list" />
        </div>
  );
}

export default App;