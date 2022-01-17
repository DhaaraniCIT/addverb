import '../App.css';
import React, { Component } from 'react';

class Characteres extends Component {
    state = {
        loading: true,
        resultCountry:[],
        
      };
    
    async componentDidMount() {
        const url = "https://restcountries.com/v3.1/region/asia"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({resultCountry:data,loading:false});
      }

  render() {
    if (this.state.loading) {
        return (
            <div className="text-center pt-5 pb-5">
                <div className="spinner-border text-primary"></div>
                <h6  className="font-weight-bold" >Please wait while fetching the data</h6>
            </div>
        )
      }
  
      const error=(
            <div className="text-center pt-5 pb-5">
                <h3 className="font-weight-bold" >No results, Refresh the page</h3>
                <span className="reload material-icons fs-2">
                replay_circle_filled
                </span>
            </div>
        );
        const border=(index)=>{
            if(typeof index.borders == 'undefined'){
                return <p>No Borders shared</p>
            }
            else{
                return index.borders.toString()
            }
            
        }
        const languages=(index)=>{
            let lan=[];
            if(typeof index.languages == 'undefined'){
                return <p></p>
            }
            else{
                for (let value of Object.values(index.languages)) {
                    lan.push(value)
                }
                return lan.toLocaleString()
            }
            
        }
        const content=(
            <div>
                <div className="row ml-0 mr-0">
                    {this.state.resultCountry.map((person,index) => (
                    <div className="col-sm-3 col-md-6 col-lg-4 mt-4 d-flex align-items-stretch" key={index}>
                        <div className="card flex-fill hover-card">
                            <div className="card-img-container">
                                <img className="card-img-top " width="100%" height="350" alt="Charachter" src={person.flags.png}/>
                            </div>
                            <div className="card-body shadow">
                                <h3 className="card-title font-weight-bold text-truncate mb-0" style={{cursor: "pointer"}} title={person.name.common ? person.name.common : 'Character'}>
                                {person.name.common ? person.name.common : 'Character'}
                                </h3>
                                <div className="font-weight-light active-campaign-sport text-capitalize mb-2" style={{cursor: "pointer"}} title={person.Year	 ? person.Year	 : '0000'}>
                                {person.region	 ? person.region	 : 'Asia'}
                                </div>
                                <div>
                                    <div className='row ml-0 mr-0'>
                                        <div className='col-sm-6'>
                                            <b>Capital</b>
                                        </div>
                                        <div className='col-sm-6'>
                                            <i>{person.capital}</i>
                                        </div>
                                    </div>
                                    <div className='row ml-0 mr-0'>
                                        <div className='col-sm-6'>
                                            <b>Sub-region</b>
                                        </div>
                                        <div className='col-sm-6'>
                                            <i>{person.subregion}</i>
                                        </div>
                                    </div>
                                    <div className='row ml-0 mr-0'>
                                        <div className='col-sm-6'>
                                            <b>Population</b>
                                        </div>
                                        <div className='col-sm-6'>
                                            <i>{person.population}</i>
                                        </div>
                                    </div>
                                    <div className='row ml-0 mr-0'>
                                        <div className='col-sm-6'>
                                            <b>Languages</b>
                                        </div>
                                        <div className='col-sm-6'>
                                            <i>{languages(person)}</i>
                                        </div>
                                    </div>
                                    <div className='row ml-0 mr-0'>
                                        <div className='col-sm-6'>
                                            <b>Borders</b>
                                        </div>
                                        <div className='col-sm-6'>
                                        {border(person)}
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
      
    return (
        <div id="characters">
            <div className="container-sm">
                <div className="row ml-0 mr-0">
                    <div className="col-sm-8">
                        <h2>Asian Contries</h2>
                    </div>
                </div>
                <div>
                    <p className='text-center'><b>{this.state.result0}</b></p>
                    {this.state.resultCountry.length >0 ? content:error}
                </div>
            </div>
        </div>
    )
  }
}

export default Characteres;