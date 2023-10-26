import { Button, CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import UserBox from "../../Components/UserBox/UserBox";
function UsersList({
  list,
  setValue,
  setSearchedUser,
  setPage,
  shouldShownLoadMoreUserButton,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    // simulating async process
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      {list.map((user) => (
        <UserBox
          setValue={setValue}
          setSearchedUser={setSearchedUser}
          key={user._id}
          userInfo={user}
        />
      ))}
      {!shouldShownLoadMoreUserButton && (
        <Stack mt={4}>
          <Button onClick={fetchData}>
            {isLoading ? (
              <Stack direction="row" alignItems="center" gap={1}>
                <CircularProgress color="secondary" size={25} />
                {"  "}...Loading More Users
              </Stack>
            ) : (
              "Load more users"
            )}
          </Button>
        </Stack>
      )}
    </>
  );
}

export default UsersList;
