import { useState } from "react";
//router
import { Link } from "react-router-dom";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, IconButton, Typography, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
//компоненты
import { ButtonAddTweet } from "./ButtonAddTweet";

const useStyles = makeStyles({
  iconsWrapper: {
    paddingTop: 13,
  },
  logoBlock: {
    display: "flex",
    marginBottom: 10,
  },
  iconBlock: {
    display: "flex",
    top: -12,
    position: "relative",
  },
  twitterIcon: {
    color: "DeepSkyBlue",
    alignSelf: "center",
    fontSize: 30,
  },
  twitterIconBtn: {
    padding: "12px",
    top: -12,
  },
  notActiveIcon: {
    alignSelf: "center",
    fontSize: 27,
    color: "black",
  },
  activeIcon: {
    color: "DeepSkyBlue",
    alignSelf: "center",
    fontSize: 27,
  },
  textIcon: {
    cursor: "pointer",
    fontWeight: 600,
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 15,
  },
  button: {
    borderRadius: 30,
    "&:hover": {
      color: "DeepSkyBlue",
      backgroundColor: "rgba(0,190,256, 0.1)",
    },
  },
  buttonTwite: {
    width: "90%",
    backgroundColor: "DeepSkyBlue",
    borderRadius: "200px",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    fontWeight: 600,
    top: -12,
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.54)",
    },
  },
  buttonBlock: {
    textAlign: "center",
  },
});

interface Menu {
  name: string;
  img: any;
  link: string;
}

const refreshPage = (): void => {
  window.location.reload();
};

const setUpRouting = (pageName: any) => {
  if (pageName === "Главная") return "/home/my-posts";
  //pageName === "Поиск людей" && "/home/search";
};

export const Sidebar = (): React.ReactElement => {
  const classes = useStyles();
  const [openAddTweet, setOpenAddTweet] = useState<boolean>(false);

  const clickOpenAddTweet = (): void => {
    setOpenAddTweet(true);
  };

  const [active, setActive] = useState<string>("Главная");

  const getActive = (value: string): void => {
    setActive(value);
  };

  const isActiveIconStyle = (value: string): string => {
    const style = active === value ? classes.activeIcon : classes.notActiveIcon;
    return style;
  };

  const icons: Menu[] = [
    {
      name: "Главная",
      img: <HomeOutlinedIcon className={isActiveIconStyle("Главная")} />,
      link: "my-posts",
    },
    {
      name: "Поиск людей",
      img: <SearchIcon className={isActiveIconStyle("Поиск")} />,
      link: "search",
    },
    {
      name: "Уведомления",
      img: (
        <NotificationsNoneIcon className={isActiveIconStyle("Уведомления")} />
      ),
      link: "search",
    },
    {
      name: "Закладки",
      img: <BookmarkBorderIcon className={isActiveIconStyle("Закладки")} />,
      link: "my-profile",
    },
    {
      name: "Списки",
      img: <ListAltIcon className={isActiveIconStyle("Списки")} />,
      link: "my-profile",
    },
    {
      name: "Профиль",
      img: <PersonOutlineIcon className={isActiveIconStyle("Профиль")} />,
      link: "my-profile",
    },
  ];

  return (
    <Box style={{ minWidth: "220px" }}>
      <List component="nav">
        {icons?.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <Box
              className={classes.iconBlock}
              onClick={() => (
                getActive(icon.name),
                icon.name == "Профиль"
                  ? (localStorage.setItem("twHash", ""),
                    setTimeout(() => {
                      refreshPage();
                    }, 100))
                  : ""
              )}
            >
              <IconButton className={classes.button}>
                {icon.img}
                <Typography
                  className={`${classes.textIcon} ${isActiveIconStyle(
                    icon.name
                  )}`}
                >
                  {icon.name}
                </Typography>
              </IconButton>
            </Box>
          </Link>
        ))}
      </List>

      <Box className={classes.buttonBlock}>
        <Button className={classes.buttonTwite} onClick={clickOpenAddTweet}>
          Твитнуть
        </Button>
      </Box>

      <ButtonAddTweet
        openAddTweet={openAddTweet}
        setOpenAddTweet={setOpenAddTweet}
      />
    </Box>
  );
};
