import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation';

function EmailSection() {
    const { t } = useTranslation();
    const [message, setMessage] = useState(null); 
    const [isError, setIsError] = useState(false); 

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            );
            if (result.status === 200) {
                setMessage(t('contact.emailSent')); 
                setIsError(false);
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            setMessage(t('contact.emailError')); 
            setIsError(true);
        }

        e.target.reset();
        setTimeout(() => setMessage(null), 5000);
    };

    return (
        <div className="flex flex-col w-full">
            <p className="mb-6 lg:text-2xl text-xl font-semibold text-secondary uppercase dark:text-tertiary cursor-default">{t('contact.contactLabel')}</p>
            <form className="flex flex-col gap-5" onSubmit={sendEmail}>
                <div className="flex flex-col gap-5">
                    <Input type="text" name="email_from" className="sm:w-96 max-w-full" placeholder={t('contact.emailPlaceholder')} required />
                    <Textarea className="w-full max-w-full overflow-hidden"  name="message" id="message" placeholder={t('contact.messagePlaceholder')} required />
                    <div className="flex justify-end">
                        <Button className="w-24" variant="secondary" size="sm" type="submit">{t('contact.send')}</Button>
                    </div>
                </div>
            </form>
            {message && (
                <div
                    className={`mt-4 p-2 rounded text-white cursor-default ${isError ? 'bg-red-500 bg-opacity-60 border-2 border-red-500' : 'bg-green-500 bg-opacity-60 border-2 border-green-500'}`}
                >
                    {message}
                </div>
            )}
        </div>
    );
}

export default EmailSection;
