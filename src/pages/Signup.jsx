import { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase';
import { storage } from '../firebase';
import { db } from '../firebase';

import { toast } from 'react-toastify';

import '../styles/login.css';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          //Update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });
          //Store user date in firestore database
          await setDoc(doc(db, 'user', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          })

        });
      }
      );

      setLoading(false);
      toast.success('Account created');
      navigate('/login');

    } catch (error) {
      setLoading(false);
      toast.error('something went wrong')
    }

  };

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className='text-center'><h5
                className='fw-bold'>Loading.....</h5></Col> : <Col lg='6' className='m-auto text-center'>
                <h3 className="fw-bold mb-4">Sign Up</h3>

                <Form className='auth_form' onSubmit={signup}>
                  <FormGroup className='form_group'>
                    <input type="text"
                      placeholder='Username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="email"
                      placeholder='john_doe@mail.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input
                      type="password"
                      placeholder='********'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className='form_group'>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])} />
                  </FormGroup>

                  <button type='submit' className="buy_btn auth_btn">
                    Create an Account
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link to='/login'>Login</Link>
                  </p>
                </Form>
              </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


export default Signup;