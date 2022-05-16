import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Logo from "../assets/Bitmap.png"
import Akun from "../assets/Vector.png"
import Linkedin from "../assets/linkedin.png"
import Yt from "../assets/youtube.png"
import Ig from "../assets/ig.png"
import "../style/home.css"
import Banner1 from "../assets/banner1.png"
import Banner2 from "../assets/banner2.png"
import {Navbar,Container,Nav, Form, Button, Carousel, Card } from "react-bootstrap"
import axios from "axios"


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Home(){
    const [list, setList] = React.useState([]);

    const getData = async () => {
        const data = await axios.get(
          "https://asia-southeast2-ecodoe-production.cloudfunctions.net/v1/products?page=1&perpage=12"
        );

         console.log(data.data.data.products);   
         setList(data.data.data.products)
      };

      React.useEffect(() => {
        getData();
      }, []);

    return(
        <div className='home'>
            <div className="header">
            <Navbar  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img src={Logo} alt="" />
                    </Navbar.Brand>
                    <Search style={{border: "ridge", width: "70em"}}>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Cari Produk..."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                       
                    </Nav>
                    <Form className="d-flex">
                    
                    <img src={Akun} alt="" />
                        
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            </div>
            <div className="banner" style={{height: "20em"}}>
                    <Carousel style={{backgroundColor:"#F7F7F7", paddingTop:"1em", paddingBottom:"1em"}}>
                        <Carousel.Item interval={3000} >
                            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                                <img
                                style={{ width: "50em", height: "15em"}}
                                src={Banner1}
                                alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                                <a href="https://wa.me/+622121383994">
                                    <img
                                    style={{width: "30em", height: "15em", cursor:"pointer"}}
                                    src={Banner2}
                                    alt="Second slide"
                                    />
                                </a>
                            </div>
                        </Carousel.Item>
                    </Carousel>
            </div>
            <div className="productList" >
                <h2>Paling Laku</h2>
                <div className='mapProduct'>
                    {list.map((item)=>{
                        return(
                            <div className="list">
                                <Card style={{ width: '15rem', height:"25rem", boxShadow:"5px 10px #888888", backgroundColor:"#F7F7F7" }}>
                                    <Card.Img variant="top" src={item.main_image} />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"15px"}}>{item.name.slice(0, 25)}</Card.Title>
                                        <Card.Text style={{fontSize:"14px", color:"#BCBCBC"}}>{item.category}</Card.Text>
                                        <Card.Title>{item.min_price}</Card.Title>
                                    </Card.Body>
                                        <Card.Footer style={{width: "15rem", backgroundColor:"#F7F7F7" }}><a href="https://wa.me/+622121383994" class="buy" target="_blank">Tanyakan harga</a></Card.Footer>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="footer bg-light" >
                <div className="head">
                    <img src={Logo} alt="" />
                    <div className="foot">
                        <div className="left">
                            <div className="address">
                                <h4>Ecodoe Head Office</h4>
                                <p>Jl Bukit Duri Tanjakan, Tanjakan DLM XV No. 50 RT.04/RW.08
                                Bukit Duri, Tebet, South Jakarta - Indonesia.
                                Indonesia 12840</p>
                            </div>
                            <div className="about">
                                <h4>Ecodoe</h4>
                                <h6>Tentang Ecodoe</h6>
                                <h6>Blog</h6>
                                <br />
                                <h4>Media Sosial</h4>
                                <div className="socmed">
                                    <a href="https://www.linkedin.com/company/ecodoe/" target="_blank"><img src={Linkedin} alt="linkedin" /></a>
                                    <a href="https://youtube.com/channel/UCY9BoG7tlWGThVucxxqb1CQ" target="_blank"><img src={Yt} alt="youtube" /></a>
                                    <a href="https://instagram.com/ecodoe?igshid=YmMyMTA2M2Y=" target="_blank"><img src={Ig} alt="instagram" /></a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h4>Hubungi Kami</h4>
                            <p>Open Hours: Senin-Minggu 09.00-18.00</p>
                            <p>Email:  service@localaris.com</p>
                            <Button variant="success">
                                <a href="https://wa.me/+622121383994">Chat via Whatsapp</a>    
                            </Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="createdBy bg-success">
            
                <p>© 2022 PT Ecodoe Widya Candia Internasional</p>
             
            </div>
        </div>
    )
}


export default Home