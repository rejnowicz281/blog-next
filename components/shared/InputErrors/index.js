function InputErrors({ errors, className }) {
    return errors.map((message, index) => (
        <li key={index} className={className}>
            {message}
        </li>
    ));
}

export default InputErrors;
