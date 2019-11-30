import React,{Component} from 'react';


class ParamClass extends Component{

constructor(props)
{
  super(props);

}


    
render()
{

    const {
        name,
        address,
        handleclick
     } = this.props;

    return(

        
     <div>
          <p>{this.props.name}+" "+{this.props.key2}</p>
          <button onClick={this.props.handleclick} >Show</button>
         </div>

   );

}

} export default ParamClass;