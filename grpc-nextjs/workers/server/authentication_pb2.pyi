from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class RegisterWorkerRequest(_message.Message):
    __slots__ = ["name", "email", "phone_number", "password"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    phone_number: str
    password: str
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., phone_number: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class RegisterWorkerResponse(_message.Message):
    __slots__ = ["id", "message"]
    ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    message: str
    def __init__(self, id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class LoginWorkerRequest(_message.Message):
    __slots__ = ["email", "password"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    password: str
    def __init__(self, email: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class LoginWorkerResponse(_message.Message):
    __slots__ = ["id", "message"]
    ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    message: str
    def __init__(self, id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class ForgotPasswordRequest(_message.Message):
    __slots__ = ["email"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: str
    def __init__(self, email: _Optional[str] = ...) -> None: ...

class ForgotPasswordResponse(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class VerifyOTPRequest(_message.Message):
    __slots__ = ["email", "otp_code"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    OTP_CODE_FIELD_NUMBER: _ClassVar[int]
    email: str
    otp_code: str
    def __init__(self, email: _Optional[str] = ..., otp_code: _Optional[str] = ...) -> None: ...

class VerifyOTPResponse(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class ResetPasswordRequest(_message.Message):
    __slots__ = ["email", "new_password"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    NEW_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    new_password: str
    def __init__(self, email: _Optional[str] = ..., new_password: _Optional[str] = ...) -> None: ...

class ResetPasswordResponse(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...
