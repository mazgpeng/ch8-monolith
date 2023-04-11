import { useEffect, useState } from "react";
import {
  Card,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
} from "react-bootstrap";

const SearchPlayerForm = () => {
  const [data, setData] = useState();
  const [textFilter, setTextFilter] = useState("Filter");
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState("");

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(searchValue);
  };

  const filteredData = (value) => {
    if (
      textFilter === "Username" &&
      value.username.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return value;
    } else if (
      textFilter === "Email" &&
      value.email.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return value;
    } else if (
      textFilter === "Experience" &&
      value.experience.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return value;
    } else if (
      textFilter === "Level" &&
      value.level.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return value;
    } else if (
      textFilter === "Filter" &&
      value.username.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return value;
    }
  };

  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <>
      <Form className="d-flex align-items-center mt-2" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="my-2"
          aria-label="Search"
          onChange={handleChange}
          value={searchValue}
        />
        <DropdownButton id="dropdown-basic-button" title={textFilter}>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Username
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Email
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Experience
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Level
          </Dropdown.Item>
        </DropdownButton>
      </Form>

      {showSearch ? (
        data.filter(filteredData).map((item, key) => (
          <Card key={key} className="my-1">
            <Card.Body>
              <p>Username : {item.username}</p>
              <p>Email : {item.email}</p>
              <p>Experience : {item.experience}</p>
              <p>Level : {item.level}</p>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center text-light">
          No data, please create a new one.
        </p>
      )}
    </>
  );
};

export default SearchPlayerForm;
