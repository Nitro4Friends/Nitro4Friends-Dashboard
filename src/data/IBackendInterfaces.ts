export interface ClientPublicDataModel {
    clientID: string;
    userName: string;  // Do we need this?
    avatarURL: string;
    avatarDecorationURL: string | null;
    inviteCode: string;
    joinDate: number;  // Umwandlung von Long zu number in TypeScript
    creditModifications: PublicCreditsModel[];
    inviteTimestamps: number[];  // Umwandlung von List<Long> zu number[] in TypeScript
    redeems: PublicRedeemModel[];
    totalCredits: number;  // Umwandlung von Long zu number in TypeScript
}

export interface PublicCreditsModel {
    amount: number;  // Umwandlung von Long zu number in TypeScript
    timestamp: number;  // Umwandlung von Long zu number in TypeScript
    reason: string;
}

export enum RedeemStatus {
    // Definiere die möglichen Zustände hier, zum Beispiel:
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

export interface PublicRedeemModel {
    redeemedDate: number;  // Umwandlung von Long zu number in TypeScript
    paidAmount: number;  // Umwandlung von Int zu number in TypeScript
    status: RedeemStatus;
    message: string | null;
}
