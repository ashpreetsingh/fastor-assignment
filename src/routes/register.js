import React,{Fragment, Component} from 'react'
// import bg from '../assets/bg.jpg'
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            code:'',
            number:''
        }
    }
    getNumber=(e)=>{
        this.setState({number:e.target.value})
    }
    getCode=(e)=>{
        this.setState({code:e.target.value})
    }
    handleSubmit=(e)=>{
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("phone", this.state.number);
urlencoded.append("dial_code", this.state.code);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://staging.fastor.in:8090/v1/pwa/user/register", requestOptions)
  .then(response => response.json())
  .then(result=>{
      if(result.status_code===400){
          this.setState({message:result.error_message})
      }
      else{
          this.props.history.push({
              pathname: '/login',
              number:this.state.number,
              code:this.state.code
          })
      }
  })
  
}
 
    render(){
        return(
            <Fragment>
                <div className="container text-center mt-5 ">
                <h1 >
                    Welcome to Fastor
                    
                </h1>
                <h2>
                    Enter your mobile number to continue
                </h2>
                <div className="row align-items-start justify-content-center mt-4x">
                <div className="col-1">
                    <input type="code" className="form-control" id="code" name="code" placeholder="Code" onChange={this.getCode} />
                </div>
                <div className="col-3">
                <input type="tel" className="form-control" placeholder="Number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={this.getNumber} />
                </div>
              

                </div>
                <div className="align-items-center justify-content-center mt-4">
                    
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    <small style={{color:'red'}}>{this.state.message}</small>
                </div>
            
                </div>

            </Fragment>
        )
    }

}
export default Register;