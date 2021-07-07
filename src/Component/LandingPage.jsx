import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'


class LandingPage extends Component{
    render(){
        return(
            <>
                <div style={{width:'100%', margin:'auto'}}>

               <Grid className="landing-grid" >
                    <Cell col={12}>
                        <img src="https://scontent.fnag1-3.fna.fbcdn.net/v/t31.18172-8/23550949_2267949613431425_4088535267388304232_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=LrnQvJ5hteQAX9uMs7Z&_nc_ht=scontent.fnag1-3.fna&oh=753b7044798b67d4273c584e06e580e2&oe=60E52CF1" alt="akash" className="avatar-img" />
                    </Cell>

                   <div className="banner-text">
                       <h1>Front-End Developer</h1>
                       <hr/>
                       <p>HTML5 | CSS3 | JAVASCRIPT | BOOTSTRAP | RESPONSIVE WEB DESIGN | REACT JS</p>

                    <div className="social-links">
                        <a href="https://developerashutosh.xyz" target="_blank" rel="noreferrer" >
                        <i className="fab fa-google-plus-square" />
                         </a>

                         <a href="https://www.facebook.com/ashutoshpatale.5" target="_blank" rel="noreferrer" >
                         <i className="fab fa-facebook"></i>                       
                           </a>
                        
                         <a href="https://codepen.com" target="_blank" rel="noreferrer" >
                         <i class="fab fa-codepen"></i> </a>

                         <a href="https://google.com" target="_blank" rel="noreferrer" >
                         <i class="fab fa-github"></i>
                         </a>

                    </div>
                   </div>


                   


             </Grid>  

                </div>



            </>
        )
    }
}


export default LandingPage