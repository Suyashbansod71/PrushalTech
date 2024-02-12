import React, {useState} from 'react'
import "./contactStyle.css"
import Maps from '../components/Maps/Maps'

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
});



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, let's log the form data
    console.log(formData);
};

  return (
    <>
       <div className='contact'>
        <div className='container'>
          <h4>Contact Us</h4>
            <h1>We'd love to hear from you </h1>
            <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
        </div>
        <div className='container'>
           <ul>
            <li>Lets Talk</li>
            <p>+1 23 456 789 hello@pruhal.com</p>
             <hr/>
            <li>Head Office</li>
            <p>8 Brewery Drive, Hudson, NH 03051 USA</p>
            <hr/>
            <li>Branch Office</li>
            <p>178 Marconi St, Venice, 34293, Italy</p>
            <hr/>
           </ul>
           <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="instagram-logo.png" alt="Instagram Logo" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="linkedin-logo.png" alt="LinkedIn Logo" /></a>
            {/* Add more social links with appropriate images and URLs */}
        </div>
        </div>
       </div>

       <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '5rem auto' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', textAlign:'left' }}>
        <div style={{ width: '45%' }}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '15px', border: 'none', borderBottom: '1px solid #ccc', outline: 'none' }}
            />
        </div>
        <div style={{ width: '45%' }}>
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '15px', border: 'none', borderBottom: '1px solid #ccc', outline: 'none' }}
            />
        </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', textAlign:'left' }}>
        <div style={{ width: '45%' }}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '15px', border: 'none', borderBottom: '1px solid #ccc', outline: 'none' }}
            />
        </div>
        <div style={{ width: '45%' }}>
            <label htmlFor="lastName">Subject</label>
            <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '15px', border: 'none', borderBottom: '1px solid #ccc', outline: 'none' }}
            />
        </div>
    </div>

    <div style={{textAlign:'left'}}>

  
    <label htmlFor="message">Message</label>
    <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        style={{ width: '100%', height: '150px', marginBottom: '15px', border: '1px solid #ccc', outline: 'none', borderRadius: '4px' }}
        required
    ></textarea>
  </div>
    <div style={{ textAlign: 'center' }}>
        <input type="submit" value="Send Message" style={{ backgroundColor: '#180E5A', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
    </div>
</form>


    <Maps/>
    
    </>
  )
}

export default Contact