import { Card } from "react-bootstrap";

const RecentPlayerCard = ({ recentData, title }) => (
  <Card className="shadow">
    <Card.Title className="text-center py-3">
      Recently {title} Player
    </Card.Title>
    <Card.Body>
      <p>Username : {recentData.username}</p>
      <p>Password : {recentData.password}</p>
      <p>Email : {recentData.email}</p>
      <p>Experience : {recentData.experience}</p>
      <p>Level : {recentData.level}</p>
    </Card.Body>
  </Card>
);

export default RecentPlayerCard;
