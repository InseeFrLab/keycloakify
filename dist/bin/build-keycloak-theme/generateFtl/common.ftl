<script>const _= 
<#macro objectToJson_please_ignore_errors object depth arr>
    <@compress>

        <#local isHash = false>
        <#attempt>
            <#local isHash = object?is_hash || object?is_hash_ex>
        <#recover>
            /* can't evaluate if object is hash */
            undefined
            <#return>
        </#attempt>
        <#if isHash>

            <#local keys = "">

            <#attempt>
                <#local keys = object?keys>
            <#recover>
                /* can't list keys of object */
                undefined
                <#return>
            </#attempt>

            <#if arr?sequence?size gte 1>
                <#local keys = arr>
            </#if>

            {${'\n'}

            <#list keys as key>

                <#if key == "class">
                    /* skipping "class" property of object */
                    <#continue>
                </#if>

                <#attempt>
                    <#local value = object[key]!"error_data_is_undefined">
                <#recover>
                    /* couldn't dereference ${key} of object */
                    <#continue>
                </#attempt>

                <#if depth gt 7>
                    /* Avoid calling recustively too many times depth: ${depth}, key: ${key} */
                    <#continue>
                </#if>

                <#local arr_keys = []>
                <#if depth==0 && key=="url" >
                    <#local arr_keys = ["loginAction", "resourcesPath", "resourcesCommonPath", "loginRestartFlowUrl", "loginUrl", "loginResetCredentialsUrl", "registrationUrl", "registrationAction", "oauth2DeviceVerificationAction", "oauthAction", "loginResetCredentialsUrl"]>
                </#if>

                "${key}": <@objectToJson_please_ignore_errors object=value depth=depth+1 arr=arr_keys />,

            </#list>

            }${'\n'}

            <#return>

        </#if>


        <#local isMethod = "">
        <#attempt>
            <#local isMethod = object?is_method>
        <#recover>
            /* can't test if object is a method */
            undefined
            <#return>
        </#attempt>

        <#if isMethod>
            undefined
            <#return>
        </#if>



        <#local isBoolean = "">
        <#attempt>
            <#local isBoolean = object?is_boolean>
        <#recover>
            /* can't test if object is a boolean */
            undefined
            <#return>
        </#attempt>

        <#if isBoolean>
            ${object?c}
            <#return>
        </#if>


        <#local isEnumerable = "">
        <#attempt>
            <#local isEnumerable = object?is_enumerable>
        <#recover>
            /* can't test if object is enumerable */
            undefined
            <#return>
        </#attempt>

        <#if isEnumerable>

            [${'\n'}

            <#list object as item>

                <@objectToJson_please_ignore_errors object=item depth=depth+1 arr=[]/>,

            </#list>

            ]${'\n'}

            <#return>
        </#if>


        <#attempt>
            "${object?replace('"', '\\"')}"
        <#recover>
            /* couldn't convert into string non hash, non method, non boolean, non enumerable object */
            undefined;
            <#return>
        </#attempt>


    </@compress>
</#macro>

(()=>{

    const nonAutomaticallyConvertible = { 
        "messagesPerField": {

            <#assign fieldNames = ["global", "userLabel", "username", "email", "firstName", "lastName", "password", "password-confirm", "totp", "totpSecret", "SAMLRequest", "SAMLResponse", "relayState", "device_user_code", "code", "password-new", "rememberMe", "login", "authenticationExecution", "cancel-aia", "clientDataJSON", "authenticatorData", "signature", "credentialId", "userHandle", "error", "authn_use_chk", "authenticationExecution", "isSetRetry", "try-again", "attestationObject", "publicKeyCredentialId", "authenticatorLabel"]>

            <#assign attributes = (profile.attributes)![]>
            <#attempt>
                <#list attributes as attribute>
                    <#if (attribute.name)??>
                        <#assign fieldNames += [attribute.name]>
                    </#if>
                </#list>
            <#recover>
            </#attempt>

            "printIfExists": function (fieldName, x) {
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return "${messagesPerField.printIfExists(fieldName,'1')}" ? x : undefined;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            },
            "existsError": function (fieldName) {
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return <#if messagesPerField.existsError('${fieldName}')>true<#else>false</#if>;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            },
            "get": function (fieldName) {
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            <#if messagesPerField.existsError('${fieldName}')>
                                return "${messagesPerField.get('${fieldName}')?no_esc}";
                            </#if>
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            },
            "exists": function (fieldName) {
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return <#if messagesPerField.exists('${fieldName}')>true<#else>false</#if>;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            }
        },
        "msg": function(){ throw new Error("use import { useKcMessage } from 'keycloakify'"); },
        "advancedMsg": function(){ throw new Error("use import { useKcMessage } from 'keycloakify'"); }
    };

    const out = {};

    Object.deepAssign(
        out,
        //Removing all the undefined
        JSON.parse(JSON.stringify(<@objectToJson_please_ignore_errors object=.data_model depth=0 arr=[] />), (key, value) => value === "error_data_is_undefined" ? undefined : value.replaceAll('&amp;', '&'))
    );

    Object.deepAssign(
        out,
        nonAutomaticallyConvertible
    );

    return out;

})()
</script>