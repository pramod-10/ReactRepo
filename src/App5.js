import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';  
class App5 extends React.Component {  


    constructor()
    {
      super();

      this.state={key:"FIrtst stateval"};

      this.changeState=this.changeState
.bind(this);
 this.callback1=this.callback1.bind(this);
    var flag=true;

    }


    callback1()
    {

   
       alert("Componnenet updated");


  

    }

    changeState(e) {
        
        if(this.flag === true)
        {
        this.setState({key:"CHanged state"});
        var myDiv = document.getElementById('d1'); 
        ReactDOM.findDOMNode(myDiv).style.border="solid #00ffdd";
        this.flag=false;
        }
        else{
            this.setState({key:"CHanged state1"});
            var myDiv = document.getElementById('d1'); 
            ReactDOM.findDOMNode(myDiv).style.border="solid #000000";
            this.flag=true;

        }

        this.forceUpdate();
    }

   
   



 
   render() {  
      return (  
          <div>  
              <h1>Render component {Math.random()}</h1>
              <h1>{this.state.key}</h1>  
              <button id ="b1" onClick={this.changeState}>Update</button>
              <h2>Random number: {Math.random()}</h2>

              <div id = "d1">THIS IS DIV 1</div>
        </div>  
        ); 
        
        
   } 
   

   
   
}  





function validate(props, propName, componentName) { 
        var item = props[propName]; 
       // alert("Hello1" + item);
         if (!Number.isInteger(item)) { 
            
           return new Error('Validation failed!'); 
          } 
       } 
    
    


App5.propTypes = {  
    propArray: PropTypes.array.isRequired,  
    propBool: PropTypes.bool.isRequired,  
    propFunc: PropTypes.func,  
    props1: validate,  
    propString: PropTypes.string,   
}  
/*App5.defaultProps = {  
    propArray: [1,2,3,4,5],  
    propBool: "true",  
    propFunc: function(x){return x+5},  
    propNumber: 1,  
    propString: "JavaTpoint",  
}  */
export default App5; 