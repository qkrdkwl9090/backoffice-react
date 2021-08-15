import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import ReactApexChart from 'react-apexcharts'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    font-size: 20px;
    font-weight: 700;
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
const HighlightContainer = styled.section`
    display: flex;
    margin: 40px;
`
const EmptyLeft = styled.div`
    width:30%;
    height:80px;
    border-right: 1px solid grey;
`
const EmptyRight = styled.div`
    width:30%;
    height:80px;
    border-left: 1px solid grey;
`
const EmptyTop = styled.div`
    height:40px;
    border-bottom: 1px solid grey;
`

const Highlight = styled.div`
    width:100%;
    display: flex;
    align-content: center;
    justify-content: center;
`
const HighlightContent = styled.div`
    margin: 0 15px;
    width:27%;
    border-radius: 7px;
    height:100%;
    background-color: #293143;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentColorBorder = styled.div`
    width:50px;
    height:50px;
    border-radius: 25px;
    border: 1px solid grey;
    padding: 9px 0 0 9px;
`
const ContentColor = styled.div`
    width:30px;
    height:30px;
    border-radius: 25px;
    background-color:#eaaf49;
`
const Content = styled.div`
    margin-left:15px;

`
const ContentTitle = styled.div`
    color:grey;
    
`
const ContentData = styled.div`
    margin-top:6px;
    font-size: 24px;
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
  const chartData = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'series3',
        data: [21, 42, 41, 22, 11, 42, 51]
      }],
      options: {
        chart: {
          height: 350,
          width: 1250,
          type: 'area',          
          toolbar: {
            show:false,
          },
        },
        dataLabels:{
            enabled:false
        },
        colors:['#eaaf49', '#4d90e0', '#b417d7'],
        stroke: {
          curve: 'smooth'
        },
        legend: {
            labels:{
                colors: 'white'
            }
        },
        xaxis: {
          type: 'datetime',
          labels: {
              style:{
                  fontSize:'15px',
                  colors:'grey'
              },
          },
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            labels:{
                style:{                    
                  fontSize:'15px',
                  colors:'grey'
                }
            }
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
          theme:'dark'
        },
    }
}
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
const HomePresenter = () => (
    <Home>
        <Top>
            <Title>HOME</Title>
            <FormControl variant="outlined" >
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                  value={10}
                //   onChange={handleChange}
                label="Age"
                input={<BootstrapInput/>}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
        </FormControl>
        </Top>
        <ChartContainer>
            <ChartTop>                
                <SubTitle>EXPEDICION</SubTitle>
                <ChartMenu>
                    <Menu>Dia</Menu>
                    <Menu>Semana</Menu>
                    <Menu>Mes</Menu>
                    <Menu>Ano</Menu>
                </ChartMenu>
            </ChartTop>
            <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={chartData.options.chart.height} width={chartData.options.chart.width}/>
        </ChartContainer>
        <HighlightContainer>
            <EmptyLeft>
                <EmptyTop/>
            </EmptyLeft>
            <Highlight>
                <HighlightContent>
                    <ContentColorBorder>
                        <ContentColor/>
                    </ContentColorBorder>
                    <Content>
                        <ContentTitle>Series1</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>
                <HighlightContent>
                    <ContentColorBorder>
                        <ContentColor/>
                    </ContentColorBorder>
                    <Content>
                        <ContentTitle>Series2</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>
                <HighlightContent>
                    <ContentColorBorder>
                        <ContentColor/>
                    </ContentColorBorder>
                    <Content>
                        <ContentTitle>Series3</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>

            </Highlight>
            <EmptyRight>
                <EmptyTop/>
            </EmptyRight>
        </HighlightContainer>
        <TableContainerR>
            <SubTitle>PENDEINTE DE EXPEDICION</SubTitle>
            
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