import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';


function Sidebar({ ...props }: SidebarProps): JSX.Element {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
}

export default Sidebar;
