for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
//3 3 3




const obj = {
    value: 42,
    getValue: function () {
        return this.value;//42
    },
    getArrow: () => this.value, //undefined
    getDelayed: function () {
        return new Promise((resolve) => resolve(this.value));
    },
};

console.log(obj.getValue());            // 42
console.log(obj.getArrow());            // undefined
obj.getDelayed().then(console.log);     // 42

const { getValue } = obj;
console.log(getValue());                // 42

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                return prev + 1
            });//prev
        }, 1000);
        if (count == 4) return () => clearInterval(id);
    }, []);

    return <div>{count}</div>;//1
}

const Child = React.memo(({ onClick, data }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>{data.label}</button>;
});

function Parent() {
    const [count, setCount] = useState(0);

    const data = useMemo(() => ({ label: "Click me" }), []);//once
    const handleClick = () => setCount(c => c + 1);

    return (
        <>
            <Child onClick={handleClick} data={data} />
            <span>{count}</span>
        </>
    );
}