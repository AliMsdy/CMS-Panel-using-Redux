import UserBox from "../../Components/UserBox/UserBox";
function UsersList({ list }) {
  return (
    <>
      {list.map((user) => (
        <UserBox key={user._id} userInfo={user} />
      ))}
    </>
  );
}

export default UsersList;
