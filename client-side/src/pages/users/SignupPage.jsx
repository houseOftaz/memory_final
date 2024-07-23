
import { useState } from "react";
import LinkButton from "../../components/buttons/LinkButton";


const SignupPage = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [showSubmitFormPopup, setShowSubmitFormPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    
    return (

        
        <div className="signup-container">

            <h2>Inscription</h2>
            
            <form>

                <div className="signup-form-group">

                    <label htmlFor="firstname">Prénom :</label>

                    <input type="text"
                           value={formData.firstname}
                           name="firstname"
                           id="firstname"
                           autoComplete="firstname"
                           onChange={handleChange} />
                </div>

                <div className="signup-form-group">

                    <label htmlFor="lastname">Nom :</label>

                    <input type="text"
                           value={formData.lastname}
                           name="lastname"
                           id="lastname"
                           autoComplete="lastname"
                           onChange={handleChange} />
                </div>

                <div className="signup-form-group">

                    <label htmlFor="email">Email :</label>

                    <input type="email"
                           value={formData.email}
                           name="email"
                           id="email"
                           placeholder="email@example.com"
                           autoComplete="email@example.com"
                           onChange={handleChange} />
                </div>

                <div className="signup-form-group">

                    <label htmlFor="password">Mot de passe :</label>

                    <input type="password"
                           value={formData.password}
                           name="password"
                           id="password"
                           autoComplete="new-password"
                           onChange={handleChange} />
                </div>

                <LinkButton linkTo={'/home-menu'}
                            label={'Retour'}/>
                
            </form>
        </div>
    )
}

export default SignupPage;

// {formData.password < 7 && <p>Le mot de passe doit faire minimum 7 caractères</p>}
