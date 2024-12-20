import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

const EmployeeLayout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 col-lg-2 position-fixed vh-100 overflow-auto bg-white">
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <Link to="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src={Logo} alt="logo" className="logo me-3" />
                        </Link>
                        <hr />
                        <ul className="list-unstyled ps-0">
                            {/* Employee Dashboard */}
                            <li className={`mb-1 nav-item border-bottom ${location.pathname === '/employee' ? 'active' : ''}`}>
                                <Link to="/employee" className='text-decoration-none d-block nav-link  p-3'>
                                    <i className="bi bi-speedometer me-2"></i>
                                    Dashboard
                                </Link>
                            </li>

                            <li className={`mb-1 nav-item border-bottom ${location.pathname === '/employee/leaves' ? 'active' : ''}`}>
                                <Link to="/employee/leaves" className='text-decoration-none d-block nav-link  p-3'>
                                    <i className="bi bi-send-arrow-down-fill me-2"></i>
                                    Leaves
                                </Link>
                            </li>

                            <li className={`mb-1 nav-item border-bottom ${location.pathname === '/employee/attendance' ? 'active' : ''}`}>
                                <Link to="/employee/attendance" className='text-decoration-none d-block nav-link  p-3'>
                                    <i className="bi bi-calendar-date-fill me-2"></i>
                                    Attendance
                                </Link>
                            </li>

                            <li className={`mb-1 nav-item border-bottom ${location.pathname === '/employee/accountSetting' ? 'active' : ''}`}>
                                <Link to="/employee/accountSetting" className='text-decoration-none d-block nav-link  p-3'>
                                    <i className="bi bi-gear-fill me-2"></i>
                                    Account Settings
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className="col-md-10 col-lg-10 offset-md-2 offset-lg-2">
                    <header className="admin-header bg-white shadow-sm p-2 px-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Dashboard</h5>
                            <div className='d-flex justify-content-between align-items-center'>
                                <i className="bi bi-person-circle fs-1 me-3"></i>
                                <div className="dropdown cursor-pointer">
                                    <div className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Employee Name
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Account Setting</a></li>
                                        <li><a className="dropdown-item" href="/">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="admin-content">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default EmployeeLayout
