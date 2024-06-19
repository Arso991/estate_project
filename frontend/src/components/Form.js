import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ method }) => {
    const title = method === "Login" ? "Connexion" : "Inscription"
    const button_method = method === "Login" ? "Se connecter" : "S'inscrire"
    return (
        <div className='w-full flex justify-center items-center'>
            <form className='w-[30rem] p-6 bg-white shadow-1 rounded-[15px] flex flex-col gap-4 mb-12' action="">
                <h1 className='text-center text-[2rem] font-bold'>{title}</h1>
                {
                    method === "Login" ?
                        "" :
                        <div>
                            <label className='text-[1.2rem]' htmlFor="">Nom :</label>
                            <input className='border outline-none border-violet-700 rounded-lg px-2 py-1 w-full placeholder:text-[14px]' type="text" placeholder='Entrez votre nom' />
                        </div>
                }
                {
                    method === 'Login' ?
                        "" :
                        <div>
                            <label className='text-[1.2rem]' htmlFor="">Prénom :</label>
                            <input className='border outline-none border-violet-700 rounded-lg px-2 py-1 w-full placeholder:text-[14px]' type="text" placeholder='Entrez votre prénom' />
                        </div>
                }
                <div>
                    <label className='text-[1.2rem]' htmlFor="">E-mail :</label>
                    <input className='border outline-none border-violet-700 rounded-lg px-2 py-1 w-full placeholder:text-[14px]' type="text" placeholder='Entrez votre addresse mail' />
                </div>
                <div>
                    <label className='text-[1.2rem]' htmlFor="">Mot de passe :</label>
                    <input className='border outline-none border-violet-700 rounded-lg px-2 py-1 w-full placeholder:text-[14px]' type="password" placeholder='Entrez votre mot de passe' />
                </div>
                {
                    method === "Login" ?
                        "" :
                        <div>
                            <label className='text-[1.2rem]' htmlFor="">Mot de passe :</label>
                            <input className='border outline-none border-violet-700 rounded-lg px-2 py-1 w-full placeholder:text-[14px]' type="password" placeholder='Confirmez votre mot de passe' />
                        </div>
                }
                <div className='flex justify-center'>
                    <button className='py-2 px-4 bg-violet-700 hover:bg-violet-800 rounded-lg text-white'>{button_method}</button>
                </div>
                {
                    method === "Login" ?
                        <small className='text-center'>Vous n'avez pas de compte ? Inscrivez-vous <Link to="/register" className='text-violet-700'>ici</Link> </small> :
                        <small className='text-center'>Si vous avez déjà un compte, se connecter <Link to="/login" className='text-violet-700'>ici</Link> </small>
                }
            </form>
        </div>
    );
};

export default Form;