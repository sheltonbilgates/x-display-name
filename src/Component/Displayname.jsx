import React, { useState } from "react";

const Displayname = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [firstlast, setFirstLast] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(""); // Add state for error handling

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!first.trim() || !last.trim()) {
            setError("Please enter both first and last names.");
            return;
        }

        // Validate inputs for special characters or other requirements

        const flname = `${first} ${last}`;
        setFirstLast(flname);
        setSubmit(true);
        setError(""); // Reset error state on successful submission
    };

    return (
        <div className="font-serif p-5">
            <h1 className="font-bold text-5xl">Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <br />
                <label>
                    First Name:{" "}
                    <input
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        className="outline"
                        type="text"
                        required
                    />
                </label>
                <br />
                <br />
                <label>
                    Last Name:{" "}
                    <input
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        className="outline"
                        type="text"
                        required
                    />
                </label>
                <br />
                <br />
                <button type="submit" className="outline ml-8 w-20">
                    Submit
                </button>
            </form>
            <br />
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            {submit ? <p>Full Name: <span>{firstlast}</span></p> : null}
        </div>
    );
};

export default Displayname;
