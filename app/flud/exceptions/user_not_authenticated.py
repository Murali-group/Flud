from flud.exceptions import FludError
from flud.exceptions.error_codes import *


class UserNotAuthenticated(FludError):
	def __init__(self, request):
		super(UserNotAuthenticated, self).__init__(status=401, uri=request.path, msg=ErrorCodes.Validation.UserNotAuthenticated[1], code=ErrorCodes.Validation.UserNotAuthenticated[0], method=request.method)
