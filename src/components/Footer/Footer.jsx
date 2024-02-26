import React from 'react'
import './footer.css'
const Footer = () => {
  return (
//     <>
    
//     <div className='footer'>
//      <div className='footer_menu'>
//         <img src='final-logo1.jpeg' height= '50px'/>
//         </div>   
//      <div className='footer_menu'>Our Team
//        <p>About Us</p>
//        <p>Team</p> 
//        <p>What We Do</p>
//        <p>Contact</p>
//      </div>
//      <div className='footer_menu'>More
//       <p>Projects</p>
//       <p>Events</p>
//       <p>Services</p>
//       <p>Blog</p>
//      </div>
//      <div className='footer_menu'>Connect
//      <p>FaceBookLogo</p>
//      <p>IGLogo</p>
//      <p>TwitterLogo</p>
//      <p>LinkedInLogo</p>
//      </div>
//      <div className='footer_menu'>Subscribe</div>
//     </div>
    
//     </>
<footer>
    <div class="footer-left">
      
        <div class="footer-columns">
        <img src="logo.png" alt="Logo"/>
            <div class="footer-column">
                <h4>Our Team</h4>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>More</h4>
                <ul>
                    <li><a href="http://localhost:3000/project">Projects</a></li>
                    <li><a href="http://localhost:3000/event">Events</a></li>
                    <li><a href="http://localhost:3000/services">Services</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Connect</h4>
                <ul>
                    <li><a href="#">Link 9</a></li>
                    <li><a href="#">Link 10</a></li>
                    <li><a href="#">Link 11</a></li>
                    <li><a href="#">Link 12</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <h4>Subscribe to get latest</h4>
        <h4>updates</h4>
        <form>
            <input type="email" placeholder="Your email" required/>
            <button type="submit">Subscribe</button>
        </form>
    </div>
</footer>

  )
}

export default Footer