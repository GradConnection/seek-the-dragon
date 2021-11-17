import { useState } from 'react';

import Dragon from '../components/shared/Dragon';

const initialState = {
    companyName: '',
    isSubmitted: false,
};

export default function Congratulations() {
    const [state, setState] = useState(initialState);
    const { companyName, isSubmitted } = state;

    const onSubmit = event => {
        event.preventDefault();
        setState({ ...state, isSubmitted: true });
    };

    const onChange = event => {
        const { value } = event.target;
        setState({ ...state, companyName: value });
    };

    return (
        <div className="flex py-24 flex-col bg-blue-50 items-center h-screen">
            <h2 className="text-base font-bold text-4xl pb-6">
                🎉 Congrats on your new job! 🎉
            </h2>
            <p className="text-base ">
                You've earned it and it's great to see that your effort has finally paid
                off!
            </p>
            <Dragon level={12} />
            {isSubmitted ? (
                <div className="text-base font-bold pb-1">Thank you!</div>
            ) : (
                <form onSubmit={onSubmit} className="flex flex-col items-center">
                    <div className="text-base font-bold pb-1">
                        Which employer will you be working for?
                    </div>
                    <input
                        onChange={onChange}
                        placeholder="Amazing company"
                        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
                        type="text"
                        value={companyName}
                    />
                </form>
            )}
        </div>
    );
}
