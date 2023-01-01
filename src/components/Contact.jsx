import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = (params) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(params.ServiceId, params.TemplateId, form.current, params.PublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <>
            <h2 className='text-center mt-5'>Контакт</h2>
            <div className='row'>
                <div className='col-md-6 col-sm-12 col-xs-12'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-outline mb-4">
                            <input type="text" name="user_name" className="form-control" required />
                            <label className="form-label" htmlFor="user_name">Име</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="user_phone" className="form-control" required />
                            <label className="form-label" htmlFor="user_phone">Телефонен номер</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" name="user_email" className="form-control" required />
                            <label className="form-label" htmlFor="user_email">Имейл адрес</label>
                        </div>

                        <div className="form-outline mb-4">
                            <textarea className="form-control" name="message" rows="4" required></textarea>
                            <label className="form-label" htmlFor="message">Текст</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Изпрати</button>
                    </form>
                </div>
                <div className='col-md-6 col-sm-12 col-xs-12'>
                    <div className='map-area'>
                        <iframe
                            title="address"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.6132980631814!2d23.327795919082728!3d42.71361875218845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8ff34c8823e7%3A0x18d994b6b2a2ea6f!2sShell!5e0!3m2!1sde!2sde!4v1672039517813!5m2!1sde!2sde"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;