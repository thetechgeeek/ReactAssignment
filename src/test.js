import { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

function App() {
  return (
    <div className="p-5">
      <DisplayUsers />
      <ShowHideElem />
      <TwoWayBinding />
      <FetchData />
      <DisableButton />
      <Parent />
      <AddNum />
    </div>
  );
}

function DisplayUsers() {
  let arr = ["A", "B", "C", "D"];
  return (
    <>
      <h1>Display Users from Array</h1>
      <ul>
        {arr.map((user, idx) => (
          <li key={`${idx}`}>{user}</li>
        ))}
      </ul>
    </>
  );
}
function ShowHideElem() {
  const [status, setStatus] = useState("visible");
  return (
    <>
      <h1>Show/Hide Data</h1>
      <div className="text-center">
        <Button variant="primary" onClick={() => setStatus(status === "visible" ? "hidden" : "visible")}>
          Toggle Show/Hide
        </Button>
        <h3 style={{ visibility: `${status}` }}>Sample Text</h3>
      </div>
    </>
  );
}
function TwoWayBinding() {
  const [txt, setTxt] = useState("");
  const handleChange = (e) => {
    setTxt(e.target.value);
  };

  return (
    <>
      <h1>2-way Data binding</h1>
      <Container className="text-center">
        <input value={txt} onChange={handleChange}></input>
        <p>{txt}</p>
      </Container>
    </>
  );
}
function FetchData() {
  const [data, setData] = useState([]);

  const handleFn = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  const handleDelete = () => {
    setData([]);
  };
  return (
    <>
      <h1>Fetch Data from API</h1>
      <Container className="mt-4 text-center">
        <div>
          <Button className="mx-2 mb-2" onClick={handleFn}>
            Load Data
          </Button>
          <Button className="mx-2 mb-2" variant="danger" onClick={handleDelete}>
            Clear Data
          </Button>
        </div>
        {data.map((item, idx) => (
          <Row key={`${idx}`}>
            <Col>{item.id}</Col>
            <Col>{item.name}</Col>
            <Col>{item.username}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
function DisableButton() {
  const [data, setData] = useState("");
  const [status, setStatus] = useState(true);
  const handleChange = (e) => {
    setData(e.target.value);
    if (e.target.value.length > 0) setStatus(false);
    else setStatus(true);
  };
  return (
    <>
      <h1>Disable Button if input empty</h1>
      <div className="text-center">
        <input value={data} onChange={handleChange}></input>
        <Button className="btn-sm mx-3" disabled={status}>
          Submit
        </Button>
      </div>
    </>
  );
}
function Parent() {
  const [data, setData] = useState("Parent state`s data");
  const handleParentChild = (txt) => {
    if (txt.length === 0) setData("This is parent`s data");
    else setData(txt);
  };
  return (
    <>
      <h1>Update Parent's data from Child</h1>
      <div className="text-center ">
        <h3>Parent</h3>
        <p>{data}</p>
        <Child handleParentChild={handleParentChild} />
      </div>
    </>
  );
}
function Child({ handleParentChild }) {
  const [txt, setTxt] = useState("");
  return (
    <>
      <h3>Child</h3>
      <input value={txt} onChange={(e) => setTxt(e.target.value)}></input>
      <Button className="btn-sm mx-2" onClick={() => handleParentChild(txt)}>
        Click to change Parent Data
      </Button>
    </>
  );
}
function AddNum() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <>
      <h1>Add 2 Numbers</h1>
      <div className="text-center">
        <input type="number" value={first} onChange={(e) => setFirst(parseInt(e.target.value))}></input>
        <input type="number" value={second} onChange={(e) => setSecond(parseInt(e.target.value))}></input>
        <Button className="btn-sm" onClick={() => setSum(first + second)}>
          Add
        </Button>
        <div>Sum is: {sum}</div>
      </div>
    </>
  );
}
export default App;
