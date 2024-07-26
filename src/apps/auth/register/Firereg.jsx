

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../../config/FireBase';
import { Components } from '../../../components';
import cls from "../../../assets/styles/reigster/Register.module.scss"
import Logo from "../../../assets/images/logo/insta.png"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { formsValidate } from '../../../helpers/forms';

export default function Firereg() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repead_password, setRepead_password] = useState("");
    const [error, setError] = useState("")

    function firebasereg(e) {
        e.preventDefault()
        if(repead_password !== password) {
            setError("passwords didn't match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("")
                setEmail("");
                setRepead_password("");
                setPassword("");
                setName("");
            })
            .catch((error) => console.log(error))
    }

    const {
        formState: {errors},
        register
    } = useForm(
        {
            mode: "onBlur"  
        }
    )

    return (
        <Components.Container>
            <section className={cls.register_page}>
                <div className={cls.register_page_card}>

                    <Components.Photo src={Logo}/>

                    <h3>
                        Зарегестрируйтесь, чтобы смотреть фото и видео ваших друзей.
                    </h3>

                    <form onSubmit={firebasereg}>
                        <Components.Forms.Divider>
                            <input 
                                value={name} 
                                onChange={(e)=>setName(e.target.value)}
                                type="text" 
                                placeholder='Name'
                                err={errors}
                                {...register("name", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.name ? "err" : "success"} />
                        </Components.Forms.Divider>

                        <Components.Forms.Divider>
                            <input 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" 
                                placeholder='email'/>
                                {/* <Components.Forms.Errors err={errors?.email ? "err" : "success"} /> */}
                        </Components.Forms.Divider>

                        <Components.Forms.Divider>
                            <input 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)}
                                type="password" 
                                placeholder='password'/>
                                {/* <Components.Forms.Errors err={errors?.password ? "err" : "success"} /> */}
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <input 
                                value={repead_password} 
                                onChange={(e)=>setRepead_password(e.target.value)}
                                type="password" 
                                placeholder='repead password'/>
                                {/* <Components.Forms.Errors err={errors?.repead_password ? "err" : "success"} /> */}
                        </Components.Forms.Divider>
                        <p className={cls.useable_service}>
                            Люди, которые пользуются нашим сервисом, могли загрузить вашу информацию в Instagram. 
                            <a href='https://www.facebook.com/help/instagram/261704639352628'>Подробнее</a>
                        </p>

                            
                        <Components.Forms.Divider>
                            <Components.Forms.AuthSubmit
                                location={"Registration"} 
                            />
                        </Components.Forms.Divider>
                    </form>
                </div>
                <div className={cls.register_page_bottomCard}>
                    <p>
                        You have an account?
                        <Link>
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </Components.Container>
    )
}



