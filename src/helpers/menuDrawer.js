import HeadphonesIcon from "@mui/icons-material/Headphones";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const drawerMenuOptions = [
  { text: "Home", icon: <LibraryMusicIcon sx={{fontSize: "2rem"}}/>, route: "/home" },
  { text: "DJ", icon: <SupportAgentIcon sx={{fontSize: "2rem"}}/>, route: "/dj" },
];
