import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chart from 'components/Chart';
import HighLight from 'components/Highlight';
import ChartImg from 'assets/images/chart.svg';
import TableImg from 'assets/images/table.svg';

const Top = styled.section`
    display: flex;
`;
const Home = styled.div`
    height:100%;
`
const Title = styled.div`
    margin: 40px;
    font-size: 24px;
    font-weight: 700;
`
const SubTitle = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 700;
`
const Img = styled.img`
    margin-right: 5px;
`
const ChartTop = styled.div`
    margin: 40px 0 20px;
    padding: 0 40px 0;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ChartMenu = styled.ul`
`
const Menu = styled.li`
    float: left;
    color: #74d4ed;
    padding :10px 15px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #74d4ed;
        color:rgb(36,44,57);
    }
`
const ChartContainer = styled.section`
    display: flex;
    flex-direction:column;
    align-items: center;
`

const TableContainerR = styled.section`
    margin :40px 40px;
`
const BootstrapInput = withStyles((theme) => ({
    root: {
        width: '300px',
        color:'white',
    },
    input: {
        backgroundColor:'inherit',
        borderRadius: 50,
        border: '2px solid #74d4ed',
        fontSize: 16,
        padding: '10px 20px',
        margin: '32px 0',
        '&:focus': {
            borderRadius: 50,
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
  }))(InputBase);
  
const StyledTableCell = withStyles((theme) => ({
    head: {
      color: 'grey',
      border: 'none'
    },
    body: {
      fontSize: 14,
      color: 'white',
      border: 'none',
      margin: '5px 0'
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
      
    root: {
        borderRadius: '7px',
        backgroundColor: '#333f56',
        gap: '10px'
    },
    body: {

    }
    
  }))(TableRow);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const HomePresenter = ({data}) => (
    <Home>
        <Top>
            <Title>HOME</Title>
            <FormControl variant="outlined" >
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                  value={10}
                //   onChange={handleChange}
                label="Area Chart"
                input={<BootstrapInput/>}
                >
                <MenuItem value={10}>Area Chart</MenuItem>
                <MenuItem value={20}>Line Chart</MenuItem>
                <MenuItem value={30}>Candle Chart</MenuItem>
                </Select>
        </FormControl>
        </Top>
        <ChartContainer>
            <ChartTop>                
                <SubTitle>
                    <Img src={ChartImg} alt="ChartImg" />
                    DASHBOARD
                </SubTitle>
                <ChartMenu>
                    <Menu>A Company</Menu>
                    <Menu>B Company</Menu>
                    <Menu>C Company</Menu>
                </ChartMenu>
            </ChartTop>
            <Chart data={data}/>
        </ChartContainer>
        <HighLight/>
        <TableContainerR>
            <SubTitle>                
                <Img src={TableImg} alt="TableImg" />
                PENDEINTE DE EXPEDICION
            </SubTitle>            
            <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </TableContainerR>
    </Home>
)
export default HomePresenter;