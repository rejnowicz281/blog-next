export type InputErrorsProps = {
    errors: string[];
    className: string;
};

export default function InputErrors({ errors, className }: InputErrorsProps) {
    return errors.map((message, index) => (
        <li key={index} className={className}>
            {message}
        </li>
    ));
}
