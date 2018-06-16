const schema = {
  'type': 'object',
  'additionalProperties': false,
  'required': ['id', 'jobname', 'date', 'workhours', 'pay', 'infoWorkerOnly'],
  'properties': {
    'id': {
      'type': 'number'
    },
    'jobname': {
      'type': 'string'
    },
    'date': {
      'type': 'string'
    },
    'workhours': {
      'type': 'number',
      'maximum': 10
    },
    'pay': {
      'type': 'number'
    },
    'infoWorkerOnly': {
      'type': 'string'
    }
  }
}