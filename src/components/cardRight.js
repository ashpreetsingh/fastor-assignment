
import React,{Component,Fragment} from 'react';
import * as Icons from 'react-bootstrap-icons'
class CardRight extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    getCuisines=()=>{
        // let string=""
        // console.log(this.props.cuisines)
       let stringArr = this.props.cuisines.map((data)=>{
           return data.cuisine_name
       })
       return (<p className="card-text">{stringArr.join(",")}</p>);
    }
    handleClick=()=>{
        this.props.handleClick(this.props.data);
    }
    render(){
        return(
            <Fragment>
               <div className="card" style={{border:'none', boxShadow:'2px 4px 10px #f3f3f3', borderRadius:'20px'}} onClick={this.handleClick} >
                    <img className="card-img" src={this.props.img}
                        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} width="300px" height="300px" alt="" />
                    <div className="card-body">
                        
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text text_muted">{this.props.add}</p>
                        <p className="card-text" style={{color:'green'}}>{this.props.mode.split('_').join(" ")}</p>
                        <div className="row align-items-start">
                            <div className="col">
                            <Icons.StarFill /> {this.props.rating} <p className="text-muted">Popularity</p>
                            </div>
                            <div className="col">
                                {this.props.symbol} {this.props.cost} <p className="text-muted">Cost for two</p>
                            </div>
                        </div>
                        
                    </div>
                </div>


        </Fragment>
        )
    }
}
export default CardRight;