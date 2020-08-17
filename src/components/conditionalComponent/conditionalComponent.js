import React from 'react';
const ConditionalComponent = ({ visible = true, children }) => {

    return visible ? <React.Fragment>{children}</React.Fragment> : null;
};

export default ConditionalComponent;