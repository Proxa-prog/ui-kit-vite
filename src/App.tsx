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
    ButtonFilter,
    ButtonForm,
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
                        id='button'
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
                        id='buttonRed'
                        onClick={handleButtonCLick}
                    >
                        {text}
                    </Button>}
                />
                <Route path='/buttonIcon' element={
                    <ButtonIcon
                        size='Large'
                        type='tertiary'
                        id='buttonIcon'
                    />
                }/>
                <Route path='/buttonLabel' element={
                    <ButtonLabel
                        type='labelTrash'
                        id='buttonLabel'
                    />
                }/>
                <Route path='/buttonFilter' element={
                    <ButtonFilter
                        id='buttonFilter'
                        value={1}
                    />
                }/>
                <Route path='/buttonForm' element={
                    <ButtonForm
                        id='buttonForm'
                    />
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
