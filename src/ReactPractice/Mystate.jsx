import React , { Component } from 'react'

class Mystate extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }


increment(){
    this.setState({
        count: this.state.count+1
    })
}
render()  {
        return(
            <>
               <h3>{this.state.count}</h3> 
                <button onClick={()=>this.increment()}>Increment Count here</button>

            </>
        )
}

}

export default Mystate