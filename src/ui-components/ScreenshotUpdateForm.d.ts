/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Screenshot } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScreenshotUpdateFormInputValues = {
    imagePath?: string;
};
export declare type ScreenshotUpdateFormValidationValues = {
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScreenshotUpdateFormOverridesProps = {
    ScreenshotUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScreenshotUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScreenshotUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    screenshot?: Screenshot;
    onSubmit?: (fields: ScreenshotUpdateFormInputValues) => ScreenshotUpdateFormInputValues;
    onSuccess?: (fields: ScreenshotUpdateFormInputValues) => void;
    onError?: (fields: ScreenshotUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScreenshotUpdateFormInputValues) => ScreenshotUpdateFormInputValues;
    onValidate?: ScreenshotUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScreenshotUpdateForm(props: ScreenshotUpdateFormProps): React.ReactElement;
