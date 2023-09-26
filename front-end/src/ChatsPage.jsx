import PropTypes from "prop-types"; // Import PropTypes

import { PrettyChatWindow } from "react-chat-engine-pretty";

// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "e8c070e7-11b4-4ffd-857d-48e2a61cbe81",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} />
//     </div>
//   );
// };

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="e8c070e7-11b4-4ffd-857d-48e2a61cbe81"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

// Define the prop types for the ChatsPage component
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    // Add other user prop validations as needed
  }).isRequired,
};

export default ChatsPage;
