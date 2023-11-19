import PropTypes from 'prop-types';

const Footer = (props) => {
    let bgColor = props.mode === "light" ? "bg-gray-200" : "bg-gray-700";
    return (
        <>
            <div className={`${bgColor} mt-5 py-4 text-center`}>
                CopyRight &copy; 2023 TextUtils
            </div>
        </>
    )
}

Footer.propTypes = {
    mode: PropTypes.string.isRequired,
}

Footer.defaultProps = {
    mode: "light",
}

export default Footer