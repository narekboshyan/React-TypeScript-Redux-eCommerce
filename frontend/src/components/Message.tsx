import { Alert } from "react-bootstrap";

import * as React from "react";

interface IMessageProps {
    variant: string;
}

const Message: React.FC<IMessageProps> = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
