import React from 'react'
import './projectStyle.css'


const OurProject = () => {
  return (
    <>
    <div className='project'>
     <span>Our Projects</span>
    
     <h1>Web Development</h1>
     
     <p>Welcome to Prushal Technology, your one-stop destination for top-notch web development services. 
        With a team of highly skilled developers and designers, we are passionate about crafting engaging and 
        dynamic websites that leave a lasting impression on your target audience. Whether you need a stunning 
        portfolio site to showcase your creative work, a robust e-commerce platform to boost your online sales, 
        or a custom web application to streamline your business processes, we have the expertise to bring your vision 
        to life. Our comprehensive web development solutions encompass responsive design, seamless functionality, and 
        cutting-edge technologies to ensure your website stands out in the digital landscape. Partner with us to unleash 
        the full potential of your online presence and take your business to new heights.
     </p>
     <img src='img5.jpg' className = 'img5' alt='' width= '100%'/>
     
    <h1>Some Cool Heading</h1>
     <p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas 
        odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. 
        Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis
         interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas 
         nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu 
         pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis,
         ultrices ut dui.
     </p> 
     <ul>
        <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
        <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
        <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
     </ul>
     <p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci
         lectus urna ante consequat erat non morbi.
     </p>
    </div>

  <div className='project-container'>
  {/* <img src='img6.jpg' className = 'img4' alt='' />
      <h3>200+ Plantation in 1 week</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
        tristique.
      </p> */}


      {/* <div class="content-wrapper">
    <img src="img6.jpg" class="img6" alt=""/>
    <div class="text-content">
        <h3>200+ Plantation in 1 week</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
    <img src="img6.jpg" class="img6" alt=""/>
    <div class="text-content">
        <h3>200+ Plantation in 1 week</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
   
</div> */}

<div class="content-wrapper">
    <div class="content-block">
    <img src="img6.jpg" class="img6" alt=""/>
        <div class="text-content">
            <h3>200+ Plantation in 1 week</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>

    <div class="content-block">
        <img src="img6.jpg" class="img6" alt=""/>
        <div class="text-content">
            <h3>200+ Plantation in 1 week</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>
    <div class="content-block">
        <img src="img6.jpg" class="img6" alt=""/>
        <div class="text-content">
            <h3>200+ Plantation in 1 week</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>
    
    <div class="content-block">
        <img src="img6.jpg" class="img6" alt=""/>
        <div class="text-content">
            <h3>200+ Plantation in 1 week</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>
</div>

  </div>
  {/* <img src="img7.jpg" class="img7" alt="" width = '33.33%'/>
  <img src="img8.jpg" class="img7" alt=""width = '33.33%'/>
  <img src="img9.jpg" class="img7" alt=""width = '33.33%'/> */}
  <div className='cards'>

     <div className=' card-check'> 
     <div className='c1'>
     <img src="img7.jpg" class="img7" alt="" width = '33.33%'/>
     <div className='overlay'>

    
      <h2>Mission 40K: Tree plantation</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <button className='button1'>See More</button>    
      </div> 
     </div>
  </div>

  <div className=' card-check'> 
     <div className='c1'>
     <img src="img8.jpg" class="img7" alt="" width = '33.33%'/>
     <div className='overlay'>

    
      <h2>Mission 40K: Tree plantation</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <button className='button1'>See More</button>    
      </div> 
     </div>
  </div>
  <div className=' card-check'> 
     <div className='c1'>
     <img src="img9.jpg" class="img7" alt="" width = '33.33%'/>
     <div className='overlay'>

    
      <h2>Mission 40K: Tree plantation</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <button className='button1'>See More</button>    
      </div> 
     </div>
  </div>

  </div>

  


  <div className="image-container">
            <img src="img4.jpg" className="img4" alt="" width="85%" />
            <div className="overlay-content1">
                <h2>You can contribute to make the environment greener!</h2>
                <div className="buttons">
                    <button>Button 1</button>
                    <button className='button-white'>Button 2</button>
                </div>
            </div>
        </div>


    {/* <img src='img4.jpg' className = 'img4' alt='' width= '85%'/> */}
    </>
  )
}

export default OurProject