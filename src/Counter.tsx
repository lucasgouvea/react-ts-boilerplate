import * as React from 'react';

export interface CounterProps {
    name: string
}

const Counter: React.SFC<CounterProps> = (props: CounterProps) => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>{`${props.name}, count: ${count}`}</h1>
            <button onClick={() => setCount(count + 1)} >Button</button>
        </div>
    );
}

export default Counter;