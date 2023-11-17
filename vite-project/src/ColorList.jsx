export default function ColorList({colors}){
    const lis = colors.map ((color => <li>{color}</li>));
    // const elements = [<p>Hello!</p>, <h1>Bye!</h1>, <input type="password"/>];
    return (
        <div>
            <p>Color List</p>
            <p>{Elements}</p>
            <p>{colors}</p>
            <p>{lis}</p>
        </div>
    )
}