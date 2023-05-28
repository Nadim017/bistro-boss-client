import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodCard = ({ item }) => {
  const { category, image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);

    if (user) {
      fetch('http://localhost:5000/carts')
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: 'Please login to order the food',

              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login Now!',
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login');
              }
            });
          }
        });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 mt-5 bg-slate-100 border-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
