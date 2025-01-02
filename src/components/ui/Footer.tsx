// Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>

            <footer style={{ color: '#fff', paddingTop: '200px', paddingBottom: '20px', textAlign: 'left', position: 'relative' }}>
                <div
                    style={{
                        zIndex: 1,
                        marginBottom: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'wheat',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                        borderRadius: '0.75rem',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        maxWidth: '600px',
                        margin: '-150px auto 0',
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#ffffff', textAlign: 'center' }}>
                        Get started
                    </div>
                    <div style={{ fontSize: '44px', fontWeight: 'bold', marginBottom: '20px', color: '#ffffff', textAlign: 'center' }}>
                        See if you qualify <span style={{ color: '#ffd143' }}>today</span>
                    </div>
                    <div style={{ width: '100%', height: '400px', borderRadius: '0.75rem' }}>
                        <iframe
                            src="https://outlook.office365.com/book/AviraWorldTechnologyConsultationBooking@aviraworld.co.in/"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Select a Date & Time - Calendly"
                        />
                    </div>
                </div>

                <div
                    className="footer-container"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        paddingBottom: '0',
                        paddingTop: '40px',
                        backgroundColor: '#000',
                        color: '#fff',
                        textAlign: 'center',
                    }}
                >
                    <div
                        className="row"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 20px',
                        }}
                    >
                        <div className="col-md-6" style={{ margin: 0, flex: 1, textAlign: 'left' }}>
                            <p style={{ fontSize: '25px', margin: 0 }}>© 2024 Avira World Technology Consulting</p>
                        </div>
                        <div className="col-md-4" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', flex: 1 }}>
                            <button
                                type="button"
                                style={{ fontWeight: 'bold', color: 'white', margin: 0 }}
                            >
                                <Link href="/services">Services</Link>
                            </button>
                            <button>
                                <a
                                href="https://outlook.office365.com/owa/calendar/AviraWorldTechnologyConsultationBooking@aviraworld.co.in/bookings/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 'bold', color: 'white', margin: 0, padding: '10px 20px', backgroundColor: 'black', borderRadius: '5px', textDecoration: 'none' }}
                            >
                                Contact Us
                            </a>
                            
                            </button>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
