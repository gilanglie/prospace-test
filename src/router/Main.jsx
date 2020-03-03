import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {mainAction} from '../action/mainAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {Menu} from '../components/Menu';
import { Products } from '../components/Products';

export const Main = (props) => {
  const [value, setValue] = React.useState({})
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(mainAction())
  },[])

  const handleFilter = (data) =>{
    setValue(data)
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Furniture Finder
          </Typography>
        </Toolbar>
        <Container >
          <Menu filter={handleFilter} />
        </Container>
      </AppBar>
      <Container>
        <Products dataFilter={value}/>
      </Container>
    </>
  );
}
