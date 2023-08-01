/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Film } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FilmUpdateFormInputValues = {
    title?: string;
    description?: string;
    coverImagePath?: string;
    type?: string;
    videoUrl?: string;
};
export declare type FilmUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    coverImagePath?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilmUpdateFormOverridesProps = {
    FilmUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    coverImagePath?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilmUpdateFormProps = React.PropsWithChildren<{
    overrides?: FilmUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    film?: Film;
    onSubmit?: (fields: FilmUpdateFormInputValues) => FilmUpdateFormInputValues;
    onSuccess?: (fields: FilmUpdateFormInputValues) => void;
    onError?: (fields: FilmUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FilmUpdateFormInputValues) => FilmUpdateFormInputValues;
    onValidate?: FilmUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FilmUpdateForm(props: FilmUpdateFormProps): React.ReactElement;
