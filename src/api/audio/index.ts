import request from "@/utils/request";

enum API{
  AudioSubmit_URL = '/audio/submit'
}

export const submit = (data:object)=>{
  return request.post(API.AudioSubmit_URL,data)
}

