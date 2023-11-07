import { z } from "zod";

export const zTxId = z.string().regex(/^[A-Za-z0-9_-]{43}$/);
