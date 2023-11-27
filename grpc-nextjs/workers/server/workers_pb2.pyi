from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateWorkerRequest(_message.Message):
    __slots__ = ["name", "email", "phone_number", "department", "job_title"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPARTMENT_FIELD_NUMBER: _ClassVar[int]
    JOB_TITLE_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    phone_number: str
    department: str
    job_title: str
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., phone_number: _Optional[str] = ..., department: _Optional[str] = ..., job_title: _Optional[str] = ...) -> None: ...

class CreateWorkerResponse(_message.Message):
    __slots__ = ["id", "message"]
    ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    message: str
    def __init__(self, id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class GetWorkerRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetWorkerResponse(_message.Message):
    __slots__ = ["id", "name", "email", "phone_number", "department", "job_title"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPARTMENT_FIELD_NUMBER: _ClassVar[int]
    JOB_TITLE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    email: str
    phone_number: str
    department: str
    job_title: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., phone_number: _Optional[str] = ..., department: _Optional[str] = ..., job_title: _Optional[str] = ...) -> None: ...

class UpdateWorkerRequest(_message.Message):
    __slots__ = ["id", "name", "email", "phone_number", "department", "job_title"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPARTMENT_FIELD_NUMBER: _ClassVar[int]
    JOB_TITLE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    email: str
    phone_number: str
    department: str
    job_title: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., phone_number: _Optional[str] = ..., department: _Optional[str] = ..., job_title: _Optional[str] = ...) -> None: ...

class UpdateWorkerResponse(_message.Message):
    __slots__ = ["id", "message"]
    ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    message: str
    def __init__(self, id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class DeleteWorkerRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class DeleteWorkerResponse(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class ListWorkersRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListWorkersResponse(_message.Message):
    __slots__ = ["workers"]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    workers: _containers.RepeatedCompositeFieldContainer[Worker]
    def __init__(self, workers: _Optional[_Iterable[_Union[Worker, _Mapping]]] = ...) -> None: ...

class Worker(_message.Message):
    __slots__ = ["id", "name", "email", "phone_number", "department", "job_title"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPARTMENT_FIELD_NUMBER: _ClassVar[int]
    JOB_TITLE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    email: str
    phone_number: str
    department: str
    job_title: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., phone_number: _Optional[str] = ..., department: _Optional[str] = ..., job_title: _Optional[str] = ...) -> None: ...
