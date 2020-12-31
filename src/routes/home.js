import React,{Component,Fragment} from 'react'
import CardRight from '../components/cardRight'
// import HorizontalScroll from 'react-scroll-horizontal'
import VerticalCard from '../components/verticalCard'

class Home extends Component{
    constructor(props){
        super(props);
    this.state={
        userData:{},
        data:[]
    }
}
    componentDidMount(){
        
        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMDctMjRUMTE6NTk6NDUuMDAwWiIsImlhdCI6MTYwOTMxODUxOSwiZXhwIjoxNjE2NTc2MTE5fQ.NUDK1cz7HkO41M7I0o65XUAWwMDoKc0bI2BaGC9V_Yw");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&", requestOptions)
  .then(response => response.json())
  .then(result => {this.setState({data:result})
    
})
console.log(this.props.location.userdata)

    }

    handleClick=(data)=>{
        this.props.history.push(
            {
                pathname: `/lists/${data.restaurant_id}`,
                restro: data
                
            }
        )
    }
    render(){
        // const styler={width:'30em', height:'100%'}
        console.log(this.state.data)
        return(
            
            <Fragment>
                <div className="container">
                    <h1 className="mt-5">
                        Hello, guest!
                    </h1>
                    <div className="row justify-content-between align-items-center my-4">
                        <div className="col-4">
                    <h2>Your Taste</h2>
                    </div>
                    <div className="col-4">
                        <a href='/getmore###'>
                            See more 
                        </a>
                    </div>
                    </div>
                    <div className="row my-4 justify-content-around">
                    {   
                    this.state.data.map((data,key)=>{
                        if(key<3){
                        return(
                            <div className="col-sm-4 mb-4">
                                <VerticalCard img={data.thumbnail_image} name={data.restaurant_name} 
                                />
                            </div>
                        )
                        
                        }
                        else
                        return(<Fragment />)
                    })
                }
                    </div>

                <h2>Popular Ones</h2>
                <div className="row my-4 justify-content-around">
                {   
                    this.state.data.map((data,key)=>{
                        return(
                            <div className="col-sm-4 mb-4">
                                <CardRight img={data.thumbnail_image} name={data.restaurant_name} 
                                rating={data.rating.restaurant_avg_rating} symbol={data.currency.symbol} cost={data.avg_cost_for_two}
                                cuisines={data.cuisines} add={data.address_complete} mode={data.restaurant_mode} key={key} data={data} 
                                handleClick={this.handleClick} />
                            </div>
                        )
                    })
                }
                </div>
                </div>
            </Fragment>
        )
    }

}
export default Home;

