const StatelessFunctionalComponent = function() {
    const name = 'John Doe';
    const age = 25;
    return (
        <div>
            <h1>Example of Stateless Functional Component</h1>
            <p className="para">Here we created a new component. The component created is a stateless functional component.</p>
            <ul style={{alignContent:'flex-start'}}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
        </div>
    );
};
export default StatelessFunctionalComponent;
