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
export declare type BehindSceneShotCreateFormInputValues = {
    imagePath?: string;
};
export declare type BehindSceneShotCreateFormValidationValues = {
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BehindSceneShotCreateFormOverridesProps = {
    BehindSceneShotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BehindSceneShotCreateFormProps = React.PropsWithChildren<{
    overrides?: BehindSceneShotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BehindSceneShotCreateFormInputValues) => BehindSceneShotCreateFormInputValues;
    onSuccess?: (fields: BehindSceneShotCreateFormInputValues) => void;
    onError?: (fields: BehindSceneShotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BehindSceneShotCreateFormInputValues) => BehindSceneShotCreateFormInputValues;
    onValidate?: BehindSceneShotCreateFormValidationValues;
} & React.CSSProperties>;
export default function BehindSceneShotCreateForm(props: BehindSceneShotCreateFormProps): React.ReactElement;
