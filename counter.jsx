import React, { Component } from 'react';
class Counter extends Component {
    state = { 
            
            value: '',
            value2: '',
            value3: '',
            value4: '',
            list: [],
            list2:[],
            list3:[],
            list4:[],
            
            
        }
    
    onClearArray = () => {
        this.setState({ list: [] });
        this.setState({ list2: [] });
        this.setState({ list3: [] });
        this.setState({ list4: [] });
        

    };



    onChangeValue = event => {
        this.setState({ value: event.target.value });
      };

    onChangeValue2 = event => {
        this.setState({ value2: event.target.value2 });
      };

    onChangeValue3 = event => {
        this.setState({ value3: event.target.value3 });
      };

      onChangeValue4 = event => {
        this.setState({ value4: event.target.value4 });
      };

    onAddItem = () => {
        
        this.setState(state => {
          
          const list  = state.list.concat(state.value);
          const list2  = state.list2.concat(state.value2);
          const list3  = state.list3.concat(state.value3);
          const list4  = state.list4.concat(state.value4);
    
          return {
            list,
            list2,
            list3,
            list4,
            value: '',
            value2: '',
            value3: '',
            value4: '',
          };
        });
      };

     



    
    
    render() { 
        
        return(
            <div>
                <table>
                    <td>
                        <label>Firstname</label>
                        <input  class="form-control" 
                                value={this.state.value}
                                onChange={this.onChangeValue}/>

                    </td>
                    <td>
                    <label>Lastname</label>
                        <input  class="form-control"
                                value={this.state.value2}
                                onChange={this.onChangeValue2}/>
                    </td>
                    <td>
                    <label>Street</label>
                        <input class="form-control"
                        value={this.state.value3}
                        onChange={this.onChangeValue3}/>
                    </td>
                    <td>
                    <label>City</label>
                        <input class="form-control"
                        value={this.state.value4}
                        onChange={this.onChangeValue4}/>
                    </td>
                    <td valign="bottom">
                    
                        <button type="button" 
                                class="btn btn-primary" 
                                onClick={this.onAddItem}
                                disabled={!(this.state.value && this.state.value2 &&
                                    this.state.value3 && this.state.value4)}>Insert</button>
                        
                    </td>
                    
                </table>

                
                
                    <div >
                        <table>
                            {this.state.list.map(item => (
                            <td key={item}>
                            
                                <input class="form-control" value={item}/>

                            </td>))}
                            {this.state.list2.map(item => (
                            <td key={item}>
                            
                                <input class="form-control" value={item}/>
                            </td>))}
                            {this.state.list3.map(item => (
                            <td key={item}>
                            
                                <input class="form-control" value={item}/>
                            </td>))}
                            {this.state.list4.map(item => (<div key={item}>
                            <td >
                            
                                <input class="form-control" value={item}/>
                            </td>
                            <td>
                            
                                <button type="button" class="btn btn-primary" onClick={this.onClearArray}>Remove</button>
                            </td></div>))}
                    
                        </table>
                        
                    </div>
                
            </div>
            
        ); 
            
    }
}
 
export default Counter;