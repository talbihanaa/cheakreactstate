import React from "react"
class Profile extends React.Component{


constructor(){
    super()
    this.state={
        interval: 0,
        timer:0
    }
}

componentDidMount(){
    this.setState({
        interval:setInterval(()=>{
            this.setState({timer: this.state.timer +1})
        },1000)
    })
}
componentWillUnmount(){
    
}

 render(){
    return(
        <div>
            <h1>Component mounted for {this.state.timer}second</h1>
        </div>
    )
 }
}
export default Profile