import React from "react";

const Sresult = (props) => {
    const img = 'https://source.umsplash.com/600x300/?${props.name}';
    return (
        <>
            <div>
                <img src={img} alt="image" />
            </div>
        </>
    );
};

export default Sresult;