from concurrent import futures
import math
import grpc
import calculator_pb2
import calculator_pb2_grpc
from grpc_reflection.v1alpha import reflection


class Calculator(calculator_pb2_grpc.CalculatorServicer):
    def GetTotal(self, request, context):
        # Check if num1 and num2 are numbers
        if not isinstance(request.num1, (int, float)) or not isinstance(request.num2, (int, float)):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('num1 and num2 must be numbers')
            return calculator_pb2.TotalResponse()

        # Check if num1 or num2 is NaN or Infinity
        if math.isnan(request.num1) or math.isnan(request.num2) or math.isinf(request.num1) or math.isinf(request.num2):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('num1 and num2 must be finite numbers')
            return calculator_pb2.TotalResponse()

        # Check if num1 or num2 is negative
        if request.num1 < 0 or request.num2 < 0:
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('num1 and num2 must be positive numbers')
            return calculator_pb2.TotalResponse()
        
        

        try:
            total = request.num1 + request.num2
        except OverflowError:
            context.set_code(grpc.StatusCode.OUT_OF_RANGE)
            context.set_details('The sum of num1 and num2 is too large')
            return calculator_pb2.TotalResponse()

        response = calculator_pb2.TotalResponse()
        response.total = total
        response.success = True
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    calculator_pb2_grpc.add_CalculatorServicer_to_server(Calculator(), server)

      # Enable reflection for grpcurl
    service_names = (
        calculator_pb2.DESCRIPTOR.services_by_name['Calculator'].full_name,
        reflection.SERVICE_NAME
    )

    reflection.enable_server_reflection(service_names, server)    
    server.add_insecure_port('[::]:50055')
    server.start()
    print("Server is running. Listening on [::]:50055")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()