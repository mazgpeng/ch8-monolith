import { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import {
  CreatePlayerForm,
  UpdatePlayerForm,
  RecentPlayerCard,
  ToastNotification,
  SearchPlayerForm,
} from "../components";

const Home = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    experience: "",
    level: "",
  });

  const [recentData, setRecentData] = useState({});
  const [recentUpdate, setRecentUpdate] = useState({});
  const [showToast, setShowToast] = useState(false);

  let localData = localStorage.getItem("playerData");
  localData = localData ? JSON.parse(localData) : [];

  return (
    <Row>
      <Col className="bg-light rounded">
        <ToastNotification
          showToast={showToast}
          setShowToast={setShowToast}
          title="Yeay !!"
          msg="New player has been added !"
        />
        <Tabs defaultActiveKey="create" id="form-tabs" className="mt-3">
          <Tab className="mb-3" eventKey="create" title="Create">
            <CreatePlayerForm
              stateData={data}
              setStateDate={setData}
              localData={localData}
              setRecentData={setRecentData}
              setShowToast={setShowToast}
            />
          </Tab>
          <Tab className="mb-3" eventKey="edit" title="Edit">
            <UpdatePlayerForm setRecentUpdate={setRecentUpdate} />
          </Tab>
          <Tab className="mb-3" eventKey="search" title="Search">
            <SearchPlayerForm />
          </Tab>
        </Tabs>
      </Col>
      <Col>
        <RecentPlayerCard recentData={recentData} title="Added" />
        {recentUpdate.username ? (
          <div className="mt-2">
            <RecentPlayerCard recentData={recentUpdate} title="Updated" />
          </div>
        ) : null}
      </Col>
    </Row>
  );
};

export default Home;
