import React, {useCallback, useEffect, useState} from "react";
import {ClientPublicDataModel} from "../data/IBackendInterfaces.ts";
import {CLIENT_ID, DATA_URL, REDIRECT_URL} from "../data/VARIABLES.ts";

const generateRandomValues = (length: number): Uint8Array => {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
};

const generateState = (): string => {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const stateArray = generateRandomValues(40).map((x: number): number => validChars.codePointAt(x % validChars.length) as number);
    return String.fromCharCode.apply(null, [...stateArray]);
};

interface LoginObject {
    user: ClientPublicDataModel | undefined;
    setUser: React.Dispatch<React.SetStateAction<ClientPublicDataModel | null>>;
    uid: string | undefined;
    fetchUser: () => Promise<void>;
    loginURL: string | undefined;
}

function useLogin(): LoginObject {
    const [user, setUser] = useState<ClientPublicDataModel>();
    const [uid, setUid] = useState<string>();
    const [loginURL, setLoginURL] = useState<string>();
    const clientId = CLIENT_ID;
    const redirectUrl = encodeURIComponent(REDIRECT_URL as string);

    const buildDiscordLoginURL = useCallback(() => {
        return `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20email&state=${uid}`;
    }, [uid])

    const fetchUser = useCallback(async () => {
        console.log(`Fetching user data with uid ${uid}...`)
        const response = await fetch(`${DATA_URL}`, {
            method: 'GET',
            credentials: "include",
            headers: {'Authorization': `Bearer ${uid}`},
        });
        const data = await response.json();
        if (data.user) setUser(data.user);
    }, [uid])

    useEffect(() => {
        const localUid = localStorage.getItem('uid') ?? generateState();
        localStorage.setItem('uid', localUid);
        setUid(localUid);
        setLoginURL(buildDiscordLoginURL());
        fetchUser();
    }, [fetchUser, buildDiscordLoginURL]);

    return {user, setUser, uid, fetchUser, loginURL} as LoginObject;
}

export default useLogin;