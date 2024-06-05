import { clsx } from "keycloakify/tools/clsx";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function LoginConfigTotp(props: PageProps<Extract<KcContext, { pageId: "login-config-totp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { url, isAppInitiatedAction, totp, mode, messagesPerField } = kcContext;

    const { msg, msgStr, advancedMsg } = i18n;

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={msg("loginTotpTitle")}>
            <>
                <ol id="kc-totp-settings">
                    <li>
                        <p>{msg("loginTotpStep1")}</p>

                        <ul id="kc-totp-supported-apps">
                            {totp.supportedApplications.map(app => (
                                <li key={app}>{advancedMsg(app)}</li>
                            ))}
                        </ul>
                    </li>

                    {mode == "manual" ? (
                        <>
                            <li>
                                <p>{msg("loginTotpManualStep2")}</p>
                                <p>
                                    <span id="kc-totp-secret-key">{totp.totpSecretEncoded}</span>
                                </p>
                                <p>
                                    <a href={totp.qrUrl} id="mode-barcode">
                                        {msg("loginTotpScanBarcode")}
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>{msg("loginTotpManualStep3")}</p>
                                <p>
                                    <ul>
                                        <li id="kc-totp-type">
                                            {msg("loginTotpType")}: {msg(`loginTotp.${totp.policy.type}`)}
                                        </li>
                                        <li id="kc-totp-algorithm">
                                            {msg("loginTotpAlgorithm")}: {totp.policy.getAlgorithmKey()}
                                        </li>
                                        <li id="kc-totp-digits">
                                            {msg("loginTotpDigits")}: {totp.policy.digits}
                                        </li>
                                        {totp.policy.type === "totp" ? (
                                            <li id="kc-totp-period">
                                                {msg("loginTotpInterval")}: {totp.policy.period}
                                            </li>
                                        ) : (
                                            <li id="kc-totp-counter">
                                                {msg("loginTotpCounter")}: {totp.policy.initialCounter}
                                            </li>
                                        )}
                                    </ul>
                                </p>
                            </li>
                        </>
                    ) : (
                        <li>
                            <p>{msg("loginTotpStep2")}</p>
                            <img id="kc-totp-secret-qr-code" src={`data:image/png;base64, ${totp.totpSecretQrCode}`} alt="Figure: Barcode" />
                            <br />
                            <p>
                                <a href={totp.manualUrl} id="mode-manual">
                                    {msg("loginTotpUnableToScan")}
                                </a>
                            </p>
                        </li>
                    )}
                    <li>
                        <p>{msg("loginTotpStep3")}</p>
                        <p>{msg("loginTotpStep3DeviceName")}</p>
                    </li>
                </ol>

                <form action={url.loginAction} className={getClassName("kcFormClass")} id="kc-totp-settings-form" method="post">
                    <div className={getClassName("kcFormGroupClass")}>
                        <div className={getClassName("kcInputWrapperClass")}>
                            <label htmlFor="totp" className={getClassName("kcLabelClass")}>
                                {msg("authenticatorCode")}
                            </label>{" "}
                            <span className="required">*</span>
                        </div>
                        <div className={getClassName("kcInputWrapperClass")}>
                            <input
                                type="text"
                                id="totp"
                                name="totp"
                                autoComplete="off"
                                className={getClassName("kcInputClass")}
                                aria-invalid={messagesPerField.existsError("totp")}
                            />

                            {messagesPerField.existsError("totp") && (
                                <span id="input-error-otp-code" className={getClassName("kcInputErrorMessageClass")} aria-live="polite">
                                    {messagesPerField.get("totp")}
                                </span>
                            )}
                        </div>
                        <input type="hidden" id="totpSecret" name="totpSecret" value={totp.totpSecret} />
                        {mode && <input type="hidden" id="mode" value={mode} />}
                    </div>

                    <div className={getClassName("kcFormGroupClass")}>
                        <div className={getClassName("kcInputWrapperClass")}>
                            <label htmlFor="userLabel" className={getClassName("kcLabelClass")}>
                                {msg("loginTotpDeviceName")}
                            </label>{" "}
                            {totp.otpCredentials.length >= 1 && <span className="required">*</span>}
                        </div>
                        <div className={getClassName("kcInputWrapperClass")}>
                            <input
                                type="text"
                                id="userLabel"
                                name="userLabel"
                                autoComplete="off"
                                className={getClassName("kcInputClass")}
                                aria-invalid={messagesPerField.existsError("userLabel")}
                            />
                            {messagesPerField.existsError("userLabel") && (
                                <span id="input-error-otp-label" className={getClassName("kcInputErrorMessageClass")} aria-live="polite">
                                    {messagesPerField.get("userLabel")}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={getClassName("kcFormGroupClass")}>
                        <LogoutOtherSessions {...{ getClassName, i18n }} />
                    </div>

                    {isAppInitiatedAction ? (
                        <>
                            <input
                                type="submit"
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonPrimaryClass"),
                                    getClassName("kcButtonLargeClass")
                                )}
                                id="saveTOTPBtn"
                                value={msgStr("doSubmit")}
                            />
                            <button
                                type="submit"
                                className={clsx(
                                    getClassName("kcButtonClass"),
                                    getClassName("kcButtonDefaultClass"),
                                    getClassName("kcButtonLargeClass"),
                                    getClassName("kcButtonLargeClass")
                                )}
                                id="cancelTOTPBtn"
                                name="cancel-aia"
                                value="true"
                            >
                                {msg("doCancel")}
                            </button>
                        </>
                    ) : (
                        <input
                            type="submit"
                            className={clsx(getClassName("kcButtonClass"), getClassName("kcButtonPrimaryClass"), getClassName("kcButtonLargeClass"))}
                            id="saveTOTPBtn"
                            value={msgStr("doSubmit")}
                        />
                    )}
                </form>
            </>
        </Template>
    );
}

function LogoutOtherSessions(props: { getClassName: ReturnType<typeof useGetClassName>["getClassName"]; i18n: I18n }) {
    const { getClassName, i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options" className={getClassName("kcFormOptionsClass")}>
            <div className={getClassName("kcFormOptionsWrapperClass")}>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" id="logout-sessions" name="logout-sessions" value="on" defaultChecked={true} />
                        {msg("logoutOtherSessions")}
                    </label>
                </div>
            </div>
        </div>
    );
}
