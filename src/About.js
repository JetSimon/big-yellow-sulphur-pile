import { useNavigate} from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    const navigateHome = () => {
      // navigate to /
      navigate('/');
    };

    return (
    
      <div className="Page">
        <h1>Big. Sulphur. Pile.</h1>
        <p style={{'fontSize':'xxl', 'width':'50%'}}>One of the most iconic landmarks of the North Shore waterfront is the lurid-yellow piles of sulphur. This 1979 photograph shows a high-angle view of the Vancouver Wharves, with several piles of sulphur visible in the open or under partially-covered areas. The sulphur is a by-product of natural gas processing.</p>
        <button onClick={navigateHome}>Return home</button>
      </div>

    );

}