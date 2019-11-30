import React, { Component } from 'react';
class ClassComponent extends Component{
constructor(props){
    super(props);
}
 render() {
        return (
	<div className>
            <label >{this.props.prop1 }</label>
	</div>
        )
    }
}
export default ClassComponent;