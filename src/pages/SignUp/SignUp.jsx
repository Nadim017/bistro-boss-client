import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const savedUser = { name: data.name, email: data.email };
            console.log('User Profile updated successfully');
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/');
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(watch('example'));

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600">Password must be 6 character</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-600">
                    Password must be less then 20 character
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">
                    Password must have to be one uppercase one lowercase one
                    number and one special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-xl px-5 py-3">
              <small>Already have an account?</small>
              <Link to="/login " className="underline text-yellow-200">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
