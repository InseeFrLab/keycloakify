import type { PageId } from "../../bin/build-keycloak-theme/generateFtl";
import type { KcLanguageTag } from "../i18n/KcLanguageTag";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import type { MessageKey } from "../i18n/useKcMessage";
import type { LanguageLabel } from "../i18n/KcLanguageTag";

type ExtractAfterStartingWith<Prefix extends string, StrEnum> = StrEnum extends `${Prefix}${infer U}` ? U : never;

/** Take theses type definition with a grain of salt.
 * Some values might be undefined on some pages.
 * (ex: url.loginAction is undefined on error.ftl)
 */
export type KcContextBase =
    | KcContextBase.Login
    | KcContextBase.Register
    | KcContextBase.RegisterUserProfile
    | KcContextBase.Info
    | KcContextBase.Error
    | KcContextBase.LoginResetPassword
    | KcContextBase.LoginVerifyEmail
    | KcContextBase.Terms
    | KcContextBase.LoginOtp
    | KcContextBase.LoginUpdateProfile
    | KcContextBase.LoginIdpLinkConfirm
    | KcContextBase.LoginConfigTotp
    | KcContextBase.SamlPostForm;
// | KcContextBase.Code
// | KcContextBase.DeleteAccountConfirm
// | KcContextBase.IdpReviewUserProfile
// | KcContextBase.LoginConfigTotpText
// | KcContextBase.LoginIdpLinkEmail
// | KcContextBase.LoginOauth2DeviceVerifyUserCode
// | KcContextBase.LoginOauthGrant
// | KcContextBase.LoginPageExpired
// | KcContextBase.LoginPassword
// | KcContextBase.LoginUpdatePassword
// | KcContextBase.LoginUsername
// | KcContextBase.LoginVerifyEmailCodeText
// | KcContextBase.LoginX509Info
// | KcContextBase.SelectAuthenticator
// | KcContextBase.UpdateUserProfile
// | KcContextBase.WebauthnAuthenticate
// | KcContextBase.WebauthnError
// | KcContextBase.WebauthnRegister;

type PolicyTotp = { type: "totp"; period: number };
type PolicyHotp = { type: "hotp"; initialCounter: number };
export declare namespace KcContextBase {
    export type Common = {
        url: {
            loginAction: string;
            resourcesPath: string;
            resourcesCommonPath: string;
            loginRestartFlowUrl: string;
            loginUrl: string;
        };
        realm: {
            displayName?: string;
            displayNameHtml?: string;
            internationalizationEnabled: boolean;
            registrationEmailAsUsername: boolean;
        };
        /** Undefined if !realm.internationalizationEnabled */
        locale?: {
            supported: {
                url: string;
                languageTag: KcLanguageTag;
                /** Is determined by languageTag. Ex: languageTag === "en" => label === "English"
                 * or getLanguageLabel(languageTag) === label
                 */
                //label: LanguageLabel;
            }[];
            current: LanguageLabel;
        };
        auth?: {
            showUsername: boolean;
            showResetCredentials: boolean;
            showTryAnotherWayLink: boolean;
            attemptedUsername?: string;
        };
        scripts: string[];
        message?: {
            type: "success" | "warning" | "error" | "info";
            summary: string;
        };
        client: {
            clientId: string;
            name?: string;
            description?: string;
        };
        isAppInitiatedAction: boolean;
        messagesPerField: {
            printIfExists: <T>(fieldName: string, x: T) => T | undefined;
            existsError: (fieldName: string) => boolean;
            get: (fieldName: string) => string;
            exists: (fieldName: string) => boolean;
        };
    };

    export type Login = Common & {
        pageId: "login.ftl";
        url: {
            loginResetCredentialsUrl: string;
            registrationUrl: string;
        };
        realm: {
            loginWithEmailAllowed: boolean;
            rememberMe: boolean;
            password: boolean;
            resetPasswordAllowed: boolean;
            registrationAllowed: boolean;
        };
        auth: {
            selectedCredential?: string;
        };
        registrationDisabled: boolean;
        login: {
            username?: string;
            rememberMe?: boolean;
        };
        usernameEditDisabled: boolean;
        social: {
            displayInfo: boolean;
            providers?: {
                loginUrl: string;
                alias: string;
                providerId: string;
                displayName: string;
            }[];
        };
    };

    export type RegisterCommon = Common & {
        url: {
            registrationAction: string;
        };
        passwordRequired: boolean;
        recaptchaRequired: boolean;
        recaptchaSiteKey?: string;
        social: {
            displayInfo: boolean;
            providers?: {
                loginUrl: string;
                alias: string;
                providerId: string;
                displayName: string;
            }[];
        };
    };

    export type Register = RegisterCommon & {
        pageId: "register.ftl";
        register: {
            formData: {
                firstName?: string;
                displayName?: string;
                lastName?: string;
                email?: string;
                username?: string;
            };
        };
    };

    export type RegisterUserProfile = RegisterCommon & {
        pageId: "register-user-profile.ftl";
        profile: {
            context: "REGISTRATION_PROFILE";
            attributes: Attribute[];
            attributesByName: Record<string, Attribute>;
        };
    };

    export type Info = Common & {
        pageId: "info.ftl";
        messageHeader?: string;
        requiredActions?: ExtractAfterStartingWith<"requiredAction.", MessageKey>[];
        skipLink: boolean;
        pageRedirectUri?: string;
        actionUri?: string;
        client: {
            baseUrl?: string;
        };
    };

    export type Error = Common & {
        pageId: "error.ftl";
        client?: {
            baseUrl?: string;
        };
        message: NonNullable<Common["message"]>;
    };

