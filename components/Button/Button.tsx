import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from './Button.props';

function Button({ appereance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appereance === 'primary',
                [styles.ghost]: appereance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down'
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
}

export default Button;
