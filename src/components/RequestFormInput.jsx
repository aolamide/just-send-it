const RequestFormInput = ({label, placeholder, name, inputType = "text", value, setValue}) => {
    return (
        <div className="flex flex-col my-3">
            <label className="font-semibold text-sm" htmlFor={name}>{label}</label>
            <input value={value} onChange={e => setValue(e.target.value)} required className="border border-[#F2F2F2] rounded-lg p-4" placeholder={placeholder} type={inputType} name={name}/>
        </div>
    )
}

export default RequestFormInput;
