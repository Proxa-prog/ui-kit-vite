import { useState } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import {
    Button,
    ButtonIcon,
    ButtonLabel,
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
                        type='tertiary'
                        id='buttonID'
                    />
                }/>
                <Route path='/buttonLabel' element={
                    <ButtonLabel
                        type='labelTrash'
                        id='buttonID'
                    />
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
