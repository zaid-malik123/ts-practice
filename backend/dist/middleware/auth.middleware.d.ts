import type { Response, NextFunction } from "express";
export declare const isAuthenticated: (req: any, _: any, next: NextFunction) => void;
export declare const authorizeRoles: (...roles: string[]) => (req: any, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map