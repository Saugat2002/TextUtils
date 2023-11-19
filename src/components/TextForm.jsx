import { useState } from "react";
import PropTypes from 'prop-types';

const TextForm = (props) => {
    let bgColor = props.mode === "light" ? "bg-gray-200" : "bg-gray-700";
    let btnBgColor = props.mode === "light" ? "bg-gray-200" : "bg-gray-700";
    let color = props.mode === "light" ? "text-black" : "text-white";

    const handleOnChange = (event) => {
        setOriginalText(event.target.value);
        setText(event.target.value);
    }

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalClick = () => {
        let newText = text.toLowerCase().replace(/(^\w|\. \w)/g, (match) => match.toUpperCase());
        setText(newText);
    }

    const handleSpanishClick = async () => {
        const response = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: 'auto',
                target: 'es',
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        setText(data.translatedText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleRevertClick = () => {
        setText(originalText);
    }

    const [text, setText] = useState("")
    const [originalText, setOriginalText] = useState("")

    let wordsArray = text.split(" ");
    let wordsArrayWithoutEmptyStrings = wordsArray.filter((element) => {
        return element.length !== 0;
    })
    let wordsCount = wordsArrayWithoutEmptyStrings.length;

    return (
        <>
            <div className="mt-7 mb-2 flex flex-col mx-auto w-3/5 justify-center space-y-7">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl">Enter Text To Transform Below</h2>
                    <textarea cols="50" rows="10" className={`border-[1px] border-gray-400 p-2 ${bgColor} ${color}`} value={text} onChange={handleOnChange}></textarea>
                    <div className="flex space-x-3">
                        <button className={`btn ${btnBgColor}`} onClick={handleUpperClick}>UpperCase</button>
                        <button className={`btn ${btnBgColor}`} onClick={handleLowerClick}>LowerCase</button>
                        <button className={`btn ${btnBgColor}`} onClick={handleCapitalClick}>Capitalize</button>
                        <button className={`btn ${btnBgColor}`} onClick={handleSpanishClick}>Español🇪🇸</button>
                        <button className={`btn ${btnBgColor}`} onClick={handleClearClick}>Clear</button>
                        <button className={`btn ${btnBgColor}`} onClick={handleRevertClick}>Revert</button>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl">Preview</h2>
                    <p className="border-[1px] border-gray-400 p-2">{text.length > 0 ? text : "Enter text above to preview here"}</p>
                </div>

                <div className="flex flex-col space-y-2">
                    <p>Words: {wordsCount}</p>
                    <p>Characters: {text.length}</p>
                    <p>Minutes to read: {(wordsCount * (1 / 125)).toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

TextForm.propTypes = {
    mode: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    mode: "light",
}

export default TextForm