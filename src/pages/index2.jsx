import React from 'react';
import Sidebar from './Aside';
// import './Dashboard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Chart from 'react-apexcharts';
import ReactStars from "react-rating-stars-component";
import { TfiTarget } from "react-icons/tfi";
import { LiaHamburgerSolid } from "react-icons/lia";

import { BiDish } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Badge from 'react-bootstrap/Badge';
import { MdKeyboardArrowRight } from "react-icons/md";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    const data = {
        series: [{
            name: 'Activity',
            data: [8000, 5000, 7000, 6000, 4000, 8000, 6000, 7000, 5000, 8000, 13000, 10000, 15000, 10000, 11000, 12000, 8000, 9000, 7000]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
            },
            yaxis: {
                title: {
                    text: 'Activity'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " units"
                    }
                }
            }
        }
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activity',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data2 = {
        datasets: [
            {
                data: [70, 30],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(200, 200, 200, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(200, 200, 200, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options2 = {
        cutout: '80%',
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
    }
    return (
        <div className="">
            <div class="app-header">
                <div class="app-header-left">
                    {/* <span class="app-icon"></span> */}
                    <MdDashboard size={35} className='text-primary' />

                    {/* <p class="app-name">Portfolio</p> */}
                    <div class="search-wrapper ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                            <defs></defs>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="M21 21l-4.35-4.35"></path>
                        </svg>
                        <input class="search-input" type="text" placeholder="Search" />
                    </div>
                </div>
                <div class="app-header-right">
                    <button class="mode-switch borderset" >

                        <CiMail size={15} />
                    </button>
                    <button class="add-btn borderset">

                        <CiSettings size={15} />
                    </button>
                    <button class="notification-btn borderset">
                        <FaBell size={13} />

                    </button>
                    <button class="profile-btn">
                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
                    </button>
                </div>
                <button class="messages-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </button>
            </div>
            <div className="d-flex">

                <Sidebar />
                <div className="main-content w-100 p-3" >
                    <h2 className='text-white py-3'>Dashboard</h2>
                    <Row >
                        <Col md={8} lg={8} sm={12} >
                            <Row>
                                <Col md={3} lg={3} sm={6} className='mb-3'>
                                    <Card className='p-0 bg-darknew'>
                                        <Card.Body>
                                            <div class="d-flex flex-column align-items-between">
                                                <div>
                                                    <div class="d-flex">
                                                        <div class=" text-white p-2 rounded" style={{ background: "#273468" }}>
                                                            <FaShoppingBasket size={30} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-3">
                                                    <span>Total Order</span>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h3 class="counter m-0"
                                                        // style="visibility: visible;"
                                                        >75</h3>
                                                        <div >
                                                            <div class="text-success">
                                                                <BiSolidUpArrow />

                                                                <span> 3%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3} lg={3} sm={6} className='mb-3'>
                                    <Card className='p-0 bg-darknew'>
                                        <Card.Body>
                                            <div class="d-flex flex-column align-items-between">
                                                <div>
                                                    <div class="d-flex">
                                                        <div class="btext-white p-2 rounded" style={{ background: "#145244" }}>
                                                            <GiShoppingBag size={30} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-3">
                                                    <span>Total Delivered</span>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h3 class="counter m-0"
                                                        // style="visibility: visible;"
                                                        >70</h3>
                                                        <div >
                                                            <div class="text-danger">
                                                                <BiSolidDownArrow />

                                                                <span> 3%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col md={3} lg={3} sm={6} className='mb-3'>
                                    <Card className='p-0 bg-darknew'>
                                        <Card.Body>
                                            <div class="d-flex flex-column align-items-between">
                                                <div>
                                                    <div class="d-flex">
                                                        <div class="text-white p-2 rounded" style={{ background: "#5f3034" }}>
                                                            <GiShoppingBag size={30} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-3">
                                                    <span>Total Cancelled</span>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h3 class="counter m-0"
                                                        // style="visibility: visible;"
                                                        >5</h3>
                                                        <div >
                                                            <div class="text-success">
                                                                <BiSolidUpArrow />

                                                                <span> 3%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3} lg={3} sm={6} className='mb-3'>
                                    <Card className='p-0 bg-darknew'>
                                        <Card.Body>
                                            <div class="d-flex flex-column align-items-between">
                                                <div>
                                                    <div class="d-flex">
                                                        <div class=" text-white p-2 rounded" style={{ background: "#582949" }}>
                                                            <BsCurrencyExchange size={30} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-3">
                                                    <span>Total Revenue</span>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h3 class="counter m-0"
                                                        // style="visibility: visible;"
                                                        >$12k</h3>
                                                        <div >
                                                            <div class="text-danger ">
                                                                <BiSolidDownArrow />

                                                                <span> 3%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={4} lg={4} sm={12} className='mb-3'>
                            <div className='bg-darknew' style={{ padding: '20px 20px 15px 20px' }}>
                                <div style={{ borderRadius: '8px', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <div>
                                        <h6>Net Profit</h6>
                                        <p style={{ fontSize: '2em', margin: '0' }}>${(6759.25).toFixed(2)}</p>
                                        <p style={{ color: '#319076', margin: '0' }}>  <BiSolidUpArrow />{" "}
                                            3%</p>
                                    </div>
                                    <div style={{ width: '100px', height: '100px' }}>
                                        <Doughnut data={data2} options={options2} />
                                        <div style={{ position: 'relative', top: '-60%', textAlign: 'center', color: '#FFFFFF' }}>
                                            <p style={{ margin: '0', fontSize: '0.7em' }}>70%</p>
                                            <p style={{ margin: '0', fontSize: '0.5em' }}>Goal <br />Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'end', color: '#FFFFFF', marginTop: "4px" }}>
                                    <p style={{ margin: '0', fontSize: '0.7em' }}  >*The values here has been rounded off.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={8} lg={8} sm={12} className='mb-3'>

                            <Card className='p-0 bg-darknew'>
                                <Card.Body>
                                    <h6>Activity</h6>
                                    <Chart options={data.options} series={data.series} type="bar" height={200} />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} lg={4} sm={12} className='mb-3'>
                            <Card className='p-0 bg-darknew'>
                                <Card.Body>
                                    <ul class="list-inline m-0 p-0">
                                        <li class="d-flex mb-4 mt-3 align-items-center">
                                            <div class=" rounded-pillset p-2" style={{ background: "#5f3035" }}>
                                                <TfiTarget size={20} color='#ae5e43' />
                                            </div>
                                            <div class="ms-3 flex-grow-1">
                                                <h6>Goals</h6>
                                            </div>
                                            {/* <div class="text-gray p-2">
                                                <IoIosArrowDroprightCircle color={"#434447"} size={40} />

                                            </div> */}
                                            <div class="mode-switch bordersetNew  p-2" >
                                                <MdKeyboardArrowRight size={35} />
                                            </div>
                                        </li>
                                        <li class="d-flex mb-4 align-items-center">
                                            <div class=" rounded-pillset rounded-pill" style={{ background: "#283468" }}>
                                                <LiaHamburgerSolid size={20} color={"#5e75c2"} />

                                            </div>
                                            <div class="ms-3 flex-grow-1">
                                                <h6>Popular Dishes</h6>
                                            </div>
                                            <div class="mode-switch bordersetNew  p-2" >
                                                <MdKeyboardArrowRight size={35} />
                                            </div>
                                        </li>
                                        <li class="d-flex  mb-4 align-items-center">
                                            <div class=" rounded-pillset  rounded-pill" style={{ background: "#1f4a60" }}>
                                                <BiDish size={20} color='#3080a6' />

                                            </div>
                                            <div class="ms-3 flex-grow-1">
                                                <h6>Menus</h6>
                                            </div>
                                            <div class="mode-switch bordersetNew  p-2" >
                                                <MdKeyboardArrowRight size={35} />
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mb-3'>
                            <Card className='p-0 bg-darknew'>
                                <Card.Body>
                                    <h2>Recent Orders</h2>
                                    <table class="responsive-table bg-darknew">
                                        <thead class="responsive-table__head">
                                            <tr class="responsive-table__row">
                                                <th class="responsive-table__head__title responsive-table__head__title--name">Customer
                                                </th>
                                                <th class="responsive-table__head__title responsive-table__head__title--types">Order No.</th>
                                                <th class="responsive-table__head__title responsive-table__head__title--update">Amount</th>
                                                <th class="responsive-table__head__title responsive-table__head__title--country">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="responsive-table__body">
                                            <tr class="responsive-table__row">
                                                <td class="responsive-table__body__text responsive-table__body__text--name">
                                                    <svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                                                        <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                                                        <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                                                        <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
                                                        <path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
                                                        <path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
                                                        <path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
                                                        <path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
                                                        <path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
                                                        <path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
                                                        <path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
                                                        <path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
                                                        <g fill="#f4fbff">
                                                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                                                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                                                        </g>
                                                        <path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
                                                        <path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
                                                        <path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
                                                    </svg>
                                                    Developer Zahid
                                                </td>

                                                <td class="responsive-table__body__text responsive-table__body__text--types">123567</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--update">$543.00</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--country"><Badge bg="success">Delivered</Badge></td>
                                            </tr>
                                            <tr class="responsive-table__row">
                                                <td class="responsive-table__body__text responsive-table__body__text--name">
                                                    <svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                                                        <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                                                        <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                                                        <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
                                                        <path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
                                                        <path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
                                                        <path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
                                                        <path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
                                                        <path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
                                                        <path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
                                                        <path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
                                                        <path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
                                                        <g fill="#f4fbff">
                                                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                                                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                                                        </g>
                                                        <path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
                                                        <path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
                                                        <path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
                                                    </svg>
                                                    John Doe
                                                </td>

                                                <td class="responsive-table__body__text responsive-table__body__text--types">123567</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--update">$543.00</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--country"><Badge bg="success">Delivered</Badge></td>
                                            </tr>
                                            <tr class="responsive-table__row">
                                                <td class="responsive-table__body__text responsive-table__body__text--name">
                                                    <svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                                                        <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                                                        <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                                                        <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
                                                        <path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
                                                        <path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
                                                        <path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
                                                        <path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
                                                        <path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
                                                        <path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
                                                        <path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
                                                        <path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
                                                        <g fill="#f4fbff">
                                                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                                                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                                                        </g>
                                                        <path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
                                                        <path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
                                                        <path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
                                                    </svg>
                                                    Ryan Guill
                                                </td>

                                                <td class="responsive-table__body__text responsive-table__body__text--types">123567</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--update">$543.00</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--country">      <Badge bg="danger">Cancel</Badge>
                                                </td>
                                            </tr>
                                            <tr class="responsive-table__row">
                                                <td class="responsive-table__body__text responsive-table__body__text--name">
                                                    <svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                                                        <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                                                        <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                                                        <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
                                                        <path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
                                                        <path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
                                                        <path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
                                                        <path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
                                                        <path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
                                                        <path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
                                                        <path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
                                                        <path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
                                                        <g fill="#f4fbff">
                                                            <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                                                            <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                                                        </g>
                                                        <path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
                                                        <path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
                                                        <path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
                                                    </svg>
                                                    Dan Broughan
                                                </td>

                                                <td class="responsive-table__body__text responsive-table__body__text--types">123567</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--update">$543.00</td>
                                                <td class="responsive-table__body__text responsive-table__body__text--country"><Badge bg="success">Delivered</Badge></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div class="messages-section bg-darknew">
                                <button class="messages-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="15" y1="9" x2="9" y2="15" />
                                        <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                </button>
                                <div class="projects-section-header">
                                    <p>Customer's Feedback</p>
                                </div>
                                <div class="messages">
                                    <div class="message-box">
                                        <div className='d-flex gap-2'>

                                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                                            <div class="message-header">
                                                <div class="name">Stephanie</div>
                                            </div>
                                        </div>
                                        <div class="message-content">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                // onChange={ratingChanged}
                                                edit={false}
                                                size={24}
                                                isHalf={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p class="message-line">
                                                The food was excellent and so was the service. I had the
                                                mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="message-box">
                                        <div className='d-flex gap-2'>
                                            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                                            <div class="message-header">
                                                <div class="name">Mark</div>
                                            </div>
                                        </div>
                                        <div class="message-content">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                // onChange={ratingChanged}
                                                edit={false}
                                                size={24}
                                                isHalf={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p class="message-line">


                                                We enjoyed the Eggs Benedict served on homemade focaccia
                                                bread and hot coffee. Perfect service
                                            </p>
                                        </div>
                                    </div>
                                    <div class="message-box">
                                        <div className='d-flex gap-2'>
                                            <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                                            <div class="message-header">
                                                <div class="name">David</div>
                                            </div>
                                        </div>
                                        <div class="message-content">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                // onChange={ratingChanged}
                                                edit={false}
                                                size={24}
                                                isHalf={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p class="message-line">
                                                The food was excellent and so was the service. I had the
                                                mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="message-box">
                                        <div className='d-flex gap-2'>
                                            <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                                            <div class="message-header">
                                                <div class="name">Jessica</div>
                                            </div>
                                        </div>
                                        <div class="message-content">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                // onChange={ratingChanged}
                                                edit={false}
                                                size={24}
                                                isHalf={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p class="message-line">
                                                We enjoyed the Eggs Benedict served on homemade focaccia
                                                bread and hot coffee. Perfect service
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>



                </div>
            </div>
        </div>
    );
};

export default Dashboard;
