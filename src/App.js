import React, { Component } from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Rootaux from "./Rootaux/Rootaux";
import Comment from "./components/comment/Comment";

class App extends Component {
    render() {
        return (
            <div>
               <Rootaux>
                   <Topbar/>
                   <Header/>
               </Rootaux>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        );
    }
}

export default App;
