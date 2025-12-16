import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h2>Messages</h2>

      <MessageCard
        title="Meeting Update"
        message="The team meeting has been rescheduled to Friday at 10 AM."
      />

      <MessageCard
        title="Assignment Due"
        message="Please submit your React assignment before midnight."
      />

      <MessageCard
        title="System Alert"
        message="The application will be down for maintenance tonight."
      />

      <MessageCard
        title="Thank You"
        message="Thanks for completing all the required tasks on time."
      />
    </div>
  );
}

export default App;

