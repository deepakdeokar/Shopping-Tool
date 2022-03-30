import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter,} from "@mui/icons-material";
import styled from "styled-components";
  
  
  const Container = styled.div`
    display: flex;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Shopping Store</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores neque vel, sed error ipsum, vero aspernatur nam ducimus, impedit assumenda architecto. Cum mollitia molestiae ipsum dolor amet minima expedita?
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>My Orders</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Complaints</ListItem>
            <ListItem></ListItem>
            <ListItem>Help</ListItem>
            
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 209 D BLOCK , COEP HOSTEL 010203
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 9423232334
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@shopping.store
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;