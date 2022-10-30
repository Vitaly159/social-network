import React, { useState } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, IconButton, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  iconsWrapper: {
    width: "100vh",
    padding: 12,
  },
  logoBlock: {
    display: "flex",
    marginBottom: 10,
  },
  iconBlock: {
    display: "flex",
  },
  notActiveIcon: {
    alignSelf: "center",
    fontSize: 30,
  },
  activeIcon: {
    color: "DeepSkyBlue",
    alignSelf: "center",
    fontSize: 30,
  },
  textIcon: {
    cursor: "pointer",
    fontWeight: 600,
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 16,
  },
  button: {
    borderRadius: 30,
    "&:hover": {
      color: "DeepSkyBlue",
      backgroundColor: "rgba(0,190,256, 0.1)",
    },
  },
});

interface Menu {
  name: string;
  img: any;
}

const refreshPage = (): void => {
  window.location.reload();
};

export const ButtonsIcons: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const [active, setActive] = useState("Главная");

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
      img: <HomeIcon className={isActiveIconStyle("Главная")} />,
    },
    {
      name: "Поиск",
      img: <SearchIcon className={isActiveIconStyle("Поиск")} />,
    },
    {
      name: "Уведомления",
      img: <NotificationsIcon className={isActiveIconStyle("Уведомления")} />,
    },
    {
      name: "Сообщения",
      img: <MailOutlineIcon className={isActiveIconStyle("Сообщения")} />,
    },
    {
      name: "Закладки",
      img: <BookmarkBorderIcon className={isActiveIconStyle("Закладки")} />,
    },
    {
      name: "Списки",
      img: <ListAltIcon className={isActiveIconStyle("Списки")} />,
    },
    {
      name: "Профиль",
      img: <PersonOutlineIcon className={isActiveIconStyle("Профиль")} />,
    },
    {
      name: "Еще",
      img: <MoreHorizIcon className={isActiveIconStyle("Еще")} />,
    },
  ];

  return (
    <List component="nav" className={classes.iconsWrapper}>
      <Box className={classes.logoBlock}>
        <IconButton onClick={refreshPage}>
          <TwitterIcon className={classes.activeIcon} />
        </IconButton>
      </Box>

      {icons.map((icon, index) => (
        <Box
          className={classes.iconBlock}
          key={index}
          onClick={() => getActive(icon.name)}
        >
          <IconButton className={classes.button}>
            {icon.img}
            <Typography
              className={`${classes.textIcon} ${isActiveIconStyle(icon.name)}`}
            >
              {icon.name}
            </Typography>
          </IconButton>
        </Box>
      ))}
    </List>
  );
};
