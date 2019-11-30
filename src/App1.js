
import PropTypes from 'prop-types';  

import React, { Component } from 'react';  
class App1 extends React.Component {  
 constructor() {  
      super();  
      /*this.state = {  
         data:   
         [  
            {             
               "name":"Abhishek"             
            },  
            {            
               "name":"Saharsh"             
            },  
            {    
               "name":"Ajay"          
            }  
         ]  
      }  */

   this.state = {  
         data:   
         [  
            "Abhishek ch" ,            
            "Saharsh cv" ,            
            "Ajay cf"          
              
         ]  
      }  




   }  
   render() {  
      return (  
         <table  border="3">  
            <th><td>test col</td></th>
            <td>
              
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List prop12= {item} />)}           
                
            </ul>
            </td>  
         </table>  
      );  
   }  
}  
class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Student Name Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.prop12}</li> 
            <li>{this.props.prop12? "true1":"false"}</li>  
         </ul>  
      ); 
      
      
       
   } 
   
     
}  


/*List.propTypes = {

   prop12: PropTypes.number
                                                                                                               
};*/

/*List.defaultProps = {  
   propArray: [1,2,3,4,5],  
   propBool: true,  
   propFunc: function(x){return x+5},  
   prop12: null,  
   propString: "JavaTpoint",  
}  */




export default App1; 