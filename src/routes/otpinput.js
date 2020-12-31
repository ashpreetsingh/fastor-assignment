import React,{Fragment, Component} from 'react'
import OtpInput from 'react-otp-input'

class OTP extends Component{
    constructor(props){
        super(props);
        this.state={
            number:'',
            code:'',
            otp:'',
            message:'',
            data:{}
        }
    }
    componentDidMount(){
        this.setState({
            number : this.props.location.number,
            code : this.props.location.code
        })
    }
    handleChange=(e)=>{
        this.setState({otp:e})
        console.log(this.state.otp)
    }
    handleSubmit=()=>{
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("phone", this.state.number);
urlencoded.append("otp", this.state.otp);
urlencoded.append("dial_code", this.state.code);
// urlencoded.append("", "");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://staging.fastor.in:8090/v1/pwa/user/login", requestOptions)
  .then(response => response.json())
  .then(result=>{
    if(result.status_code===400){
        this.setState({message:result.error_message})
    }
    else{
        this.props.history.push({
            pathname: '/home',
            userdata:result.data
        })
        console.log(result.data)
    }
  })
  ;
    }
    render(){
        return(
            <Fragment> 
            <div className="container text-center mt-5 ">
            <h2>
               Enter OTP sent to {this.state.number} 
                
            </h2>
            <div className="row align-items-center justify-content-center">
               
                 <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
        
      />
      </div>
       <div className="row align-items-center justify-content-center mt-4">
                    
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    <small style={{color:'red'}}>{this.state.message}</small>
                </div>
      </div>
            </Fragment>
        )
    }
}
export default OTP;