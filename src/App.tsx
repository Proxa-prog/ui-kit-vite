import { useState } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import {
    Button,
    ButtonIcon,
} from "./index";

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
                        type='tertiary'
                        endIcon
                        startIcon
                        id='buttonID'
                        onClick={handleButtonCLick}
                    >
                        {text}
                    </Button>}
                />
                <Route path='/buttonIcon' element={
                    <ButtonIcon
                        size='Large'
                        type='tertiaryERZL'
                        id='buttonID'
                        onClick={handleButtonCLick}
                    />
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
