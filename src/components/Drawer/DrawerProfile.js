import styled from 'styled-components';
import NoImage from "assets/images/noImage.png";
import email from "assets/images/email.svg";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`
const ProfileImg = styled.img`
    width:40px;
    margin-left:5px;
    border-radius: 25px;
`
const Profile = styled.div`
    display: flex;
    align-items: center;

`
const ProfileContent = styled.div`
    width:110px;
    margin-left:15px;
`
const Name = styled.div`

`
const Company = styled.div`
    color:grey;
`
const Sales = styled.div`
    font-size: 14px;
`
const Email = styled.div`
    width:30px;
    height:30px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const EmailImg = styled.img`
    width:25px;
    height:25px;
`
function DrawerProfile({name, company, sales}){
    return(
        <Container>
            <Profile>
                <ProfileImg src={NoImage}/>
                <ProfileContent>
                    <Name>{name}</Name>
                    <Company>{company}</Company>
                </ProfileContent>
            </Profile>            
            <Sales>{sales}</Sales>
            <Email><EmailImg src={email} alt="email" /></Email>
        </Container>
    )

}
export default DrawerProfile;