import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button } from '@material-ui/core';

const MySwal = withReactContent(Swal);

const ErrorAlert = () => {
  const sweetAlerts = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
    });
  };
  return (
    <Button variant="outlined" color="primary" onClick={sweetAlerts}>
      Click me
    </Button>
  );
};

export default ErrorAlert;
