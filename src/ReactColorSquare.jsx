import React from "react";

const ReactColorSquare = props => {
    const { width, height, color, text } = props;
    return (
        <div
            style={{
                width: width || 100,
                height: height || 100,
                backgroundColor: color || "blue"
            }}
        >
            {text}111
        </div>
    );
};

export default ReactColorSquare;
