// enums are a great option when we want to restrict the number of options, regarding the values which can be assigned to a variable which uses the chosen type.

// type SeatChoice has following options:
enum SeatChoice {
  // in this case, AISLE is the default and has index 0
  // if we assign a different value to AISLE, all subsequent indexes will increment from that number
  // AISLE = 10 means MIDDLE will be 11, WINDOW 12, etc

  // if we assign a string value to AISLE, for example, AISLE = "aisle"
  // all subsequent options have to have values
  AISLE,

  // we can change MIDDLE from MIDDLE = 11 to, for example, MIDDLE = 22
  // WINDOW, in that case, will be WINDOW = 23
  MIDDLE,
  WINDOW,

  // added subsequently, because enums can be expanded
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;

const enum SeatChoice2 {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat2 = SeatChoice2.AISLE;

export {};
