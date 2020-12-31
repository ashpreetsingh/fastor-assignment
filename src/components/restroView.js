import React,{Component,Fragment} from 'react'
// import { ViewList } from 'react-bootstrap-icons';
import Card from './cardRight'
import logo from '../assets/Fastor Logo.png'
import Draggable from 'react-draggable'
class Restro extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            loading:true
        }

    }
    componentDidMount(){
        if(this.props.location.restro!==undefined){
        this.setState({data:this.props.location.restro, loading:false})
        }
        
    }
    render(){
        if(!this.state.loading)
        return(
            <Fragment>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-4" style={{position:'relative', display:'inline'}}>

                <Card img={this.state.data.thumbnail_image} name={this.state.data.restaurant_name} 
                                rating={this.state.data.rating.restaurant_avg_rating} symbol={this.state.data.currency.symbol} cost={this.state.data.avg_cost_for_two}
                                cuisines={this.state.data.cuisines} add={this.state.data.address_complete} mode={this.state.data.restaurant_mode}  />
               <Draggable><div style={{position:'absolute', top:'0', bottom:'0'}}> <img src={logo} alt="logo"  width='100' height='100' /></div></Draggable>
                </div>
                </div>
                </div>
            </Fragment>
        )
        else
        return(
            <Fragment>
                Loading
            </Fragment>
        )
    }
}
export default Restro;