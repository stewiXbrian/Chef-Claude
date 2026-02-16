import './index.css'
import chef from '/src/images/chef-claude-icon.png';

export default function Header() {
    return (
        <div className="header">
           <img src={chef} alt="Sorry" />
           <h1>Chef Claude!</h1>
        </div>
    )
}