import grpc
import importlib
import workers_pb2
import workers_pb2_grpc
from concurrent import futures

class ReflectionServicer(grpc.ServicerContext):

  def __init__(self):
    self.descriptors_by_name = {}
    for service_name, service_class in workers_pb2_grpc.__dict__.items():
      if service_name.endswith('Service'):
        for method_name, method_class in service_class.__dict__.items():
          if method_name.endswith('Request'):
            request_class = method_class
          elif method_name.endswith('Response'):
            response_class = method_class

            full_name = '{}.{}'.format(service_name, method_name)
            self.descriptors_by_name[full_name] = (request_class, response_class)

  def ServerReflection(self, request, context):
    if request.ListServices().has_list_services:
      services = []
      for name, descriptor in self.descriptors_by_name.items():
        services.append(grpc.reflection.v1alpha.ServiceDefinition(name=name))
      return grpc.reflection.v1alpha.ServerReflectionInfo(services=services)

    if request.ListMethods().has_list_methods:
      methods = []
      for name, descriptor in self.descriptors_by_name.items():
        request_class, response_class = descriptor
        methods.append(grpc.reflection.v1alpha.MethodDefinition(
          name=name,
          request_type=request_class.full_name,
          response_type=response_class.full_name
        ))
      return grpc.reflection.v1alpha.ServerReflectionInfo(file_descriptors=methods)

    if request.FileDescriptorRequest().has_file_descriptor_proto:
      file_descriptor_proto = request.FileDescriptorRequest().file_descriptor_proto
      try:
        descriptor = importlib.import_module('workers_pb2').descriptor_pb2.FileDescriptorProto()
        descriptor.ParseFromString(file_descriptor_proto)
        return grpc.reflection.v1alpha.ServerReflectionInfo(file_descriptors=[descriptor])
      except Exception:
        context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
        context.set_details('Invalid file descriptor proto')
        return grpc.reflection.v1alpha.ServerReflectionInfo()

    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented')
    return grpc.reflection.v1alpha.ServerReflectionInfo()

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
workers_pb2_grpc.add_ServerReflectionServicer_to_server(ReflectionServicer(), server)
server.add_insecure_port('[::]:50051')
server.start()
server.wait_for_termination()