import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Sidebar.css';
import { AiFillHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsClipboard2Check } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* <h2 className="sidebar-title">Navigation</h2> */}
            <nav className='h-100'>
                {/* <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">
                            Home2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active">
                            Home3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active">
                            Home4
                        </NavLink>
                    </li>
                </ul> */}
                <div className="certificate-builder-menu">
                        <div className="certificate-builder-menu-top">
                            <ul className="tcb-sidebar-ul tcb-sidebar-ul-top">
                              
                                <li className='active'>
                                    <a >
                                        {/* <FaSquarePlus size={20} /> */}
                                        <AiFillHome size={20}/>

                                    </a>
                                </li>
                                <li >
                                    <a >
                                        {/* <MdPermMedia size={20} /> */}
                                        <VscGraph size={20}/>

                                    </a>
                                </li>
                                <li >
                                    <a >
                                        {/* <FaShapes size={20} /> */}
                                        <BsClipboard2Check  size={20}/>

                                    </a>
                                </li>
                                <li >
                                    <a>
                                        {/* <TbSquaresFilled size={20} /> */}
                                        <CiWallet size={20}/>

                                    </a>
                                </li>
                                <li >
                                    <a>
                                        {/* <TbSquaresFilled size={20} /> */}
                                        <HiOutlineShoppingBag size={20}/>

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="certificate-builder-menu-bottom">
                            <ul className="tcb-sidebar-ul tcb-sidebar-ul-bottom">
                                <li>
                                    <a>
                                        {/* <FaLayerGroup size={20} /> */}
                                        <RiLogoutCircleRLine size={20}/>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </div>
    );
};

export default Sidebar;
