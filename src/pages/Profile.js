import React, { useState } from 'react';

function ProfilePage() {
    const [name, setName] = useState('John Doe'); // Default name, update as necessary
    const [jobTitle, setJobTitle] = useState('Full Stack Developer'); // Default job title, update as necessary
    const [location, setLocation] = useState('Bay Area, San Francisco, CA'); // Default location, update as necessary
    const [website, setWebsite] = useState('https://bootdey.com'); // Default website, update as necessary
    const [github, setGithub] = useState('bootdey'); // Default GitHub username, update as necessary
    const [twitter, setTwitter] = useState('@bootdey'); // Default Twitter handle, update as necessary
    const [instagram, setInstagram] = useState('bootdey'); // Default Instagram username, update as necessary
    const [facebook, setFacebook] = useState('bootdey'); // Default Facebook username, update as necessary
    const [email, setEmail] = useState('fip@jukmuh.al'); // Default email, update as necessary
    const [phone, setPhone] = useState('239-816-9029'); // Default phone number, update as necessary
    const [mobile, setMobile] = useState('320-380-4539'); // Default mobile number, update as necessary
    const [address, setAddress] = useState('Bay Area, San Francisco, CA'); // Default address, update as necessary

    return (
        <div className="container mt-5">
            {/* Profile widget */}
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                                <div className="mt-3">
                                    <h4>{name}</h4>
                                    <p className="text-primary mb-1">{jobTitle}</p>
                                    <p className="text-muted font-size-sm">{location}</p>
                                    <button className="btn btn-primary me-1">Follow</button>
                                    <button className="btn btn-outline-primary">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                            <SocialLink iconClass="feather feather-globe" title="Website" value={website} />
                            <SocialLink iconClass="feather feather-github" title="Github" value={github} />
                            <SocialLink iconClass="feather feather-twitter" title="Twitter" value={twitter} />
                            <SocialLink iconClass="feather feather-instagram" title="Instagram" value={instagram} />
                            <SocialLink iconClass="feather feather-facebook" title="Facebook" value={facebook} />
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <ProfileField title="Full Name" value={name} />
                            <ProfileField title="Email" value={email} />
                            <ProfileField title="Phone" value={phone} />
                            <ProfileField title="Mobile"  value={mobile} />
                            <ProfileField title="Address" value={address} />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a className="btn btn-dark" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialLink({ iconClass, title, value }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${iconClass} mr-2 icon-inline`}>
                    {/* The SVG path should be set based on the icon */}
                </svg>
                {title}
            </h6>
            <span className="text-primary">{value}</span>
        </li>
    );
}

function ProfileField({ title, value }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">{title}</h6>
                </div>
                <div className="col-sm-9 text-primary">
                    {value}
                </div>
            </div>
            <hr />
        </>
    );
}

export default ProfilePage;