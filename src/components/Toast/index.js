import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './ToastWrapper.scss';

const settings = {
  position: 'bottom-right',
  autoClose: 3000,
  pauseOnHover: false,
  draggable: false,
  limit: 3,
  transition: Zoom,
};

export default function Toast() {
  return <ToastContainer {...settings} />;
}
