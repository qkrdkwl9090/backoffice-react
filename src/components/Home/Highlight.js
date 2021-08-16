import styled from 'styled-components';
import HighlightContent from './HighlightContent';

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
function HighLight(){
    return (
        <HighlightContainer>
            <EmptyLeft>
                <EmptyTop/>
            </EmptyLeft>
            <Highlight>
                <HighlightContent color="#eaaf49" companNm="A Company" data="100K"/>
                <HighlightContent color="#4d90e0" companNm="B Company" data="41K"/>
                <HighlightContent color="#b417b7" companNm="C Company" data="51K"/>
            </Highlight>
            <EmptyRight>
                <EmptyTop/>
            </EmptyRight>
        </HighlightContainer>
    )

}
export default HighLight;