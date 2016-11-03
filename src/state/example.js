export default {
  selectedEventIds: [],
  constraints: {},
  eventContext: {
    minutesPerUnit: 15,
    range: {
      min: new Date(2016, 8, 19, 0, 0),
      max: new Date(2016, 8, 26, 0, 0)
    }
  },
  constrainedEvents: {
    work1: {
      id: `work1`,
      name: `work`,
      start: {
        min: new Date(2016, 8, 19, 6, 30),
        max: new Date(2016, 8, 19, 9, 30)
      },
      end: {
        min: new Date(2016, 8, 19, 16, 0),
        max: new Date(2016, 8, 19, 21, 0)
      },
      duration: {
        min: 24,
        max: 58
      }
    },
    work2: {
      id: `work2`,
      name: `work`,
      start: {
        min: new Date(2016, 8, 20, 6, 30),
        max: new Date(2016, 8, 20, 9, 30)
      },
      end: {
        min: new Date(2016, 8, 20, 16, 0),
        max: new Date(2016, 8, 20, 21, 0)
      },
      duration: {
        min: 24,
        max: 58
      }
    },
    work3: {
      id: `work3`,
      name: `work`,
      start: {
        min: new Date(2016, 8, 21, 6, 30),
        max: new Date(2016, 8, 21, 9, 30)
      },
      end: {
        min: new Date(2016, 8, 21, 16, 0),
        max: new Date(2016, 8, 21, 21, 0)
      },
      duration: {
        min: 24,
        max: 58
      }
    },
    work4: {
      id: `work4`,
      name: `work`,
      start: {
        min: new Date(2016, 8, 22, 6, 30),
        max: new Date(2016, 8, 22, 9, 30)
      },
      end: {
        min: new Date(2016, 8, 22, 16, 0),
        max: new Date(2016, 8, 22, 21, 0)
      },
      duration: {
        min: 24,
        max: 58
      }
    },
    work5: {
      id: `work5`,
      name: `work`,
      start: {
        min: new Date(2016, 8, 23, 6, 30),
        max: new Date(2016, 8, 23, 9, 30)
      },
      end: {
        min: new Date(2016, 8, 23, 16, 0),
        max: new Date(2016, 8, 23, 21, 0)
      },
      duration: {
        min: 24,
        max: 58
      }
    }
  }
}
