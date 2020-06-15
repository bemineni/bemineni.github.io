import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TitleBar from "./TitleBar";
import Box from "@material-ui/core/Box"
import LeftBar from "./LeftBar"


import './App.css';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bemineni.github.io">
        bemineni.github.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyle = makeStyles({
  root:{ padding: 0, color:"white", height: "100vh"},
  
  rightRoot:{ 
    backgroundColor: "teal", 
    color: "black", 
    marginLeft: "25%"
  }
})

function App() {
  const classes = useStyle()
  return (
    <Container className={classes.root} maxWidth={false}>
        <TitleBar/>
          <LeftBar/>
          <Box className={classes.rightRoot}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque diam ut sagittis eleifend. Proin vel nisl id erat hendrerit dignissim sit amet sed neque. Vestibulum faucibus gravida neque sed vestibulum. Duis sit amet elit ac tellus posuere ultrices. Aliquam pretium leo sed neque iaculis luctus. Etiam vitae euismod magna. Etiam id magna sem.

Proin sit amet sapien condimentum, tempus tortor ac, condimentum ante. Pellentesque scelerisque magna arcu, non fringilla tortor imperdiet at. Maecenas malesuada blandit est vitae semper. Fusce vitae tortor at ante eleifend fermentum eget id justo. Aenean facilisis arcu suscipit, commodo turpis nec, auctor nunc. Aliquam gravida nisi vel metus accumsan congue tempor eget arcu. Integer tellus massa, congue in massa sit amet, semper fermentum enim. Phasellus tristique dui vel fringilla tincidunt.

Fusce consectetur tortor ut nunc mollis bibendum. In a metus nec neque commodo egestas. Duis arcu dui, iaculis vel mi non, viverra sagittis metus. Phasellus a sagittis tortor, a fermentum tortor. Morbi eget ornare libero, quis feugiat felis. Donec lectus ex, efficitur non massa sit amet, ultricies dignissim quam. Nullam elementum et leo eget vulputate. Quisque suscipit ex nec diam vehicula dictum. Nam ultrices convallis placerat. Maecenas iaculis viverra nisi, ut iaculis neque vulputate vel. Aliquam erat volutpat.

Cras a feugiat eros, eget lobortis mi. Mauris et ligula sagittis quam mattis sagittis. Vestibulum sit amet urna at tellus imperdiet mollis. Suspendisse nec augue lacus. Pellentesque id risus lobortis, egestas lacus id, eleifend urna. Sed id risus eget nibh porta posuere. Proin feugiat, purus non volutpat aliquam, massa massa lacinia nulla, a vehicula diam odio ac odio. Quisque dignissim congue lacus, fermentum consequat velit laoreet a. Pellentesque mattis sit amet odio non tempor. Integer mollis auctor dolor rhoncus laoreet.

Cras sagittis hendrerit purus quis bibendum. Cras a nisi a est dictum porttitor. Maecenas blandit ultrices odio a posuere. Nam lobortis varius orci, vitae bibendum urna scelerisque eget. Vivamus ultricies, velit eu accumsan imperdiet, orci urna mattis sem, et laoreet lacus libero et enim. Nullam et vulputate velit. In viverra euismod ante, vitae accumsan justo porttitor ac. Etiam placerat dolor et maximus accumsan. In lacinia pellentesque tellus, vel imperdiet dui vestibulum id. Curabitur vulputate hendrerit lectus, ac luctus lectus varius et. Vestibulum efficitur mauris nisi, posuere auctor sem condimentum non. Morbi sagittis tincidunt ex ac hendrerit. Ut in nibh molestie, venenatis neque maximus, mollis risus.

          </Box>
    </Container>
  );
}

export default App;
