import styled from 'styled-components';

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
function HighLight(){
    return (
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
                        <ContentTitle>A Company</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>
                <HighlightContent>
                    <ContentColorBorder>
                        <ContentColor/>
                    </ContentColorBorder>
                    <Content>
                        <ContentTitle>B Company</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>
                <HighlightContent>
                    <ContentColorBorder>
                        <ContentColor/>
                    </ContentColorBorder>
                    <Content>
                        <ContentTitle>C Company</ContentTitle>
                        <ContentData>300K</ContentData>
                    </Content>
                </HighlightContent>
            </Highlight>
            <EmptyRight>
                <EmptyTop/>
            </EmptyRight>
        </HighlightContainer>
    )

}
export default HighLight;