    export type LoginResetPassword = Common & {
        pageId: "login-reset-password.ftl";
        realm: {
            loginWithEmailAllowed: boolean;
        };
    };

    export type LoginVerifyEmail = Common & {
        pageId: "login-verify-email.ftl";
    };

    export type Terms = Common & {
        pageId: "terms.ftl";
    };

    export type LoginOtp = Common & {
        pageId: "login-otp.ftl";
        otpLogin: {
            userOtpCredentials: { id: string; userLabel: string }[];
        };
    };

    export type LoginUpdateProfile = Common & {
        pageId: "login-update-profile.ftl";
        user: {
            editUsernameAllowed: boolean;
            username?: string;
            email?: string;
            firstName?: string;
            lastName?: string;
        };
    };

    export type LoginIdpLinkConfirm = Common & {
        pageId: "login-idp-link-confirm.ftl";
        idpAlias: string;
    };

    export type LoginConfigTotp = Common & {
        pageId: "login-config-totp.ftl";
        totp: {
            policy: {
                supportedApplications: string[];
                getAlgorithmKey(): string;
                digits: number;
            } & (PolicyTotp | PolicyHotp);
            totpSecretEncoded: string;
            qrUrl: string;
            manualUrl: string;
            totpSecretQrCode?: string;
            otpCredentials: Record<string, unknown>[];
            totpSecret: string;
        };
        mode?: "manual";
        isAppInitiatedAction: boolean;
    };

    export type SamlPostForm = Common & {
        pageId: "saml-post-form.ftl";
        samlPost: {
            url: string;
            SAMLRequest?: string;
            SAMLResponse?: string;
            relayState?: string;
        };
    };

    export type Code = Common & {
        pageId: "code.ftl";
    };

    export type DeleteAccountConfirm = Common & {
        pageId: "delete-account-confirm.ftl";
    };

    export type IdpReviewUserProfile = Common & {
        pageId: "idp-review-user-profile.ftl";
    };

    export type LoginConfigTotpText = Common & {
        pageId: "login-config-totp-text.ftl";
    };

    export type LoginIdpLinkEmail = Common & {
        pageId: "login-idp-link-email.ftl";
    };

    export type LoginOauth2DeviceVerifyUserCode = Common & {
        pageId: "login-oauth2-device-verify-user-code.ftl";
    };

    export type LoginOauthGrant = Common & {
        pageId: "login-oauth-grant.ftl";
    };

    export type LoginPageExpired = Common & {
        pageId: "login-page-expired.ftl";
    };

    export type LoginPassword = Common & {
        pageId: "login-password.ftl";
    };

    export type LoginUpdatePassword = Common & {
        pageId: "login-update-password.ftl";
    };

    export type LoginUsername = Common & {
        pageId: "login-username.ftl";
    };

    export type LoginVerifyEmailCodeText = Common & {
        pageId: "login-verify-email-code-text.ftl";
    };

    export type LoginX509Info = Common & {
        pageId: "login-x509-info.ftl";
    };

    export type SelectAuthenticator = Common & {
        pageId: "select-authenticator.ftl";
    };

    export type UpdateUserProfile = Common & {
        pageId: "update-user-profile.ftl";
    };

    export type WebauthnAuthenticate = Common & {
        pageId: "webauthn-authenticate.ftl";
    };

    export type WebauthnError = Common & {
        pageId: "webauthn-error.ftl";
    };

    export type WebauthnRegister = Common & {
        pageId: "webauthn-register.ftl";
    };
}

export type Attribute = {
    name: string;
    displayName?: string;
    required: boolean;
    value?: string;
    group?: string;
    groupDisplayHeader?: string;
    groupDisplayDescription?: string;
    readOnly: boolean;
    validators: Validators;
    annotations: Record<string, string>;
    groupAnnotations: Record<string, string>;
    autocomplete?:
        | "on"
        | "off"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "address-line1"
        | "address-line2"
        | "address-line3"
        | "address-level4"
        | "address-level3"
        | "address-level2"
        | "address-level1"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
};

export type Validators = Partial<{
    length: Validators.DoIgnoreEmpty & Validators.Range;
    double: Validators.DoIgnoreEmpty & Validators.Range;
    integer: Validators.DoIgnoreEmpty & Validators.Range;
    email: Validators.DoIgnoreEmpty;
    "up-immutable-attribute": {};
    "up-attribute-required-by-metadata-value": {};
    "up-username-has-value": {};
    "up-duplicate-username": {};
    "up-username-mutation": {};
    "up-email-exists-as-username": {};
    "up-blank-attribute-value": Validators.ErrorMessage & {
        "fail-on-null": boolean;
    };
    "up-duplicate-email": {};
    "local-date": Validators.DoIgnoreEmpty;
    pattern: Validators.DoIgnoreEmpty & Validators.ErrorMessage & { pattern: string };
    "person-name-prohibited-characters": Validators.DoIgnoreEmpty & Validators.ErrorMessage;
    uri: Validators.DoIgnoreEmpty;
    "username-prohibited-characters": Validators.DoIgnoreEmpty & Validators.ErrorMessage;
    /** Made up validator that only exists in Keycloakify */
    _compareToOther: Validators.DoIgnoreEmpty &
        Validators.ErrorMessage & {
            name: string;
            shouldBe: "equal" | "different";
        };
}>;

export declare namespace Validators {
    export type DoIgnoreEmpty = {
        "ignore.empty.value"?: boolean;
    };

    export type ErrorMessage = {
        "error-message"?: string;
    };

    export type Range = {
        /** "0", "1", "2"... yeah I know, don't tell me */
        min?: `${number}`;
        max?: `${number}`;
    };
}

assert<Equals<KcContextBase["pageId"], PageId>>();
