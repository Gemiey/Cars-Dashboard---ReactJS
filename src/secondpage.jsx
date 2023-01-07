import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { HiSearch } from 'react-icons/hi';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineCar} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiScissors2Line} from 'react-icons/ri';
import {AiOutlineCalendar} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {SlLogout} from 'react-icons/sl';
import {GrNotification} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg';
import {BsSliders} from 'react-icons/bs';
import {SiMcdonalds} from 'react-icons/si';
import {AiOutlineRetweet} from 'react-icons/ai';
import {BsLightningCharge} from 'react-icons/bs';
import {RiArrowUpDownFill} from 'react-icons/ri';
import {GiWaterDrop} from 'react-icons/gi';
import {GiStoneWheel} from 'react-icons/gi';
import {GiRecycle} from 'react-icons/gi';
import {RxColorWheel} from 'react-icons/rx';
import { Line } from 'react-chartjs-2';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import car1 from './images/car1.png';
import car2 from './images/car2.png';
import car3 from './images/car3.png';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
    
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        x: {
          grid: {
            display: true
          }
        },
        y: {
            display:false,
          grid: {
            display: false
          }
        }
      }
    
  };
  
  const labels = ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
  
  export const data = {
    labels,
    datasets: [
      {
        data: [140000,120000,157000,110000,145000,105000,130000],
        backgroundColor: ['#F4F5F9',"#F4F5F9","#2884FF"],
      },
    
    ],
  };
  
  export const optionssecond = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    elements: {
        point:{
            radius: 0
        }
    },
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
            display:false,
          grid: {
            display: false
          }
        }
      }
    
  };
  export const labelssecond = ['7AM', '9AM', '11AM', '1PM', '3PM', '5PM', '7PM','9PM'];
    export const datasecond = {
  labels: labelssecond,
  datasets: [{
    data: [65, 59, 80, 81, 56, 55, 40,30],
    borderColor: '#FF764C',
  }]
};
export const Secondpage = (props) => {

    return (
        <div>
            
        <div className="sidebar">
            
        <div className="logo"><div className="icon"><SiMcdonalds></SiMcdonalds></div><h1 className="motiv">Motiv.</h1>    </div>
            
         <div className="list-item">  <div className="list-icon"><BsGrid3X3Gap></BsGrid3X3Gap></div> <Button className="item-name"><ul>Dashboard</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineUser></AiOutlineUser></div> <Button className="item-name"><ul>Assets</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineCar></AiOutlineCar></div> <Button className="item-name"><ul>Booking</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><BsBag></BsBag></div> <Button className="item-name"><ul>Sell Cars</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineShoppingCart></AiOutlineShoppingCart></div> <Button className="item-name"><ul>Buy Cars</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><RiScissors2Line></RiScissors2Line></div> <Button className="item-name"><ul>Services</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><AiOutlineCalendar></AiOutlineCalendar></div> <Button className="item-name"><ul>Calendar</ul></Button></div>
         <div className="list-item">  <div className="list-icon"><BsGrid3X3Gap></BsGrid3X3Gap></div> <Button className="item-name"><ul>Messages</ul></Button></div>
            
        <div className="barbottom">
            
        <div className="list-item">  <div className="list-icon"><FiSettings></FiSettings></div> <Button className="item-name"><ul>Settings</ul></Button></div>
        <div className="list-item">  <div className="list-icon"><SlLogout></SlLogout></div> <Button className="item-name"><ul>Log out</ul></Button></div>
    
            </div>
        </div>
        
        <div className="search">
            
            <div className="searchicon"><HiSearch></HiSearch></div>
            <input className="searchbar" type="search" placeholder="Search or type"></input>
            
        </div>

        <div className="topbuttons">    
            <div className="notif"><GrNotification></GrNotification></div>
            <div><CgProfile></CgProfile></div>
        </div>

        <div className="body">
           
     <div className="cars">
        <div className="carbox">
         <div className="icon-button">   <BsLightningCharge className="box-icon"></BsLightningCharge></div>
         <h2 className="energy">Energy</h2>
         <SemiCircleProgressBar percentage={45}  stroke = {'#FFFFFF'} />
         <h2 className="percentage-purple">45%</h2>
        </div>
        
        <div className="carbox-center">
        <div className="icon-button-second">   <RiArrowUpDownFill className="box-icon"></RiArrowUpDownFill></div>
         <h2 className="title">Range</h2>
         <SemiCircleProgressBar percentage={50} stroke = {'#FF7E86'} />
         <h2 className="percentage">157k%</h2>
        </div>    
        
        <div className="carbox-right">
        <div className="icon-button-third">   <GiWaterDrop className="box-icon"></GiWaterDrop></div>
         <h2 className="title">Break Fluid</h2>
         <SemiCircleProgressBar percentage={9}  stroke = {'#A162F7'} />
         <h2 className="percentage">9%</h2>


      </div> 
      
      <div className="carbox-far-right">             
        <div className="icon-button-fourth">   <GiStoneWheel className="box-icon"></GiStoneWheel></div>
         <h2 className="title">Tire Wear</h2>
         <SemiCircleProgressBar percentage={25}  stroke = {'#F6CC0D'} />
         <h2 className="percentage">25%</h2>
      </div>    
      </div>

        <div className="cars-row2">

        <div className="carbox-left">
        <p className="graph-title"><span style={{ fontWeight: 'bold' }}>Miles</span> Statistics</p>
        <div className="info">
        <span className="day"> <p style={{ color: '#FFFFFF' }}>Day</p>  </span>      
        
        <span className="week-month"> <p >Week</p>  </span>
                
        <span className="week-month"> <p >Month</p>  </span>
        
        <div className="miles">
            <span></span>
            <p>256 Miles</p>    
        </div>        
        </div>  

        <Bar options={options} data={data} />;     

        </div>    
        
        <div className="carbox-right">
        <p className="graph-title"><span style={{ fontWeight: 'bold' }}>Car</span> Statistics</p>
        <div className="info">
            
            <span className="date">20 February 2022</span>    
            
            <span className="day-orange"><p style={{ color: '#FFFFFF' }}>Day</p>  </span>
            
            <span className="week-month"><p >Week</p>  </span>
                
             <span className="week-month">
                <p >Month</p>  </span>

        </div> 
        
        <Line options={optionssecond} data={datasecond} /> 

        </div>    
       
        
        </div>

        <div className="cars-row3">
        
        <div className="carbox-left">    
        <p className="cardhead"><GiRecycle></GiRecycle>64% Recommended</p>
                        <img src = {car1} alt=""/>
                         <p className="car-name">Mini Cooper</p>

            <div className="cardbottom">                      
              <div><AiOutlineRetweet></AiOutlineRetweet></div><div>132K</div><div className="bottom-icons"><RxColorWheel></RxColorWheel><BsLightningCharge></BsLightningCharge></div>
              <div className="price">$32</div>/h
            </div>
        </div>    
        
        <div className="carbox-center"> 
        <p className="cardhead"><GiRecycle></GiRecycle>74% Recommended</p>
                        <img src = {car2} alt=""/>
                         <p className="car-name">Porsche 911 Carrera</p>

            <div className="cardbottom">                      
              <div><AiOutlineRetweet></AiOutlineRetweet></div><div>130K</div><div className="bottom-icons"><RxColorWheel></RxColorWheel><BsLightningCharge></BsLightningCharge></div>
              <div className="price">$28</div>/h
            </div>
        </div>    
        
        <div className="carbox-right">       
        <p className="cardhead"><GiRecycle></GiRecycle>74% Recommended</p>
                        <img src = {car3} alt=""/>
                         <p className="car-name">Porsche 911 Carrera</p>
            
            <div className="cardbottom">                      

              <div><AiOutlineRetweet></AiOutlineRetweet></div><div>130K</div><div className="bottom-icons"><RxColorWheel></RxColorWheel><BsLightningCharge></BsLightningCharge></div>
              <div className="price">$28</div>/h
            </div>
            
        </div>    

        </div>
        </div>
        </div>
    )
}