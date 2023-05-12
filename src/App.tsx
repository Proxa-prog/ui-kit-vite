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
    Counter,
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
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'row',
                    }}>
                        <Button
                            type='primary'
                            id='primary'
                            onClick={handleButtonCLick}
                        >
                            {text}
                        </Button>
                        <Button
                            type='secondary'
                            id='secondary'
                            onClick={handleButtonCLick}
                        >
                            {text}
                        </Button>
                        <Button
                            type='tertiary'
                            id='tertiary'
                            onClick={handleButtonCLick}
                        >
                            {text}
                        </Button>
                    </div>
                }
                />
                <Route path='/buttonIcon' element={
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'row',
                    }}>
                        <ButtonIcon
                            type='primary'
                            size='Large'
                            id='primary'
                        />
                        <ButtonIcon
                            type='secondary'
                            size='Large'
                            id='secondary'
                        />
                        <ButtonIcon
                            type='tertiary'
                            size='Large'
                            id='tertiary'
                        />
                        <ButtonIcon
                            type='error'
                            size='Large'
                            id='error'
                        />
                        <ButtonIcon
                            type='moreColorOn'
                            size='Large'
                            id='moreColorOn'
                        />
                        <ButtonIcon
                            type='moreColorOff'
                            size='Large'
                            id='moreColorOff'
                        />
                        <ButtonIcon
                            type='settings'
                            size='Large'
                            id='settings'
                        />
                        <ButtonIcon
                            type='tertiaryERZL'
                            size='Large'
                            id='tertiaryERZL'
                        />
                    </div>
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
                        value={0}
                        counterId='counterId'
                    />
                }/>
                <Route path='/buttonForm' element={
                    <ButtonForm
                        id='buttonForm'
                    />
                }/>
                <Route path='/counter' element={
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Counter
                            id='counter'
                            value={435}
                        />
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
