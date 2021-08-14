class ErrorCodes(object):
	"""
		A set of constants representing errors.  Error messages can change, but the codes will not.
		See the source for a list of all errors codes.
		Codes can be used to check for specific errors.
	"""
	class Validation(object):
		UserAlreadyExists = (1000, "User with `{0}` email id already exists!")

		MethodNotAllowed = (1000, "Incoming request is not allowed")
		BadRequest = (1001, "Bad Request")
		UserPasswordMisMatch = (1002, "User/Password not recognized")
		UserNotAuthorized = (1003, "You are not authorized to access this resource, create an account and contact resource's owner for permission to access this resource.")
		UserNotAuthenticated = (1004, "User authentication failed")

		# Graphs API
		GraphIDMissing = (1008, "Graph ID is missing.")