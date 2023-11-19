import PropTypes from 'prop-types';

const About = (props) => {
    let bgColor = props.mode === "light" ? "bg-gray-200" : "bg-gray-700";

    return (
        <>
            <div className='flex flex-col space-y-7 mt-10 mx-auto w-3/5 h-screen items-center'>
                <h2 className='text-3xl'>About Us</h2>
                <div>
                    <p className='text-lg'>This is a text utility app which can be used to convert your text into different formats.</p>
                    <p className='text-lg'>You can perform various operations such as converting text to uppercase, lowercase, title case, and more.</p>
                    <p className='text-lg'>The app also provides features like removing extra spaces, counting characters, and generating Lorem Ipsum text.</p>
                    <p className='text-lg'>Whether you need to format your text for a document, website, or any other purpose, this app has got you covered!</p>
                </div>
                <div className={`${bgColor} p-4 rounded-lg`}>
                    <h3 className='text-2xl mb-2'>Key Features:</h3>
                    <ul className='list-disc list-inside'>
                        <li className='text-lg'>Text conversion to uppercase, lowercase, title case, and more</li>
                        <li className='text-lg'>Removal of extra spaces</li>
                        <li className='text-lg'>Character count</li>
                        <li className='text-lg'>Conversion to Spanish</li>
                    </ul>   
                </div>
            </div>
        </>
    )
}

About.propTypes = {
    mode: PropTypes.string.isRequired,
}

About.defaultProps = {
    mode: "light",
}

export default About