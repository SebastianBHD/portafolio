import EmailSection from '../components/emailSection'

function Contact({ primaryColor = '#9f86c0' }) {

    const colorMailMap = {
        '#9f86c0': '/svgs/mail-violet.svg',
        '#ff8f33': '/svgs/mail-orange.svg',
        '#4caf50': '/svgs/mail-green.svg',
      };

      const imageSrc = colorMailMap[primaryColor] || '/svgs/mail-violet.svg'; 

    return (
        <>
            <div className="w-full md:p-5 p-2 flex flex-col justify-center">
                <div className="flex items-center justify-center my-10">
                    <div className="flex-grow border-t border-tertiary"></div>
                    <h1 className="mx-4 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words">
                        Contact Me
                    </h1>
                    <div className="flex-grow border-t border-tertiary"></div>
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