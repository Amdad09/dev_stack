import { useState, type ChangeEvent } from 'react';
import Button from '../components/ui/Button';

type User = {
    name: string;
    email: string;
    password: string;
};

const Login = () => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    console.log(user);
    
    return (
        <form
            id="Login"
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
            <legend className="fieldset-legend">Login</legend>


            <label className="label" htmlFor="email">
                Email
            </label>
            <input
                value={user.email}
                onChange={handleChange}
                type="email"
                name="email"
                className="input"
                placeholder="e.g abc@gmail.com"
            />

            <label className="label" htmlFor="password">
                Password
            </label>
            <input
                value={user.password}
                onChange={handleChange}
                type="password"
                className="input"
                name="password"
                placeholder="Password"
            />

            <Button variant="primary">Login</Button>
        </form>
    );
};

export default Login;
