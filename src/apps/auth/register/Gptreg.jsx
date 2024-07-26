

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../../../config/FireBase';
import { Components } from '../../../components';
import cls from '../../../assets/styles/reigster/Register.module.scss'
import Logo from "../../../assets/images/logo/insta.png"
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/auth/AuthContext';

export default function Gptreg() {
    const navigate = useNavigate();
    const {currentUser} = useAuth
    const {register,
         handleSubmit,
          formState: {errors}
        } = useForm(
            {
                mode: "onBlur"
            }
        );

    const onSubmit = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log('Регистрация успешна');
            navigate('/layout/home')
        } catch (error) {
            console.log('Ошибка регистрации' + error.message);
        }
    }

    if(currentUser) {
        return <Navigate to={"/layout/home"}/>
    }


    return (
        <Components.Container>
            <section className={cls.register_page}>
                <div className={cls.register_page_card}>
                    <Components.Photo src={Logo}/>

                    <h3>
                        Зарегестрируйтесь чтобы смотреть фото и видео ваших друзей.
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Components.Forms.Divider>
                            <input 
                                placeholder='Email'
                                type="email" 
                                {...register('email', {required: 'Email обязателен'})}
                            />
                            <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <input 
                                placeholder='Password'
                                type="password" 
                                {...register('password', {
                                    required: 'Password обязателен', 
                                    minLength: {value: 6, message: 'Пароль должен содержать не менее 6 символов'}
                                })}
                            />
                            <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
                        </Components.Forms.Divider>

                        <Components.Forms.Divider>
                            <Components.Forms.AuthSubmit 
                                location={"Registration"}
                            />
                        </Components.Forms.Divider>
                    </form>
                </div>

                <div className={cls.register_page_bottomCard}>
                    <p>
                        You have an account!!!!!
                        <button className={cls.register_page_bottomCard_Link} onClick={() => navigate('/accounts/authentification')}>
                            Login
                        </button>
                    </p>
                </div>
            </section>
        </Components.Container>
  )
}
