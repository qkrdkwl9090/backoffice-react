import styled from 'styled-components';

const Container = styled.div`
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
background-color:${props => props.color};
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

function HighlightContent({color, companNm, data}){
    return(
        <Container>
            <ContentColorBorder>
                <ContentColor color={color}/>
            </ContentColorBorder>
            <Content>
                <ContentTitle>{companNm}</ContentTitle>
                <ContentData>{data}</ContentData>
            </Content>
        </Container>

    )
}
export default HighlightContent;