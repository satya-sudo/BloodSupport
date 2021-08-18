import React,{useState} from 'react';
import {connect} from 'react-redux';
import {getAll,getSearched,addDonor} from '../actions';

import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import RulesMain from './Rules/RulesMain';
import AddDonorForm from './Donors/AddDonor';

import Lister from './Donors/Lister';
import Footer from './Footer';

import { useTransition,animated } from 'react-spring';




// class App extends React.Component{


//     constructor(props){
//         super(props);
//         this.state = {donorToggle:false};
//         this.test = this.test.bind(this);
//         this.changeToggle = this.changeToggle.bind(this);
//         this.donorFromConditional = this.donorFromConditional.bind(this);
//     }
//     test (){
//         this.props.addDonor({name:"satyam"})
//     }

//     changeToggle(){
//         this.setState({donorToggle:!this.state.donorToggle});

//     }
    
//     donorFromConditional() {
//         if (this.state.donorToggle === true){
            
//             return <AddDonorForm  handleToggle={this.changeToggle} />
//         };
//     }
//     transition =  useTransition(this.state.donorToggle) 
//     render() {
//     return(
//         <div>
//             <NavBar />
//         {/* <button onClick={()=>this.props.getAll()}>ds</button>
//         <button onClick={()=>this.props.getSearched({ params: {state:"Bihar"} })}>ds</button> */}
//             <Jumbotron id="landing" handleToggle={this.changeToggle} />
//             {console.log(this.donorToggle)}
//             {this.donorFromConditional()}
//             <RulesMain id="help" />
//             {/* <SearchBar /> */}
//             <Lister id="donors" />
//             <Footer />
            
//         </div>
//     );
//     }
// };
{/* <AddDonorForm  handleToggle={setToggle} /> */}
// const mapStateToProps = (state) => {
//     return {
        
//     }

// }

// export default connect(mapStateToProps,{getAll,getSearched,addDonor})(App);


const App = () => {

    const [toggle,setToggle] = useState(false)

    // const transitions =  useTransition(toggle,{
    //     from: {with:"0%"},
    //     enter: {with:"100%"},
    //     leave: {}
    // });

    return (
        <div>
            <NavBar />
            <Jumbotron id="landing" handleToggle={setToggle} />
            
            {toggle?<AddDonorForm  handleToggle={setToggle} toggle={toggle}/> : null}
            {/* {transition((style,item) => 
                item ? <animated.AddDonorForm style={style} handleToggle={setToggle} /> : null 
            
            )} */}
             {/* {transitions.map(({ item, style, key }) => {
                
                return item ? <animated.AddDonorForm style={style} handleToggle={setToggle} /> : ""
            })} */}
            <RulesMain id="rights" />
            <Lister id="donors" />
            <Footer id="contact" />
            
        </div>



    )


}

export default App;