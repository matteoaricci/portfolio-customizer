/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BehindSceneShot } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BehindSceneShotUpdateFormInputValues = {
    imagePath?: string;
};
export declare type BehindSceneShotUpdateFormValidationValues = {
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BehindSceneShotUpdateFormOverridesProps = {
    BehindSceneShotUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BehindSceneShotUpdateFormProps = React.PropsWithChildren<{
    overrides?: BehindSceneShotUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    behindSceneShot?: BehindSceneShot;
    onSubmit?: (fields: BehindSceneShotUpdateFormInputValues) => BehindSceneShotUpdateFormInputValues;
    onSuccess?: (fields: BehindSceneShotUpdateFormInputValues) => void;
    onError?: (fields: BehindSceneShotUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BehindSceneShotUpdateFormInputValues) => BehindSceneShotUpdateFormInputValues;
    onValidate?: BehindSceneShotUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BehindSceneShotUpdateForm(props: BehindSceneShotUpdateFormProps): React.ReactElement;
