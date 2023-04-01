import { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

const FormObserver = () => {
  const { values, submitForm } = useFormikContext();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (disable) submitForm();
    else setDisable(true);
  }, [values]);

  return null;
};

export default FormObserver;
