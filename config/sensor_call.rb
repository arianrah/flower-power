require 'net/http'
uri = URI('http://localhost:8080/')
http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Get.new(uri.path, {'Content-Type' => 'application/json'})
request.body = ''
response = http.request(request)

