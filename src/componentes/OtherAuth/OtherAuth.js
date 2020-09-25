import React from 'react';

import './OtherAuth.css';

import google from '../../Image/Icon/google.png';
import fb from '../../Image/Icon/fb.png';
import Logo from '../../Image/Icon/Logo.png';
import * as firebase from "firebase/app";
import  "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {createContext, useContext, useState} from 'react';
import {Button, Container, Form,FormControl, Nav, Navbar} from 'react-bootstrap';
firebase.initializeApp(firebaseConfig)

const OtherAuth = () => {

    const history = useHistory();
    const location =useLocation();
    const {from} =location.state || {from: {pathname: "/"}};

    const provider = new firebase
        .auth
        .GoogleAuthProvider();
    const provider2 = new firebase
        .auth
        .FacebookAuthProvider();
    const handleSignInWithGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(res => {
                const token = res.credential.accessToken;
                history.replace(from);
                const user = res.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err)
            })
        }

        const handleSignInFacebook = () => {
            firebase
                .auth()
                .signInWithPopup(provider2)
                .then(res => {
                    const token = res.credential.accessToken;
                    const user = res.user;
                    history.replace(from);
                    console.log(user);
                })
                .catch(err => {
                    console.log(err)
                })
            }

            const handleAcoountCreate = () => {
                const newUserInfo = {
                    ...user
                }
                newUserInfo.newUser = true;
                newUserInfo.LoggedInUser = false;
                setUser(newUserInfo)
            }
            const handleLogIn = () => {
                const newUserInfo = {
                    ...user
                }
                newUserInfo.newUser = false;
                newUserInfo.LoggedInUser = true;
                setUser(newUserInfo)
            }

    const [user, setUser] = useContext(userContext);

    const handleChange = (event) => {
        let isFormValid = true;
        if (event.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "ConfirmPassword") {
            isFormValid = event.target.value.length > 6;
        }
        if (isFormValid) {
            const newUserInfo = {
                ...user
            };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };
    const handleSubmit = (event) => {
        console.log(user.email, user.ConfirmPassword)
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.ConfirmPassword)
            .then(res => {
                const newUserInfo = {
                    ...user
                };
                newUserInfo.error = "";
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserInfo(user.name)
            })
            .catch(error => {
                const newUserInfo = {
                    ...user
                };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)

            });
        event.preventDefault();
    };

    const handleLoggedIn = (event) => {
        console.log(user.email, user.ConfirmPassword)
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.ConfirmPassword)
            .then(res => {

                const newUserInfo = {
                    ...user
                };
                newUserInfo.error = "";
                newUserInfo.success = true;
                setUser(newUserInfo);
                history.replace(from);
                console.log(res.user);
            })
            .catch(function (error) {
                const newUserInfo = {
                    ...user
                };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)
            })
            event.preventDefault();
    }
    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        }).then(function() {
        console.log("User name Updated")
        }).catch(function(error) {
         console.log(error)
        });
    }
    return (
        
        <div className="container">

        <container> 
            
        <Navbar collapseOnSelect="collapseOnSelector" expand="sm" variant="dark">
        <Link to="/home"> <Navbar.Brand href="#home" ><img className="logo" src={Logo} fluid="fluid" alt=""/></Navbar.Brand></Link>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
       
           </Nav>
           <Nav className="font">
                 <Nav.Link className="navText" href="#news">News</Nav.Link>
                 <Nav.Link className="navText" href="#destination">Destination</Nav.Link>
                 <Nav.Link className="navText" href="#blog">Blog</Nav.Link>
                 <Nav.Link className="navText" href="#contract">Contract</Nav.Link>
                <Link to="/login"> <Button className="login" variant="warning">Login</Button></Link>
          </Nav>
           </Navbar.Collapse>
        </Navbar>

         <div className="LoginComponent">
         {
            user.LoggedInUser && <div>

                    <Container>
                        <Form className="formSize">
                            <h2>Login</h2>
                            <br/><br/>
                            
                            <Form.Group controlId="formGroupEmail">

                                <Form.Control onBlur={handleChange} name="email" required="required" type="email"
                                    placeholder="User email"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control onBlur={handleChange} name="ConfirmPassword" required="required"  type="password"   placeholder="Password"/>
                                <br/>
                                <Form.Check type="checkbox" label="Remember Me"/>
                                <a className="Forgot" href="#">Forget Password</a>
                                <br/><br/>
                                
                                <Form.Control onClick={handleLoggedIn} type="submit" style={{ backgroundColor:'orange'}} value="Login"/>

                                <div className="account-part">
                                    <span>Don't have an account?</span>
                                      <a onClick={handleAcoountCreate} style={{color:'orange'}} href="#">Creat an account</a>
                                </div>
                                 <p
                                    style={{
                                        color: "red",
                                        textAlign: "center"
                                    }}>{user.error}</p>

                                {
                                    user.success && <p
                                            style={{
                                                color: "green",
                                                textAlign: "center"
                                            }}>Logged In Successfilly</p>
                                }
                            </Form.Group>
                        </Form>
                    </Container>

                </div>
        } 
         {
            user.newUser && <div>
                    <Container>

                        <Form className="formSize">
                            <h2>Creat an account</h2>
                            <br/> <br/>
                           
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control required="required" name="name" type="text" placeholder="First Name"/>
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Control required="required" type="text" placeholder="Last Name"/>
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Control required="required" name="email" type="email"  onBlur={handleChange} placeholder="UserName or email"/>
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Control required="required" name="Password" type="password" onBlur={handleChange}     placeholder="Password"/>
                             </Form.Group>

                            <Form.Group controlId="formGroupPassword">
                                <Form.Control required="required" name="ConfirmPassword" type="password" onBlur={handleChange}
                                    placeholder="Confirm Password"/>
                                <br/>


                                <Form.Control  onClick={handleSubmit} type="submit" style={{ backgroundColor:'orange'}}value="Creat an account"/>


                                <div className="account-part">
                                    <span>Already have an account?</span>
                                    <a onClick={handleLogIn} style={{ color:'orange'}}   href="#">Login</a>
                                </div>
                                  <p
                                    style={{
                                        color: "red",
                                        textAlign:"center"
                                    }}>{user.error}</p>
                                {
                                    user.success && <p
                                            style={{
                                                color: "green",
                                                textAlign: "center"
                                            }}>User Created Successfilly</p>
                                }
                            </Form.Group>
                        </Form>

                    </Container>

                </div>
        } 
         </div>

         <div className="buttonPart container">

         <Button onClick={handleSignInFacebook} className="GoogleAuth" size="lg" block="block">
         <img className="icon" src={fb} alt=""/>  Continue with Facebook </Button>

         <Button onClick={handleSignInWithGoogle} className="GoogleAuth" size="lg" block="block">
         <img className="icon" src={google} alt=""/>Continue with Google</Button>
         
         </div>
          
          </container>  
        </div>
    );
};

export default OtherAuth;

