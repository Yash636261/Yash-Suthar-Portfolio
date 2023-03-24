import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


//const Container = styled.div`
//`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"/>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Studio</ListItem>
              <ListItem>Works</ListItem>
              <ListItem>Contact</ListItem>
            </List>
        </Links>
        <Icons>
          <Icon src=""/>
            <Button>
              Hire now
            </Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar























// import React,{useState} from "react";
// import Button from "./Button";

// const Navbar=()=>{

//     let Links =[
//         {name:"HOME",link:"/"},
//         {name:"SERVICE",link:"/"},
//         {name:"ABOUT",link:"/"},
//         {name:"BLOG'S",link:"/"},
//         {name:"CONTACT",link:"/"},
//       ];
//       let [open,setOpen]=useState(false);
//     return (
//       <div className='shadow-md w-full fixed top-0 left-0'>
//         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//         text-gray-800'>
//           <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//           <ion-icon name="logo-ionic"></ion-icon>
//           </span>
//           Designer
//         </div>
        
//         <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//         <ion-icon name={open ? 'close':'menu'}>o</ion-icon>
//         </div>
  
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//           {
//             Links.map((link)=>(
//               <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//                 <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//               </li>
//             ))
//           }
//           <Button>
//             Get Started
//           </Button>
//         </ul>
//         </div>
//       </div>
//     )
// }
// export default Navbar;