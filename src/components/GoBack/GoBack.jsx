import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import classes from './GoBack.module.css';

const GoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/movies');
    }
  };

  // Додано умову для рендерингу кнопки "Go Back" тільки у випадку, якщо є де повертатись
  if (!location.state || !location.state.from) {
    return null;
  }


  return (
    <button className={classes.goBack} onClick={handleGoBack}>
      <GoArrowLeft />
      Go Back
    </button>
  );
};

export default GoBack;