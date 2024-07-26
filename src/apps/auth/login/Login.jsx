
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/FireBase';
import { Components } from '../../../components';
import cls from "../../../assets/styles/login/Login.module.scss";
import Logo from "../../../assets/images/logo/insta.png";
import { useAuth } from '../../../contexts/auth/AuthContext';


function Login() {
    const { register,
        handleSubmit, 
        formState: { errors } 
        } = useForm(
            {
                mode:"onBlur"
            }
        );
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const onSubmit = async (data) => {
    try {
        signInWithEmailAndPassword(auth, data.email, data.password);
        console.log('User logged in:');
        navigate('/layout/home'); 
        } catch (error) {
        console.error('Error logging in user:', error);
        }
    };

  if(currentUser) {
    return <Navigate to={"/layout/home"}/>
  }

  return (
    <Components.Container>
      <section className={cls.login_page}>
        <div className={cls.login_page_card}>
            <Components.Photo src={Logo}/>
            <h3>
                Войдите в аккаунт чтобы смотреть фото и видео ваших друзей.
            </h3>


            <form onSubmit={handleSubmit(onSubmit)}>
                <Components.Forms.Divider>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
                </Components.Forms.Divider>
                <Components.Forms.Divider>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
                </Components.Forms.Divider>
                <Components.Forms.Divider>
                    <Components.Forms.AuthSubmit 
                        location={"Login"}
                    />
                </Components.Forms.Divider>
            </form>
        </div>
        <div className={cls.login_page_bottomCard}>
            <p>
                Don't have an account? 
                <button className={cls.login_page_bottomCard_Link} onClick={() => navigate('/accounts/registration')}>
                    Register
                </button>
            </p>
        </div>
      </section>
    </Components.Container>
  );
}

export default Login;
