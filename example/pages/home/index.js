import React from 'react';
import './style.scss';
import Iframe from 'react-iframe'
const Home = (props) => {
    return (
        <div className="content">
           <Iframe url="https://das.base.shuju.aliyun.com/dashboard/view/pc.htm?spm=a2c10.10637826.0.0.1cb84666WSshUm&pageId=eb1859a1-d800-4d2f-be1d-21f0f2158217&accessToken=6794b7b42b80504424011fcfdcaac69c"
        width="100%"
        height="800"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
        <div style={{color:"red"}}>this is home</div>
        <a href="/#/button">button-demo</a>

   </div>
    );
};

export default Home;
