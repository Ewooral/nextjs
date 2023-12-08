from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Role(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ADMIN: _ClassVar[Role]
    SUPERVISOR: _ClassVar[Role]
    USER: _ClassVar[Role]
ADMIN: Role
SUPERVISOR: Role
USER: Role

class User(_message.Message):
    __slots__ = ["id", "username", "password", "email", "role"]
    ID_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    id: str
    username: str
    password: str
    email: str
    role: Role
    def __init__(self, id: _Optional[str] = ..., username: _Optional[str] = ..., password: _Optional[str] = ..., email: _Optional[str] = ..., role: _Optional[_Union[Role, str]] = ...) -> None: ...

class RegisterRequest(_message.Message):
    __slots__ = ["username", "password", "email", "role"]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    username: str
    password: str
    email: str
    role: Role
    def __init__(self, username: _Optional[str] = ..., password: _Optional[str] = ..., email: _Optional[str] = ..., role: _Optional[_Union[Role, str]] = ...) -> None: ...

class RegisterResponse(_message.Message):
    __slots__ = ["user"]
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ["email", "password"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    password: str
    def __init__(self, email: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class LoginResponse(_message.Message):
    __slots__ = ["success", "token", "role", "user"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    success: bool
    token: str
    role: Role
    user: User
    def __init__(self, success: bool = ..., token: _Optional[str] = ..., role: _Optional[_Union[Role, str]] = ..., user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class OTPRequest(_message.Message):
    __slots__ = ["email"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: str
    def __init__(self, email: _Optional[str] = ...) -> None: ...

class OTPResponse(_message.Message):
    __slots__ = ["otp", "expires_at"]
    OTP_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    otp: str
    expires_at: int
    def __init__(self, otp: _Optional[str] = ..., expires_at: _Optional[int] = ...) -> None: ...

class VerifyOTPRequest(_message.Message):
    __slots__ = ["email", "otp"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    OTP_FIELD_NUMBER: _ClassVar[int]
    email: str
    otp: str
    def __init__(self, email: _Optional[str] = ..., otp: _Optional[str] = ...) -> None: ...

class VerifyOTPResponse(_message.Message):
    __slots__ = ["valid"]
    VALID_FIELD_NUMBER: _ClassVar[int]
    valid: bool
    def __init__(self, valid: bool = ...) -> None: ...

class ResetPasswordRequest(_message.Message):
    __slots__ = ["email", "new_password"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    NEW_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    new_password: str
    def __init__(self, email: _Optional[str] = ..., new_password: _Optional[str] = ...) -> None: ...

class ResetPasswordResponse(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class CRUDRequest(_message.Message):
    __slots__ = ["user_id"]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    def __init__(self, user_id: _Optional[str] = ...) -> None: ...

class CRUDResponse(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class AdminRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class AdminResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateAdminUserRequest(_message.Message):
    __slots__ = ["email", "password"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    password: str
    def __init__(self, email: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class CreateAdminUserResponse(_message.Message):
    __slots__ = ["admin_user"]
    ADMIN_USER_FIELD_NUMBER: _ClassVar[int]
    admin_user: User
    def __init__(self, admin_user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class UpdateUserRoleRequest(_message.Message):
    __slots__ = ["user_id", "new_role"]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    NEW_ROLE_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    new_role: Role
    def __init__(self, user_id: _Optional[str] = ..., new_role: _Optional[_Union[Role, str]] = ...) -> None: ...

class UpdateUserRoleResponse(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class BanUserRequest(_message.Message):
    __slots__ = ["user_id"]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    def __init__(self, user_id: _Optional[str] = ...) -> None: ...

class BanUserResponse(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class ViewUserActivityLogRequest(_message.Message):
    __slots__ = ["user_id"]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    def __init__(self, user_id: _Optional[str] = ...) -> None: ...

class ViewUserActivityLogResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GenerateReportsRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GenerateReportsResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ConfigureSystemSettingsRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ConfigureSystemSettingsResponse(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...
