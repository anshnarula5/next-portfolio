import React,  {useState, useRef} from 'react'
import emailjs from "emailjs-com"
import {Toast} from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';



const Email = () => {
    const [formData, setFormData] = useState({username: "", message: "", email: ""})
    const toast = useRef(null)
    const {username, message, email} = formData
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    const showSuccess = (msg) => {
        toast.current.show({severity: 'success', summary: msg});
    }
    const showError = (msg) => {
        toast.current.show({severity: 'error', summary: msg});
    }
    const sendEmail = (e) => {
        if (message.trim().length === 0 || email.trim().length === 0 || username.trim().length === 0) {
            showError("Please specify all fields")
        }
            else {
                e.preventDefault();
                emailjs.sendForm("service_6a7nokb", 'template_r29gwxa', "#form", 'user_ekTuU822CTjP5kfqrKB7O')
                  .then((result) => {
                    showSuccess("Mail Sent!")
                  }, (error) => {
                      showError("Something went Wrong. Please try again later")
                  });
                  setFormData({username: "", message: "", email: ""})
                }
    };
    
    return (
        <div style={{backgroundColor: "#022b3a", color: "white"}} className="row px-5  text-center">
            <Toast position = "bottom-center" ref={toast} /> 
            <div className="col-md-6 px-5">
                <h1>Links</h1>
                <div className="d-flex  mt-5 d-flex justify-content-evenly px-5">
                    <div className = "">
                    <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" width="40rem" />
                    </div>
                    <div className = "">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" width="40rem" />
                    </div>
                    <div className = "">
                    <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" width="40rem"/>
                    </div>
                    {/* <div className = "">
                    <img src="https://img.icons8.com/ios-filled/50/000000/mail.png" width="40rem"/>
                    </div> */}
                </div>
            </div>
            <div className="col-md-6 ">
            <h1 className = "my-5">Say Hi</h1>
            <form id = "form" onSubmit = {sendEmail}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input value = {username} onChange = {handleChange} name = "username" type="text" className="form-control" id="inputEmail3" style = {{backgroundColor : "transparent", color  :"white"}} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input value = {email} onChange = {handleChange} name = "email" type="email" className="form-control" id="inputEmail3" style = {{backgroundColor : "transparent", color  :"white"}} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Message</label>
                    <div className="col-sm-10">
                    <textarea value = {message} onChange = {handleChange} name = "message" type="text" rows = "4" className="form-control" id="inputPassword3"  style = {{backgroundColor : "transparent", color  :"white"}} />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-primary ">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Email
