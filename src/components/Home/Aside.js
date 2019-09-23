import React from 'react';
import { List, ListItem,ListItemText } from '@material-ui/core';
function Aside(){return(
    <body>
        <aside>
            <h2 bold>
                Tendencias para ti
            </h2>   
                <List>
                    <ListItem button>
                        <ListItemText primary="#ParoNacional" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="#ParoDeTransporte" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Quintero" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Messi" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Mostrar más" />
                    </ListItem>
                </List>
        </aside>
        <aside>
        
        </aside>
    </body>
    )}
export default Aside;