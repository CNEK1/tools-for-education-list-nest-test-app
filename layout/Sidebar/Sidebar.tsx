import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
function Sidebar({ ...props }: SidebarProps): JSX.Element {
    return <div {...props}>SideBar</div>;
}

export default Sidebar;
