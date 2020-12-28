import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import BarChartTwoToneIcon from '@material-ui/icons/BarChartTwoTone';
import CodeforcesSVG from 'assets/Codeforces_logo.svg';
import Heatmap from './Heatmap';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    displayImage: {
      margin: '2rem 0 0.5rem 0 ',
      width: '150px',
      height: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '6px purple solid',
      borderRadius: '5rem',
    },
    ratingStyling: {
      fontWeight: 700,
      borderLeft: '4px solid purple',
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      right: '0',
      width: drawerWidth,
      '& a': {
        color: 'rgb(255, 255, 255, 0.6)',
      },
      padding: '1rem',
      fontSize: '12px',
      textAlign: 'center',
      backgroundColor: '#3a3939',
      color: 'rgb(255, 255, 255, 0.6)',
    },
  })
);

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img src={CodeforcesSVG} alt="codeforces_logo"></img>
          <Typography variant="h6" noWrap className={classes.title}>
            Codeforces Stats
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Heatmap />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptas totam dolorem
          eius recusandae, aperiam consequatur aut esse quis! Praesentium
          numquam pariatur consequatur explicabo ipsam eum, enim dolorem sequi
          nisi tenetur? Eaque illo, ab tempore incidunt nihil quae enim? Quia
          sed architecto reprehenderit quasi dolore nisi molestias quod est
          suscipit consectetur? A perferendis quisquam quam nulla quod rerum
          deserunt libero vel sint optio perspiciatis cupiditate, magni
          accusamus culpa blanditiis qui numquam voluptatibus enim eligendi
          dolore laborum fugiat! Officia impedit temporibus similique, iure et
          explicabo quaerat adipisci voluptatum voluptates nostrum a nulla
          necessitatibus natus doloremque rem, exercitationem est, aspernatur ut
          dolores vero consectetur harum! Aliquid velit vitae placeat saepe
          distinctio nisi nesciunt vel at ex impedit corrupti dolores, itaque
          veniam ipsa id, quasi repellendus, sint porro nobis omnis enim!
          Expedita veniam magni omnis incidunt adipisci hic suscipit iure.
          Officiis, quia dignissimos fuga molestias unde rem incidunt molestiae
          sed illum nostrum accusantium earum inventore fugiat qui at ea
          repellat ipsum quis perspiciatis neque deserunt et minus accusamus
          similique. Minima assumenda tenetur, rerum, tempore laudantium modi
          suscipit at in aliquid ratione a hic expedita dolore. Iure,
          consequuntur quisquam eius quaerat placeat cumque expedita itaque enim
          voluptate! Iure aliquid eaque nulla, accusamus sunt vel dicta dolor
          quasi. Et, rerum perspiciatis? Nulla veritatis sequi distinctio
          accusamus vitae cupiditate ipsa voluptas maxime quasi adipisci
          laudantium at doloribus sed fugit, ea odit dolores expedita ex velit
          aliquam dolorum aperiam. Perspiciatis possimus iste nostrum quos
          reprehenderit reiciendis incidunt sapiente ipsam aspernatur, ea fuga
          quaerat eum illum delectus unde eaque, provident dolorum recusandae?
          Vero similique atque tenetur nam praesentium commodi. Asperiores harum
          facere voluptatibus repellendus amet molestiae possimus accusantium,
          nulla eveniet, voluptate deleniti sequi placeat quis velit libero?
          Unde aliquam, ea maxime deserunt, repellat cum eius reprehenderit
          laboriosam libero neque quibusdam a nemo consequatur, minus soluta
          temporibus? Delectus harum doloribus iusto aut obcaecati totam
          perferendis mollitia, iure voluptatum magnam ullam voluptas
          repellendus error nam, vel, ab suscipit blanditiis quae iste laborum
          repudiandae reiciendis! Porro tempora consectetur quia quo nam
          molestias ratione a autem blanditiis incidunt! Sit tenetur, laboriosam
          nisi optio facere ex. Blanditiis molestiae deserunt tenetur iusto
          voluptatum, facilis laudantium nihil commodi nemo at libero nostrum
          debitis ipsam dolore a harum maxime optio amet, obcaecati explicabo
          corrupti? Non vero excepturi, itaque doloremque molestiae porro
          asperiores sequi quia cumque culpa voluptatem maxime dolores
          voluptatum! Eius at aliquid, placeat illo debitis illum neque. Esse
          excepturi laudantium iusto id fugiat error eaque dicta vel est,
          eligendi facere ipsam, aliquid, perspiciatis labore atque! Unde fugit
          eveniet nihil dolore labore harum velit magnam illo, provident
          asperiores consequuntur aut temporibus excepturi placeat atque eos
          reprehenderit. Quasi mollitia, pariatur qui deleniti maxime quam
          nobis, et aperiam id ab odio quas similique repellat amet dolore
          debitis distinctio molestias expedita architecto? Velit, odit hic a
          odio et, nisi voluptate, ut quibusdam natus aspernatur quos. Vitae
          minus veritatis corporis enim dignissimos velit sint nam temporibus
          voluptatibus dolore, aperiam officia similique architecto quos odit
          quam, debitis esse aliquam illo, omnis accusantium. Et, perferendis.
          Neque mollitia nobis quo adipisci laudantium doloremque cupiditate.
        </Typography>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <img
          alt="profile_picture"
          src="//userpic.codeforces.com/1207268/title/315d51cd5abdf38a.jpg"
          className={classes.displayImage}
        ></img>
        <Typography variant="h6" align="center">
          Rishabh Malhotra
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          @rishgod
        </Typography>
        <Typography
          variant="h1"
          align="center"
          className={classes.ratingStyling}
        >
          1785
        </Typography>
        <Typography
          className={classes.ratingStyling}
          variant="h6"
          align="center"
          style={{ marginBottom: '1rem', color: 'purple' }}
        >
          Candidate MASTER
        </Typography>
        <Divider />
        <Grid container style={{ paddingTop: '0rem ' }}>
          <Grid
            item
            style={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}
            xs={6}
          >
            <Typography variant="h6" align="center">
              Contest
            </Typography>
            <Typography variant="h6" align="center">
              112
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              Question
            </Typography>
            <Typography variant="h6" align="center">
              500
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <BarChartTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Codeforces Handle" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Codeforce Blog" />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.footer}>
          Made with &#9829; by Rishabh Malhotra{'  '}•{'  '}
          <a href="https://github.com/rishabh-malhotraa" target="__blank">
            Github
          </a>
        </div>
      </Drawer>
    </div>
  );
}
