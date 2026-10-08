// State
const [arr, setArr] = useState([]);

// Add to array
setArr(prev => [...prev, "vikas"]);

// Don't mutate
arr.push("vikas"); // ❌


// Parent → Child
<Child data={arr} />


// Child receives props
function Child({ data }) {}


// Child → Parent
<Child setData={setArr} />

function Child({ setData }) {
  setData(prev => [...prev, "vikas"]);
}


// useEffect - once
useEffect(() => {
  // API call
}, []);


// useEffect - dependency
useEffect(() => {
  // runs when count changes
}, [count]);


// API
useEffect(() => {
  async function getData() {
    const res = await fetch("API_URL");
    const data = await res.json();
    setData(data);
  }

  getData();
}, []);


// Form
function handleSubmit(e) {
  e.preventDefault();
}


// Input
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>