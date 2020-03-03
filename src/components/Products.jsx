import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CurrencyFormat from 'react-currency-format';
import { useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Products = (props) => {
  const classes = useStyles();
  const mainData = useSelector(state => state.main.mainState)
  const [products, setProducts] = React.useState([])
  const dataFilter = props.dataFilter

  React.useEffect(() => {
    let products = [...mainData.products]

    let filtered = products.filter(option => {
      const deliv_time = dataFilter.delivery_time;
          if(
            option.name.toLowerCase().includes(dataFilter.keyword.toLowerCase()) && 
            dataFilter.furniture_style.every((tag) => option.furniture_style.includes(tag)) &&
            (option.delivery_time <= deliv_time[0] || option.delivery_time <= deliv_time[1])
          ){
            return true;
          }

        return false;
      
    })
    
    setProducts(filtered)
  },[mainData,dataFilter])

  

  const getDate = (days) => {
    var months = parseInt(days / 30);
    days = days - months * 30;
    var weeks = parseInt(days / 7);
    days = days - weeks * 7;
    return (months > 0 ? months + " month" + (months > 1 ? "s, " : ", ") : "") + (weeks > 0 ? weeks + " week" + (weeks > 1 ? "s, " : ", ") : "") + (days > 0 ? days + " day" + (days > 1 ? "s, " : ", ") : "") 
 }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map(product=>(
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography align="right" color="error"  gutterBottom>
                  <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                </Typography>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {product.description.substring(0,114)}
                </Typography>
                <Typography className={classes.pos} color="primary">
                  {product.furniture_style.join(', ')}
                </Typography>
                <Typography className={classes.pos} align="right" component="p" color="primary">
                  {getDate(product.delivery_time)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
        }
        
      </Grid>
    </div>
  );
}
