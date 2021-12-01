import "minimal-polyfills/Object.fromEntries";
import type { KcContextBase, Attribute } from "../KcContextBase";
import { getEvtKcLanguage } from "../../i18n/useKcLanguageTag";
import { getKcLanguageTagLabel } from "../../i18n/KcLanguageTag";
//NOTE: Aside because we want to be able to import them from node
import { resourcesCommonPath, resourcesPath } from "./urlResourcesPath";
import { id } from "tsafe/id";
import { join as pathJoin } from "path";

const PUBLIC_URL = process.env["PUBLIC_URL"] ?? "/";

export const kcContextCommonMock: KcContextBase.Common = {
    "url": {
        "loginAction": "#",
        "resourcesPath": pathJoin(PUBLIC_URL, resourcesPath),
        "resourcesCommonPath": pathJoin(PUBLIC_URL, resourcesCommonPath),
        "loginRestartFlowUrl": "/auth/realms/myrealm/login-actions/restart?client_id=account&tab_id=HoAx28ja4xg",
        "loginUrl": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg",
    },
    "realm": {
        "displayName": "myrealm",
        "displayNameHtml": "myrealm",
        "internationalizationEnabled": true,
        "registrationEmailAsUsername": false,
    },
    "messagesPerField": {
        "printIfExists": (...[, x]) => x,
        "existsError": () => true,
        "get": key => `Fake error for ${key}`,
        "exists": () => true,
    },
    "locale": {
        "supported": [
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=de",
                "languageTag": "de",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=no",
                "languageTag": "no",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ru",
                "languageTag": "ru",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=sv",
                "languageTag": "sv",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=pt-BR",
                "languageTag": "pt-BR",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=lt",
                "languageTag": "lt",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=en",
                "languageTag": "en",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=it",
                "languageTag": "it",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=fr",
                "languageTag": "fr",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=zh-CN",
                "languageTag": "zh-CN",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=es",
                "languageTag": "es",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=cs",
                "languageTag": "cs",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ja",
                "languageTag": "ja",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=sk",
                "languageTag": "sk",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=pl",
                "languageTag": "pl",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ca",
                "languageTag": "ca",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=nl",
                "languageTag": "nl",
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=tr",
                "languageTag": "tr",
            },
        ],
        //"current": null as any
        "current": "English",
    },
    "auth": {
        "showUsername": false,
        "showResetCredentials": false,
        "showTryAnotherWayLink": false,
    },
    "client": {
        "clientId": "myApp",
    },
    "scripts": [],
    "message": {
        "type": "success",
        "summary": "This is a test message",
    },
    "isAppInitiatedAction": false,
};

Object.defineProperty(kcContextCommonMock.locale!, "current", {
    "get": () => getKcLanguageTagLabel(getEvtKcLanguage().state),
    "enumerable": true,
});

const loginUrl = {
    ...kcContextCommonMock.url,
    "loginResetCredentialsUrl": "/auth/realms/myrealm/login-actions/reset-credentials?client_id=account&tab_id=HoAx28ja4xg",
    "registrationUrl": "/auth/realms/myrealm/login-actions/registration?client_id=account&tab_id=HoAx28ja4xg",
};

