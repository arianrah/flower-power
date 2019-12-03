export const getInterview = (state, interview) => {
  if (!interview) {
    return null
  } else {
    let student = interview.student
    let interviewer = state.interviewers[interview.interviewer]
    let obj = { student, interviewer }
    return obj
  }
}


export const getGroups = (state, groupPlantSensor) => {
  if (!groupPlantSensor) {
    return null
  } else {
    let plant = groupPlantSensor.plant
    let sensor = groupPlantSensor.sensor
    let group = groupPlantSensor.group
  }
}