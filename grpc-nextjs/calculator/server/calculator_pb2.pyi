from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class TotalRequest(_message.Message):
    __slots__ = ["num1", "num2"]
    NUM1_FIELD_NUMBER: _ClassVar[int]
    NUM2_FIELD_NUMBER: _ClassVar[int]
    num1: float
    num2: float
    def __init__(self, num1: _Optional[float] = ..., num2: _Optional[float] = ...) -> None: ...

class TotalResponse(_message.Message):
    __slots__ = ["total", "success"]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    total: float
    success: bool
    def __init__(self, total: _Optional[float] = ..., success: bool = ...) -> None: ...
