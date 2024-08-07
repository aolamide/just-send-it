const RequestFormSelect = ({label, name, value, options, setValue}) => {
    return (
        <div className="flex flex-col my-3">
            <label className="font-semibold text-sm" htmlFor={name}>{label}</label>
            <select value={value} onChange={e => setValue(e.target.value)} required className="border border-[#F2F2F2] rounded-lg p-4" name={name}>
                <option disabled value=""></option>
                {options.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default RequestFormSelect;
