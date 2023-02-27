import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

function Header({ ...props }: HeaderProps): JSX.Element {
    return <div {...props}>Header</div>;
}

export default Header;
