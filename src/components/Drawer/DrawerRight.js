import { accountApi } from 'api';
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import DrawerProfile from './DrawerProfile';
const DrawerRight = styled.header`
    color:white;
    position: fixed;
    bottom:0;
    right:0;
    width:350px;
    height:85%;
    z-index: 9;
    display:flex;
    flex-direction: column;
    border-top-left-radius: 25px;
    align-items: start;
    background:repeating-linear-gradient(45deg, #1b1e28,#1b1e28 10px, #191c26 0, #191c26 30px );    
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.8);
`;

const SubTitle = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 700;
    margin: 40px;
`
const Ranking = styled.div`
    margin: 0 40px;
    width: 270px;
`

const DrawerOption = () => {
    const [account, setAccount] = useState([]);
    async function getData(){
        const {data} = await accountApi.getAccount();
        setAccount(data);        
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <DrawerRight>
            <SubTitle>RANKING
            </SubTitle>
            <Ranking>
            {
                account && account.sort(function(a,b){
                    return b.sales - a.sales;
                }).map((item, index)=><DrawerProfile key={index} index={index} name={item.name} company={item.company} sales={item.sales}/>)
            }

            </Ranking>
        </DrawerRight>
    )
}
export default DrawerOption;