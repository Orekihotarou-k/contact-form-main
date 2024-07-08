import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        queryType: 'general',
        message: '',
        consent: false,
    })

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        message: '',
        consent: '',
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            alert("success")
            
        } else {
            alert('Form has errors. Please correct them.')
        }
    }

    const validateForm = () => {
        let valid = true
        const newErrors = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            message: '',
            consent: '',
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'This field required'
            valid = false
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'This field required'
            valid = false
        }

        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = 'Email Address is required'
            valid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = 'Email Address is invalid'
            valid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = 'This field required'
            valid = false
        }

        if (!formData.consent) {
            newErrors.consent = 'To submit the form, please consent to being contacted'
            valid = false
        }

        setFormErrors(newErrors)
        return valid
    }

    return (
        <form className="bg-white p-8 lg:py-16 rounded-3xl font-karla max-w-[40rem]" onSubmit={handleSubmit}>
            <h1 className="font-bold text-3xl text-grey-darker mb-8">Contact Us</h1>

            <div className="text-grey-darker">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-6">
                    <div>
                        <label htmlFor="firstName">First Name *</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`border-2 border-grey-medium rounded-md p-2 w-full mt-2 ${formErrors.firstName && 'border-red'}`} />
                        {formErrors.firstName && <span className="text-red">{formErrors.firstName}</span>}
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name *</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`border-2 border-grey-medium rounded-md p-2 w-full mt-2 ${formErrors.lastName && 'border-red'}`} />
                        {formErrors.lastName && <span className="text-red">{formErrors.lastName}</span>}
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="emailAddress">Email Address *</label>
                    <input 
                        type="email" 
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className={`border-2 border-grey-medium rounded-md p-2 w-full mt-2 ${formErrors.emailAddress && 'border-red'}`} />
                    {formErrors.emailAddress && <span className="text-red">{formErrors.emailAddress}</span>}
                </div>

                <div>
                    <label>Query type *</label>
                    <div className="flex flex-col sm:flex-row mt-2 items-center gap-4 mb-6">
                        <div className="w-full border-2 p-2 px-6 rounded-md border-grey-medium">
                            <label htmlFor="general" className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    id="general"
                                    name="queryType"
                                    value="general"
                                    checked={formData.queryType === 'general'}
                                    onChange={handleChange}
                                    aria-label="general enquiry"
                                    className='appearance-none border-2 border-grey-medium rounded-full w-5 h-5 checked:bg-green-medium checked:border-transparent focus:outline-none' />
                                <span>General Enquiry</span>
                            </label>
                        </div>
                        <div className="w-full border-2 p-2 px-6 rounded-md border-grey-medium">
                            <label htmlFor="support" className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    id="support"
                                    name="queryType"
                                    value="support"
                                    checked={formData.queryType === 'support'}
                                    onChange={handleChange}
                                    aria-label="support request"
                                    className='appearance-none border-2 border-grey-medium rounded-full w-5 h-5 checked:bg-green-medium checked:border-transparent focus:outline-none' />
                                <span>Support Request</span>
                            </label>
                        </div>
                    </div>
                </div>   
                
                <div>
                    <label htmlFor="message">Message *</label>
                    <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`border-2 border-grey-medium rounded-md p-2 w-full mt-2 h-40 sm:h-24 ${formErrors.message && 'border-red'}`} />
                    {formErrors.message && <span className="text-red">{formErrors.message}</span>}
                </div>

                <div>
                    <div className="flex items-center gap-4 mt-6">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className={`border-2 border-grey-medium rounded-md p-2 ${formErrors.consent && 'border-red'}`} />
                        <label htmlFor="consent">I consent to being contacted by the team *</label>
                    </div>
                    {formErrors.consent && <span className="text-red">{formErrors.consent}</span>}
                </div>
                      
                <button 
                    type="submit"
                    className="bg-green-medium w-full mt-6 p-4 rounded-md text-white text-xl"
                >
                    Submit
                </button>

            </div>
        </form>
    )
}

export default ContactForm
