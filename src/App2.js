import React, {Component} from 'react';



class App2 extends Component{

constructor()
{
   super();
  this.state = {flag1:false};
  this.toggeleFlag=this.toggeleFlag.bind(this);

}

  toggeleFlag()
  {
    this.setState({flag1:!this.state.flag1});
  }

  render()
  {
    return (
      <div>
        {
    this.state.flag1 ?(                  <div>  
      <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
      <button onClick={this.toggeleFlag}> Show Less </button>  
    </div>) :( <div>  
            <button onClick={this.toggeleFlag}> Read More </button>  
                              </div>)
        }
    </div>
    );
  }

}

export default App2;