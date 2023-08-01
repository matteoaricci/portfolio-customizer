/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScreenshotCreateFormInputValues = {
    imagePath?: string;
};
export declare type ScreenshotCreateFormValidationValues = {
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScreenshotCreateFormOverridesProps = {
    ScreenshotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScreenshotCreateFormProps = React.PropsWithChildren<{
    overrides?: ScreenshotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScreenshotCreateFormInputValues) => ScreenshotCreateFormInputValues;
    onSuccess?: (fields: ScreenshotCreateFormInputValues) => void;
    onError?: (fields: ScreenshotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScreenshotCreateFormInputValues) => ScreenshotCreateFormInputValues;
    onValidate?: ScreenshotCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScreenshotCreateForm(props: ScreenshotCreateFormProps): React.ReactElement;
