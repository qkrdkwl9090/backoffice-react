import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/CheckCircle';
import FavoriteBorder from '@material-ui/icons/CheckCircleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import Filter from 'assets/images/filter.svg'
const DrawerRight = styled.header`
    color:white;
    position: fixed;
    top:0;
    right:0;
    width:350px;
    height:100%;
    z-index: 9;
    display:flex;
    flex-direction: column;
    align-items: start;
    background:repeating-linear-gradient(45deg, #1b1e28,#1b1e28 10px, #191c26 0, #191c26 30px );    
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.8);
`;

const Category = styled.ul`
    margin: 24px auto 24px;
    display: flex;
`;

const Item = styled.li`
    padding: 20px;
    text-align:center;
    float:left;
    color: ${props => props.current ? "rgb(116,212,237)" : "grey"};
    font-weight:900;
    font-size:18px;
    /* transition: border-bottom .5s ease-in-out; */
    :hover{
        color:white;
        border-bottom: 1px solid #557986;
    }
`;
const Values = styled.ul`
    font-size: 15px;
    margin-left: 40px;
    color:grey;
`
const Value = styled.li`
    margin: 25px 0;
    color:white;
`
const Options = styled.ul`
    font-size: 15px;
    margin-left: 40px;
    color:grey;
`
const Option = styled.li`
    margin: 25px 0;
    color:white;
`;
const Img = styled.img`
    margin: 0 12px;
    width:26px;
`
const DrawerOption = () => (
    <DrawerRight>
        <Category>
            <Img src={Filter} alt="Filter"/>
            <Item>FILTERS</Item>
            <Item>OPTIONS</Item>
        </Category>
        <Values>
            VALUES
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Euros"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Kilos"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" font="white" name="checkedH" />}
                    label="M3"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Bultos"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Unidades"
                />
            </FormGroup>
        </Values>
        <Options>
        OPTIONS
        <FormGroup>
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Euros"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Kilos"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" font="white" name="checkedH" />}
                    label="M3"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Bultos"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary" name="checkedH" />}
                    label="Unidades"
                />
            </FormGroup>
        </Options>
    </DrawerRight>
)
export default DrawerOption;