import Container from "src/Components/Container";
import NotificationClient from "./Components/NotificationClient";

const Notifications: React.FC = () => {
  return (
    <Container>
      <div className="p-3">
        <NotificationClient />
      </div>
    </Container>
  );
};

export default Notifications;
