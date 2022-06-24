import React, { MouseEventHandler } from 'react';

declare type ButtonType = {
    label: string;
    size?: "lg" | "md" | "sm";
    btnType?: "primary" | "secondary" | "ghost";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    rounded?: "soft" | "hard";
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    styles?: object;
};

declare const Button: React.FC<ButtonType>;

declare type LabelType = {
    text: string;
    type?: "message" | "error";
    className?: string;
    styles?: object;
};

declare const Label: React.FC<LabelType>;

export { Button, Label };
