import React, { Component } from 'react';
//import labelComp from './components/labelComp/Headline';
//import {Headline,Headline1,Headline2,Headline3} from './components/labelComp';
import * as mainc from './components/labelComp';
import {App1,App2} from './components/Lambdafunc';
import ClassComponent from './components/ClassComponent';
import ParamClass from './components/ParamClass';
class App extends Component{


    welcome(e){
    alert('Hello this is parent component'+e);
    
        }

  render(){

     var sz= {
      fontSize: 80,
        color: '#003300' 


     }
      var i =5; 

     

    

            const passob = {name: 'val1',address:'val2',handleclick:this.welcome};

      //const appl = ({props})=>  <h1>{props}</h1>;    
    

     return (
    
     <div>

       <h1 style={sz}>this us a test header </h1>
       <h2>{i===1 ? 'true':'false'}</h2>
       <mainc.Headline param2={'test1'}/>
       <mainc.Headline1 param2={'test2'}/>
       <mainc.Headline2 param2={'test3'}/>
       <mainc.Headline3 param2={'test4'}/>
       <App1/>
       <App2/>
       <ClassComponent prop1={'testprop'}/> 
       <ParamClass {...passob}/>

     </div>


     );



  }



  

}

export default App;