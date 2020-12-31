
import React,{Component,Fragment} from 'react';
// import * as Icons from 'react-bootstrap-icons'
class VerticalCard extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
   
    render(){
        return(
            <Fragment>
               <div className="card" style={{border:'none', boxShadow:'2px 4px 10px #f3f3f3', borderRadius:'20px'}} >
                    <img className="card-img" src={this.props.img} onClick={this.handleClick}
                        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} width="300px" height="300px" alt="" />
                    <div className="card-body">
                        
                        <h5 className="card-title">{this.props.name}</h5>
                       
                </div>
            </div>

        </Fragment>
        )
    }
}
export default VerticalCard;