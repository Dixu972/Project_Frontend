import React from 'react'
import AHeader from '../Component/AHeader'
import AFooter from '../Component/AFooter'
import { Helmet } from 'react-helmet'

function Dashboard() {
  return (
    <div>
      <AHeader title="Dashboard"/>
      <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="Assets_Website/lib/easing/easing.min.js"></script>
                <script src="Assets_Website/lib/waypoints/waypoints.min.js"></script>
                <script src="Assets_Website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="Assets_Website/lib/isotope/isotope.pkgd.min.js"></script>
                <script src="Assets_Website/lib/lightbox/js/lightbox.min.js"></script>

                <script src="Assets_Website/mail/jqBootstrapValidation.min.js"></script>
                <script src="Assets_Website/mail/contact.js"></script>

                <script src="Assets_Website/js/main.js"></script>
            </Helmet>
            <div>
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <h1 className="section-title position-relative text-center mb-5">Traditional &amp; Delicious Ice Cream Since 1950</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 py-5">
                                <h4 className="font-weight-bold mb-3">About Us</h4>
                                <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                                <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                                <a href className="btn btn-secondary mt-2">Learn More</a>
                            </div>
                            <div className="col-lg-4" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100 rounded overflow-hidden">
                                    <img className="position-absolute w-100 h-100" src="Assets_Website/img/about.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-4 py-5">
                                <h4 className="font-weight-bold mb-3">Our Features</h4>
                                <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                                <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                                <a href className="btn btn-primary mt-2">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Team Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative mb-5">Experienced &amp; Most Famous Ice Cream Chefs</h1>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="owl-carousel team-carousel">
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src="Assets_Website/img/team-1.jpg" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src="Assets_Website/img/team-2.jpg" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src="Assets_Website/img/team-3.jpg" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img mx-auto">
                                            <img className="rounded-circle w-100 h-100" src="Assets_Website/img/team-4.jpg" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="position-relative text-center bg-light rounded px-4 py-5" style={{ marginTop: '-100px' }}>
                                            <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                            <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                            <div className="d-flex justify-content-center pt-1">
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
            </div>
            <AFooter/>
    </div>
  )
}

export default Dashboard
