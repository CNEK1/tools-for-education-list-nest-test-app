import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}
