import UserBox from "../../Components/UserBox/UserBox";
function UsersList({ list,setValue,setSearchedUser }) {
  return (
    <>
      {[...list].reverse().map((user) => (
        <UserBox setValue={setValue} setSearchedUser={setSearchedUser} key={user._id} userInfo={user} />
      ))}
    </>
  );
}

export default UsersList;
