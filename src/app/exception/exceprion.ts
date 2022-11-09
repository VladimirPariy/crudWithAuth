import {Response} from "express";

export const exception = (res: Response, e: Error | unknown, code: number) => {
	if (e instanceof Error) {
		return res.status(code).json(e.message);
	}
	return res.status(code).json(e)
}