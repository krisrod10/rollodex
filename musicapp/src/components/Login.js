export const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleClick = () => {
EventTarget.preventDefault();
setIsLoggedIn(!isLoggedIn);



    }
    return(
        <form>
            <label>
                email
                <input />
            </label>
            <label>
                password
                <input/>
            </label>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default Login;