function handleSubmit(evt) {
    evt.preventDefault()
    console.log("Submitted the form");
}

export default function Form() {
    return (
        <div onSubmit={handleSubmit}>
            <button>Submit</button>
        </div>
    )
}