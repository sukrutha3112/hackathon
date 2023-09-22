import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
//  import { pdfimage } from './pdf.png';
 import {
    // Avatar,
    // AvatarGroup,
    // Box,
    // Button,
    Grid,
    // List,
    // ListItemAvatar,
    // ListItemButton,
    // ListItemSecondaryAction,
    // ListItemText,
    // MenuItem,
    // Stack,
    // TextField,
    Typography
  } from '@mui/material';

const Cards = () => {
  return (
    <div>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
          <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Parsing Image
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Parsing the image
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Extract PDF
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Extract PDF
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/pdf.png" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visualization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visualization of the data
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                API Checker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                API checker
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Parsing Image
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Parsing the image
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Extract PDF
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Extract PDF
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visualization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visualization of the data
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                API Checker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                API checker
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visualization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visualization of the data
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visualization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visualization of the data
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};

export default Cards;
