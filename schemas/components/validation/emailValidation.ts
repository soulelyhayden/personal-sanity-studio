import { CustomValidatorResult } from "@sanity/types"

export function emailValidation(emailField: string | undefined): CustomValidatorResult | Promise<CustomValidatorResult> {
	// Allow blank field requires requried validation
	if (typeof emailField === 'undefined') return true;

	const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (!email_regex.test(emailField)) {
		return 'Please enter a valid email address'
	}

	return true;
};