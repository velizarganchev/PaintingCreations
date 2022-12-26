import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>
            <h2 className='text-center mt-4'>Contact</h2>
            <div className='row'>
                <div className='col-md-6 col-sm-12 col-xs-12'>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="form4Example1" className="form-control" />
                            <label className="form-label" for="form4Example1">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="form4Example2" className="form-control" />
                            <label className="form-label" for="form4Example2">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                            <label className="form-label" for="form4Example3">Message</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                            <label className="form-check-label" for="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                    </form>
                </div>
                <div className='col-md-6 col-sm-12 col-xs-12'>
                    <div className='map-area'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.6132980631814!2d23.327795919082728!3d42.71361875218845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8ff34c8823e7%3A0x18d994b6b2a2ea6f!2sShell!5e0!3m2!1sde!2sde!4v1672039517813!5m2!1sde!2sde"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;