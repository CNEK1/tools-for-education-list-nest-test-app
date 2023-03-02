import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>Test Project Nest 2022 - {format(new Date(), 'yyyy')} </div>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
        </footer>
    );
}

export default Footer;
