import React from  'react';


class App3 extends React.Component
{

    constructor()
    {
        super();
        this.state = {state1:false};
        this.handler1=this.handler1.bind(this);
    }


    handler1(){

        this.setState({state1:!this.state.state1});
    }

    render()
    {

        const togg = this.state.state1===true ? 
       <div><p>This is the tutorial</p><button onClick={this.handler1}>
            Show Less </button> </div>:<div><p>This is the tutorial1</p><button onClick={this.handler1}>
            Show Less </button> </div>;
        
        //<button onClick={this.handler1}>toggle</button>;
        return (<table><th><td>{togg}</td><td>head2</td></th>
        <tr><td>rest</td><td>12</td></tr></table>);
        // return (<div><h1>The resule state is </h1>{togg}</div>);
    }



}
export default App3;