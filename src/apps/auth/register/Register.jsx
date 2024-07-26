

import { Components } from '../../../components';
import { useForm } from "react-hook-form";
import cls from "../../../assets/styles/reigster/Register.module.scss";
import Logo from "../../../assets/images/logo/insta.png";
import { Link } from "react-router-dom";
import { formsValidate } from '../../../helpers/forms';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/FireBase';


export default function Register() {
    const [email, setEmail] = useState("");


    const [first_name, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [repead_password, setRepead_password] = useState("");
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [last_name, setLastName] = useState("");
    const [bio, setBio] = useState("");


    function firebaseregestration(e) {
        e.preventDefault()
        if(repead_password !== password) {
            Error("passwords didn't match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("")
                setEmail("");
                setRepead_password("");
                setPassword("");
                setFirstName("");
                setLastName("");
                setBio("");
                setUsername("")
            })
            .catch((error) => console.log(error))
    }


    
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setErrors
    } = useForm(
        {
            mode: "onBlur"
        }
    );


    return (
        <Components.Container>
            <section className={cls.register_page}>
                <div className={cls.register_page_card}>
                    <Components.Photo src={Logo}/>

                    <h3>
                        Зарегестрируйтесь, чтобы смотреть фото и видео ваших друзей.
                    </h3>

                    <form onSubmit={handleSubmit(onsubmit)}>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                value="username"
                                type="text"
                                placeholder="Username"
                                err={errors}
                                {...register("username", formsValidate())}  
                            />
                            <Components.Forms.Errors err={errors?.username ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="text"
                                placeholder="First Name"
                                err={errors}
                                {...register("first_name", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.first_name ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="text"
                                placeholder="Last Name"
                                err={errors}
                                {...register("last_name", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.last_name ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="text"
                                placeholder="Bio"
                                err={errors}
                                {...register("bio", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.bio ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="email"
                                placeholder="Email"
                                err={errors}
                                {...register("email", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.email ? "err" : "success"} />
                        </Components.Forms.Divider>

                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="password"
                                placeholder="Password"
                                err={errors}
                                {...register("password", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.password ? "err" : "success"} />
                        </Components.Forms.Divider>

                        <Components.Forms.Divider>
                            <Components.Forms.TextInput 
                                type="password" 
                                placeholder="Repead Password"
                                err={errors}
                                {...register("repead_password", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.repead_password ? "err" : "success"} />
                        </Components.Forms.Divider>

                        <p className={cls.useable_service}>
                            Люди, которые пользуются нашим сервисом, могли загрузить вашу информацию в Instagram. 
                            <a href='https://www.facebook.com/help/instagram/261704639352628'>Подробнее</a>
                        </p>

                        <Components.Forms.Divider>
                            <Components.Forms.AuthSubmit 
                                location={"Registration"} 
                                onClick={firebaseregestration}
                            /> 
                        </Components.Forms.Divider> 
                    </form>

                    
                </div>

                <div className={cls.register_page_bottomCard}>
                    <p>
                        You have an account?
                        <Link onClick={""}>
                            Login
                        </Link>
                    </p>
                </div>

                
            </section>
        </Components.Container>
    )
}
