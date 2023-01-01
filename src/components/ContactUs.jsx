import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

function ContactUs(params) {
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
            <h2 className='text-center mt-5 mb-5'>Контакт</h2>
            <div className='container col-md-8 col-sm-12 col-xs-12'>
                <form
                ref={form} 
                onSubmit={sendEmail}
                >
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
        </>
    );
}
export default ContactUs;