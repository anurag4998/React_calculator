import React, { useState } from 'react';
import Button from './buttons';
import OutputScreen from './outputscreen';

const Calci = () => {

    const [equation, setEquation] = useState('');
    const [value, setValue] = useState('');
    const [flag, setFlag] = useState(0);

    const handleClick = (event) => {
        const inputvalue = event.target.value.trim();

        if (inputvalue === '=') {
            try {
                var a = eval(equation)


            }
            catch
            {
                alert('error')

            }
            if (a === undefined)
                equation('error')

            else
                setValue(a)



        }
        else if (inputvalue === '+/-') {
            if (equation) {
                if (!flag) {
                    setEquation(-1 * equation)
                    setFlag(1)
                }
                else {
                    setFlag(0)
                    setEquation(equation * -1)

                }

            }


        }
        else if (inputvalue === 'AC') {
            setValue('');
            setEquation('');
        }
        else if (inputvalue === 'C') {
            let expression = equation;
            setEquation(expression.slice(0, -1))
        }

        else {
            setEquation(equation + inputvalue)
        }
    }
    return (
        <div className='wrapperdiv'>
            <OutputScreen equation={equation} value={value} />
            <div>
                <div className='row' >
                    <Button handleClick={handleClick} val={'AC'} />
                    <Button handleClick={handleClick} val={'+/-'} />
                    <Button handleClick={handleClick} val={'%'} />
                    <div className='right' >
                        <Button handleClick={handleClick} val={'/'} />

                    </div>

                </div>
                <div className='row' >
                    <Button handleClick={handleClick} val={'7'} />
                    <Button handleClick={handleClick} val={'8'} />
                    <Button handleClick={handleClick} val={'9'} />
                    <div className='right'>
                        <Button handleClick={handleClick} val={'*'} />

                    </div>

                </div>
                <div className='row' >
                    <Button handleClick={handleClick} val={'4'} />
                    <Button handleClick={handleClick} val={'5'} />
                    <Button handleClick={handleClick} val={'6'} />
                    <div className='right'>
                        <Button handleClick={handleClick} val={'-'} />

                    </div>

                </div>
                <div className='row' >
                    <Button handleClick={handleClick} val={'1'} />
                    <Button handleClick={handleClick} val={'2'} />
                    <Button handleClick={handleClick} val={'3'} />
                    <div className='right '>
                        <Button handleClick={handleClick} val={'+'} />

                    </div>

                </div>
                <div className='row' >

                    <Button handleClick={handleClick} val={'.'} />
                    <Button handleClick={handleClick} val={'0'} />
                    <Button handleClick={handleClick} val={'C'} />

                    <div className='right right-bottom'>
                        <Button handleClick={handleClick} val={'='} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calci;