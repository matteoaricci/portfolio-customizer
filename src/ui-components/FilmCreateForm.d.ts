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
export declare type FilmCreateFormInputValues = {
    title?: string;
    description?: string;
    coverImagePath?: string;
    type?: string;
    videoUrl?: string;
};
export declare type FilmCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    coverImagePath?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilmCreateFormOverridesProps = {
    FilmCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    coverImagePath?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilmCreateFormProps = React.PropsWithChildren<{
    overrides?: FilmCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FilmCreateFormInputValues) => FilmCreateFormInputValues;
    onSuccess?: (fields: FilmCreateFormInputValues) => void;
    onError?: (fields: FilmCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FilmCreateFormInputValues) => FilmCreateFormInputValues;
    onValidate?: FilmCreateFormValidationValues;
} & React.CSSProperties>;
export default function FilmCreateForm(props: FilmCreateFormProps): React.ReactElement;
