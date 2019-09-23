import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    style: { width: '100%', height: '100%' },
  };
function texto()    {
    return (
<div>
        <Grid>
            <List>
                <ListItem >
                    <ListItemText>
                        <h1>
                            Titulo
                        </h1>
                    </ListItemText>
                    </ListItem>
                    <ListItem >
                    <Box border ={1}{...defaultProps}>
                        <ListItemText>
                            hola hola
                            <Button            
                                variant="contained"
                                color="primary">
                                <Link href="/" style={{ textDecoration: 'none' ,color:"black"}}>Prueba ir a root</Link>
                            </Button>
                        </ListItemText>
                    </Box>
                    </ListItem>
                    <ListItem >
                    <Box border ={1}{...defaultProps}>
                        <ListItemText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque dui sapien, at convallis nisl pellentesque quis. Aliquam id metus ut dolor vulputate placerat eget eget nibh. Etiam in eros consectetur, iaculis nulla non, scelerisque dui. Fusce erat urna, convallis et massa eu, fermentum congue elit. Curabitur at pulvinar purus, fringilla convallis sapien. Nulla varius quam consectetur lacus auctor sagittis. Integer faucibus consectetur dolor. Vivamus commodo, dui vitae accumsan aliquam, tortor urna porta diam, sit amet semper arcu risus sit amet libero. Cras ultricies dui a convallis iaculis.

                            Ut at congue mauris, eget blandit mauris. Donec in pellentesque nisl. Mauris placerat dictum justo nec maximus. Ut efficitur ornare nisl a sollicitudin. Fusce leo velit, hendrerit quis magna nec, vulputate consectetur ante. Proin gravida eros nec convallis semper. Curabitur mauris dolor, ultrices vitae quam quis, iaculis mollis ex. Pellentesque at posuere orci, vel malesuada est. Morbi dapibus imperdiet facilisis. Maecenas luctus turpis lectus, nec consectetur velit viverra quis.

                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vulputate auctor bibendum. Fusce vulputate blandit lacus maximus tempus. Curabitur gravida scelerisque convallis. Nullam sollicitudin magna porttitor varius mattis. Nunc eu nunc in ipsum rhoncus hendrerit. Nam lacus velit, scelerisque ut ex vel, efficitur volutpat dolor. Mauris sodales lorem arcu, a rutrum felis semper sit amet. Mauris consequat cursus gravida.

                            Vestibulum imperdiet magna ut ipsum dapibus consectetur. Morbi tristique vel justo vel tincidunt. Vivamus sit amet sagittis est. Donec hendrerit vulputate vulputate. Integer blandit magna augue, vel rhoncus enim scelerisque in. Donec accumsan, neque vitae finibus semper, nibh justo feugiat nisl, in varius dui mi in nulla. Cras in est dignissim, egestas odio at, aliquet elit. Ut in turpis tellus. Proin consectetur massa sed magna volutpat pretium. Ut vestibulum velit in tortor tincidunt, at vestibulum mi consequat. Duis posuere mi malesuada metus faucibus molestie. Phasellus vulputate pellentesque mattis. Praesent leo mauris, congue vestibulum sodales vel, dignissim vel elit. Nam quis arcu non mauris suscipit sollicitudin eu eget leo. In dignissim felis at eleifend accumsan.

                            Praesent efficitur et tortor vitae tincidunt. Sed congue vehicula erat. Donec rhoncus nisl eget urna auctor, non vulputate arcu fermentum. Aenean rutrum pharetra finibus. Nulla aliquam neque felis, vel euismod leo sollicitudin ac. Aliquam lobortis venenatis sapien, in egestas neque consequat ac. Aliquam in malesuada arcu, a luctus dui. Integer metus risus, ultricies vitae tristique ac, tempus id odio. Etiam a ex quis orci aliquam lacinia. Etiam non rhoncus ipsum. Praesent mattis condimentum magna, sollicitudin tristique purus placerat ac. Nunc purus nulla, aliquet ut bibendum a, dictum hendrerit purus. Sed hendrerit dui non elementum tincidunt. Vestibulum facilisis neque at est ultrices, at iaculis ante consequat.
                   
                        </ListItemText>
                    </Box>
                </ListItem>
            </List>
        </Grid>
        </div>
    )
}
export default texto;