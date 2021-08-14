from flud.exceptions import FludError
from flud.exceptions.error_codes import *


class BadRequest(FludError):
	def __init__(self, request, error_code=ErrorCodes.Validation.BadRequest, args=None, msg=None):
		if msg is None:
			super(BadRequest, self).__init__(status=400, uri=request.path, msg=error_code[1].format(args) if args else error_code[1], code=error_code[0], method=request.method)
		else:
			super(BadRequest, self).__init__(status=400, uri=request.path, msg=msg, code=error_code[0], method=request.method)
