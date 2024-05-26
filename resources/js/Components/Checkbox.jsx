export default function Checkbox({
    value,
    className = "",
    checked = false,
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            value={value}
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
            defaultValue={checked}
        />
    );
}
