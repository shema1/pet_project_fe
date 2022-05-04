
import { toast } from 'react-toastify';
import React from 'react';


const handleError = (error: string) => {
  toast.error(error, {
    position: toast.POSITION.TOP_RIGHT
  });
}

export default handleError