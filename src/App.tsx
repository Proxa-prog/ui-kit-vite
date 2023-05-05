import { useState } from "react";
import { Button } from "./index";
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    const [text, setText] = useState('BUTTON');

    const handleButtonCLick = () => {
        setText(text + '1')
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/button' element={
                    <Button
                        endIcon
                        startIcon
                        id='buttonID'
                        onClick={handleButtonCLick}
                    >
                        {text}
                    </Button>}
                />
                <Route path='/buttonRed' element={
                    <Button
                        type='Tertiary'
                        endIcon
                        startIcon
                        id='buttonID'
                        onClick={handleButtonCLick}
                    >
                        {text}
                    </Button>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
