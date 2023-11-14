export default function DoubleDice() {

    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = {color: "purple", fontSize: "40px"};
        return (
            <div className="DoubleDice" style={}>
                <h1>Double Dice</h1>
                {num1 === num2 && <h3>You Win!</h3>}
                <p>Num1: {num1}</p>
                <p>Num2: {num2}</p>
            </div>
        );
}
