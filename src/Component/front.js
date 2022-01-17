import Header from '../Component/header';
import '../App.css';

function Front() {
return(
    <div className="header">
        <Header/>
        <div className="container content">
            <h1>Know more <br/> about Asian Countries</h1>
            <a href="#characters"><button type="button" className="btn btn-light"><b>Know More</b></button></a>
        </div>
    </div>
)
}

export default Front;