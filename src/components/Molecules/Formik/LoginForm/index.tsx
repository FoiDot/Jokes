import './_index.scss';
import { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Muicon from '@mui/icons-material';

// Custom components
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import IconButton from 'components/Atoms/IconButton';
import LoginProvider from 'provider/private/login';
import { SessionContext } from 'context/sessionContext';
import { account } from 'dump/user';

type User = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { setToken } = useContext(SessionContext);
  const [forgotIcon, setForgotIcon] = useState<keyof typeof Muicon>('ArrowDropDownOutlined');
  const isVisible = forgotIcon === 'ArrowDropUpOutlined';

  const handleLogin = (values: User) => {
    LoginProvider.postUser(values)
      .then((response: any) => setToken(response))
      .catch((error: any) => console.error(error));
  };

  const handleForgotIcon = () => setForgotIcon(isVisible ? 'ArrowDropDownOutlined' : 'ArrowDropUpOutlined');

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: '',
        password: '',
      }}
      //validationSchema={SearcherSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
    >
      <Form className='LoginForm-root'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Input name='email' />
          <Input name='password' type='password' />
          <div className='LoginForm-forgot-container'>
            <span className='LoginForm-forgot'>Forgot password?</span>{' '}
            <IconButton iconName={forgotIcon} onClick={handleForgotIcon} />
          </div>
          {isVisible && (
            <div className='LoginForm-hint-container'>
              <span className='LoginForm-hint-title'>Email:</span>
              <span className='LoginForm-hint'>{account.email}</span>
              <span className='LoginForm-hint-title'>Password:</span>
              <span className='LoginForm-hint'>{account.password}</span>
            </div>
          )}
        </div>
        <Button label='Login' type='submit' />
      </Form>
    </Formik>
  );
};

export default LoginForm;
