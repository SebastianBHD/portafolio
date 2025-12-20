import EmailSection from '../components/email-section'
import { useTranslation } from '../hooks/useTranslation'

function Contact({ primaryColor = '#9f86c0' }) {
    const { t } = useTranslation();

    const colorMailMap = {
        '#9f86c0': '/svgs/mail-violet.svg',
        '#ff8f33': '/svgs/mail-orange.svg',
        '#4caf50': '/svgs/mail-green.svg',
      };

      const imageSrc = colorMailMap[primaryColor] || '/svgs/mail-violet.svg'; 

    return (
        <>
            <div className="w-full md:p-5 p-2 flex flex-col justify-center">
                <div className="flex items-center justify-center my-10 mb-8 lg:mb-12">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
                    <h1 className="mx-6 md:mx-8 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words font-semibold tracking-tight bg-gradient-to-r from-tertiary to-tertiary/80 bg-clip-text cursor-default">
                        {t('contact.title')}
                    </h1>
                    <div className="flex-grow h-px bg-gradient-to-l from-transparent via-tertiary/50 to-transparent" />
                </div>
                <div className="flex justify-center items-end -0">
                    <img className="md:w-1/2 w-3/4 p-5" src={imageSrc} alt="Developer" />
                </div>
                <div className="basis-1/3 flex justify-center items-center space-x-5 md:text-xl min-w-full font-light p-4 bg-primary bg-opacity-60 rounded-md mb-12">
                    <EmailSection />
                </div>
            </div>
        </>
    )
}

export default Contact;