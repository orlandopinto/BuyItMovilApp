export interface User {
     id: string
     userName?: string
     normalizedUserName?: string
     email: string
     normalizedEmail?: string
     emailConfirmed: boolean
     passwordHash: string
     phoneNumber?: string
     phoneNumberConfirmed: boolean
     twoFactorEnabled: boolean
     lockoutEnd?: Date
     lockoutEnabled: boolean
     accessFailedCount: number
     address?: string
     birthDate?: Date
     firstName?: string
     lastName?: string
     zipCode?: number
     isAdmin: boolean
     roleId?: string
}
