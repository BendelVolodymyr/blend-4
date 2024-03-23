import { useForm } from 'react-hook-form';
import { login } from '../../api/axiosApi';
import { useAuth } from '../../contexts/useAuth';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { setToken } = useAuth();

  const onSubmit = formData => {
    login(formData).then(data => {
      setToken(data.token);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="ведіть емайл"
        {...register('email', { required: true })}
      />

      <input
        placeholder="ведіть пароль"
        {...register('password', { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default Login;