export const kcContextMocks: KcContextBase[] = [
    id<KcContextBase.Login>({
        ...kcContextCommonMock,
        "pageId": "login.ftl",
        "url": loginUrl,
        "realm": {
            ...kcContextCommonMock.realm,
            "loginWithEmailAllowed": true,
            "rememberMe": true,
            "password": true,
            "resetPasswordAllowed": true,
            "registrationAllowed": true,
        },
        "auth": kcContextCommonMock.auth!,
        "social": {
            "displayInfo": true,
        },
        "usernameEditDisabled": false,
        "login": {
            "rememberMe": false,
        },
        "registrationDisabled": false,
    }),
    ...(() => {
        const registerCommon: KcContextBase.RegisterCommon = {
            ...kcContextCommonMock,
            "url": {
                ...loginUrl,
                "registrationAction":
                    "http://localhost:8080/auth/realms/myrealm/login-actions/registration?session_code=gwZdUeO7pbYpFTRxiIxRg_QtzMbtFTKrNu6XW_f8asM&execution=12146ce0-b139-4bbd-b25b-0eccfee6577e&client_id=account&tab_id=uS8lYfebLa0",
            },
            "scripts": [],
            "isAppInitiatedAction": false,
            "passwordRequired": true,
            "recaptchaRequired": false,
            "social": {
                "displayInfo": true,
            },
        };

        return [
            id<KcContextBase.Register>({
                "pageId": "register.ftl",
                ...registerCommon,
                "register": {
                    "formData": {},
                },
            }),
            id<KcContextBase.RegisterUserProfile>({
                "pageId": "register-user-profile.ftl",
                ...registerCommon,
                "profile": {
                    "context": "REGISTRATION_PROFILE" as const,
                    ...(() => {
                        const attributes: Attribute[] = [
                            {
                                "validators": {
                                    "username-prohibited-characters": {
                                        "ignore.empty.value": true,
                                    },
                                    "up-username-has-value": {},
                                    "length": {
                                        "ignore.empty.value": true,
                                        "min": "3",
                                        "max": "255",
                                    },
                                    "up-duplicate-username": {},
                                    "up-username-mutation": {},
                                },
                                "displayName": "${username}",
                                "annotations": {},
                                "required": true,
                                "groupAnnotations": {},
                                "autocomplete": "username",
                                "readOnly": false,
                                "name": "username",
                                "value": "xxxx",
                            },
                            {
                                "validators": {
                                    "up-email-exists-as-username": {},
                                    "length": {
                                        "max": "255",
                                        "ignore.empty.value": true,
                                    },
                                    "up-blank-attribute-value": {
                                        "error-message": "missingEmailMessage",
                                        "fail-on-null": false,
                                    },
                                    "up-duplicate-email": {},
                                    "email": {
                                        "ignore.empty.value": true,
                                    },
                                    "pattern": {
                                        "ignore.empty.value": true,
                                        "pattern": "gmail\\.com$",
                                    },
                                },
                                "displayName": "${email}",
                                "annotations": {},
                                "required": true,
                                "groupAnnotations": {},
                                "autocomplete": "email",
                                "readOnly": false,
                                "name": "email",
                            },
                            {
                                "validators": {
                                    "length": {
                                        "max": "255",
                                        "ignore.empty.value": true,
                                    },
                                    "person-name-prohibited-characters": {
                                        "ignore.empty.value": true,
                                    },
                                    "up-immutable-attribute": {},
                                    "up-attribute-required-by-metadata-value": {},
                                },
                                "displayName": "${firstName}",
                                "annotations": {},
                                "required": true,
                                "groupAnnotations": {},
                                "readOnly": false,
                                "name": "firstName",
                            },
                            {
                                "validators": {
                                    "length": {
                                        "max": "255",
                                        "ignore.empty.value": true,
                                    },
                                    "person-name-prohibited-characters": {
                                        "ignore.empty.value": true,
                                    },
                                    "up-immutable-attribute": {},
                                    "up-attribute-required-by-metadata-value": {},
                                },
                                "displayName": "${lastName}",
                                "annotations": {},
                                "required": true,
                                "groupAnnotations": {},
                                "readOnly": false,
                                "name": "lastName",
                            },
                        ];

                        return {
                            attributes,
                            "attributesByName": Object.fromEntries(attributes.map(attribute => [attribute.name, attribute])) as any,
                        } as any;
                    })(),
                },
            }),
        ];
    })(),
    id<KcContextBase.Info>({
        ...kcContextCommonMock,
        "pageId": "info.ftl",
        "messageHeader": "<Message header>",
        "requiredActions": undefined,
        "skipLink": false,
        "actionUri": "#",
        "client": {
            "clientId": "myApp",
            "baseUrl": "#",
        },
    }),
    id<KcContextBase.Error>({
        ...kcContextCommonMock,
        "pageId": "error.ftl",
        "client": {
            "clientId": "myApp",
            "baseUrl": "#",
        },
        "message": {
            "type": "error",
            "summary": "This is the error message",
        },
    }),
    id<KcContextBase.LoginResetPassword>({
        ...kcContextCommonMock,
        "pageId": "login-reset-password.ftl",
        "realm": {
            ...kcContextCommonMock.realm,
            "loginWithEmailAllowed": false,
        },
    }),
    id<KcContextBase.LoginVerifyEmail>({
        ...kcContextCommonMock,
        "pageId": "login-verify-email.ftl",
    }),
    id<KcContextBase.Terms>({
        ...kcContextCommonMock,
        "pageId": "terms.ftl",
    }),
    id<KcContextBase.LoginOtp>({
        ...kcContextCommonMock,
        "pageId": "login-otp.ftl",
        "otpLogin": {
            "userOtpCredentials": [
                {
                    "id": "id1",
                    "userLabel": "label1",
                },
                {
                    "id": "id2",
                    "userLabel": "label2",
                },
            ],
        },
    }),
    id<KcContextBase.LoginUpdateProfile>({
        ...kcContextCommonMock,
        "pageId": "login-update-profile.ftl",
        "user": {
            "editUsernameAllowed": true,
            "username": "anUsername",
            "email": "foo@example.com",
            "firstName": "aFirstName",
            "lastName": "aLastName",
        },
    }),
    id<KcContextBase.LoginIdpLinkConfirm>({
        ...kcContextCommonMock,
        "pageId": "login-idp-link-confirm.ftl",
        "idpAlias": "FranceConnect",
    }),
    id<KcContextBase.LoginConfigTotp>({
        ...kcContextCommonMock,
        pageId: "login-config-totp.ftl",
        totp: {
            policy: {
                supportedApplications: ["FreeOTP", "Google Authenticator"],
                type: "totp",
                getAlgorithmKey: () => "SHA1",
                digits: 6,
                period: 30,
            },
            totpSecretEncoded: "IVQW U5TV KZ3H CULV J5TF I4TM N5FE USKC",
            qrUrl: "qrUrl",
            manualUrl: "manualUrl",
            totpSecretQrCode:
                "iVBORw0KGgoAAAANSUhEUgAAAPYAAAD2AQAAAADNaUdlAAACl0lEQVR4Xu2YO46DQBBE2yIg5AjcxFwMCSQuZt+EIxASIPdW1fBfaZMNegJ3YMO8CXr6z5j/KYvdV67y5feVq3z5feUq5JOZPaZitAZPM17M3wCQLg/eub/xM3OTnsyqpRbIgrdWchUIOj+tG+dmamucKSdueqr9U/V1+bLcuA9O/9fzs1psfviSEZdpW6Le5P/y9Ts+Arnyp61Lbtp/7vkVx3ehkWfGp5AkBz4VbnC40b5QHavIHyTRfr5gDq21CVbF6rNyVErvcYZqPV88h/6OqmhW07TidbnFZzin0MgN6jf83zJcUcSfm/7hfEyhyf63IhVxz4PD6+XHmNXc+6qGEX+9oYgn+4ZzlMYHVWdA+sdgZJQjYxLlwZk1oP4iUv7gFZ3wOF8sR9Y8kDB0OIcw+b9w7syC+wCFK3LOX/L/W/3Z8+DwtUyLINX8gO1KoiM+grkZ84ebZGl0mob6H/YP5h2zukfpppGpupr0KX5jOYQFUV2ZLwM64bn+RHPadx0IYV/1l4b73if/h3JN/dJ64ElS/2OTXv0fzNn6bCuNPImxUysIsuDMb3QVGXTkSTAabpNiDhz6I7U5sCKh00kazv9b/YnmrNrUHwum0mMwra4bMuEKSKLUCdP8j79cOGYF50Ct+YtVEU9LunPIgUNQutWkB04NvXH+usz/0dw5sKr/pasFfp8c+R/MJ46GUJ0Bme63kER2yp9gLuGQLc75S6qjUnoWHPpzfk1FUv0F+p/8H8671IuRMAU/klvGJ+dDX/WP5rofREFkaKaPAMk+H+bA2aSbNEn0HHLYro/+nAsvWB/RbiBsgpnwjv7n/RGCNMUnTsImmAm31P+MH8npkouW3r8/o/lf8uX3lat8+X3lKv/mP4J1WzUXYydCAAAAAElFTkSuQmCC",
            otpCredentials: [{}],
            totpSecret: "CgST5CI4i2d9VdDUmv4H",
        },
        message: {
            summary: "Вам необходимо настроить аутентификатор в мобильном устройстве, чтобы активировать учетную запись.",
            type: "warning",
        },
        isAppInitiatedAction: true,
    }),
    id<KcContextBase.SamlPostForm>({
        ...kcContextCommonMock,
        pageId: "saml-post-form.ftl",
        samlPost: {
            url: "http://test",
            SAMLRequest: "123",
        },
    }),
];
