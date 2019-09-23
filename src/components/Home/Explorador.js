import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';

function Explorador(){
    return(
      <Grid>
            <List component="nav" >
              <ListItem button>
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Explorar" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsNoneIcon />
                </ListItemIcon>
                <ListItemText primary="Notificaciones" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Mensajes" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Guardado" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Listas" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MoreHorizIcon />
                </ListItemIcon>
                <ListItemText primary="Más opciones" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Twittear" />
              </ListItem>
            </List>
    </Grid> 
)}

export default Explorador;