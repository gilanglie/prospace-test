import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

import {useSelector} from 'react-redux';

const delivery_time = [
  {name : '1 week',val : 7},
  {name : '2 weeks',val : 14},
  {name : '1 month',val : 30},
  {name : 'more',val : 100},
];
const marks = [
  {
    value: 7,
    label: '1 week',
  },
  {
    value: 14,
    label: '2 weeks',
  },
  {
    value: 30,
    label: '1 month',
  },
  {
    value: 100,
    label: 'more',
  },
];

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}
function valuetext(value) {
  return `${value}°C`;
}
export const Menu = (props) => {
  const mainData = useSelector(state => state.main.mainState)
  const [value, setValue] = React.useState({
    keyword: '',
    furniture_style:[],
    delivery_time:[7,100]
  })

  React.useEffect(() => {
    props.filter(value)
  },[value])
  const handleChange = prop => (event) => {
    setValue({ ...value, [prop]: event.target.value }); 
  };
  const handleChangeSlider = (event,val)=>{
    setValue({ ...value, ['delivery_time']: val }); 
  }
  // console.log(value)
  return (
    <Box mb={4}>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <TextField id="keyword" label="Search Furniture" color="secondary" onChange={handleChange('keyword')} value={value.keyword} />
        </Grid>
        <Grid item sm={6}>
          <InputLabel id="furniture-style-checkbox-label">Furniture Style</InputLabel>
            <Select
              labelId="furniture-style-checkbox-label"
              id="furniture-style-checkbox"
              multiple
              value={value.furniture_style}
              onChange={handleChange('furniture_style')}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
            >
              {mainData.furniture_styles.map(option => (
                <MenuItem key={option} value={option}>
                  <Checkbox color="primary" checked={value.furniture_style.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
        </Grid>
        <Grid item sm={12}>
            <InputLabel id="delivery-time-checkbox-label">Delivery Time</InputLabel>
          <Slider
              defaultValue={value.delivery_time}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              onChange={handleChangeSlider}
              aria-labelledby="track-false-range-slider"
              step={null}
              valueLabelDisplay="off"
              marks={marks}
              color="secondary"
            />
            

        </Grid>
      </Grid>
    </Box>
  );
}
