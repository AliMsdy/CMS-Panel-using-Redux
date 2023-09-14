//Components
import Profile from "../Profile/Profile";

// import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function ResponsiveMenu({ shouldShown, closeHandler }) {
  const list = (
    <Box
      sx={{ width: 250, color: "white" }}
      role="presentation"
      // onClick={closeHandler(false)}
      onKeyDown={closeHandler(false)}
    >
      <div className="mb-12 flex flex-col items-center">
        <Profile width="w-[90%]" responsiveMenu={true} />
      </div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {index % 2 === 0 ? (
                <InboxIcon color="inherit" />
              ) : (
                <MailIcon color="inherit" />
              )}
              <ListItemText disableTypography primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "white" }} />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon> */}
              {index % 2 === 0 ? (
                <InboxIcon color="inherit" />
              ) : (
                <MailIcon color="inherit" />
              )}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor="right"
      open={shouldShown}
      onClose={closeHandler(false)}
      sx={{ "& .MuiPaper-root": { bgcolor: "#252323" } }}
    >
      {list}
    </Drawer>
  );
}

export default ResponsiveMenu;
