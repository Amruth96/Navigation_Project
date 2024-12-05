import { useNavigate } from "react-router-dom";

function NavigateHome(){
    const navigate = useNavigate();

    const handleNavigation =()=>{
        navigate('/about');
    }
    return(
        <div>
            <h1>Welcome to navigate home component</h1>

            <button onClick={handleNavigation}>Contact me</button>
        </div>
    )
}
export default NavigateHome