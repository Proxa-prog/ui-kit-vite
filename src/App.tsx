import { useState } from "react";
import { Button } from "./index";

function App() {
    const [text, setText] = useState('кнопка');

    const handleButtonCLick = () => {
        setText(text + '1')
    }

    return (
        <>
            <div>
                <Button
                    id='buttonID'
                    onClick={handleButtonCLick}
                >
                    {text}
                </Button>
            </div>
        </>
    )
}

export default App
